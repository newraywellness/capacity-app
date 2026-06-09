// ============================================================
//  SHOPIFY → SUPABASE WEBHOOK
//  When someone pays on Shopify, this flips their access on.
//  Lives at:  api/shopify-webhook.js  in your GitHub repo.
//  Deploys automatically to: https://YOUR-APP.vercel.app/api/shopify-webhook
//  No installing anything — it uses only built-in tools.
// ============================================================

import crypto from "crypto";

// Tell Vercel not to pre-open the envelope — we need the raw
// sealed letter to verify Shopify's signature.
export const config = { api: { bodyParser: false } };

// These come from Vercel's Environment Variables (set up in step 3).
const SUPABASE_URL          = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY  = process.env.SUPABASE_SERVICE_KEY;
const SHOPIFY_WEBHOOK_SECRET = process.env.SHOPIFY_WEBHOOK_SECRET;

// ── EDIT THESE to match YOUR Shopify product names ──────────
// If a purchased product's name contains one of these words
// (lowercase), the matching access is granted. Check your real
// product titles in Shopify and adjust if needed.
const MEMBERSHIP_KEYWORDS = ["member", "collective", "capacity method membership"];
const COURSE_KEYWORDS     = ["course", "reset", "4-week", "4 week"];
// ────────────────────────────────────────────────────────────

function readRaw(req){
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", c => chunks.push(c));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

async function grantAccess(email, fields){
  const url = `${SUPABASE_URL}/rest/v1/profiles?email=eq.${encodeURIComponent(email)}`;
  const res = await fetch(url, {
    method: "PATCH",
    headers: {
      "apikey": SUPABASE_SERVICE_KEY,
      "Authorization": `Bearer ${SUPABASE_SERVICE_KEY}`,
      "Content-Type": "application/json",
      "Prefer": "return=minimal",
    },
    body: JSON.stringify(fields),
  });
  return res.ok;
}

export default async function handler(req, res){
  if(req.method !== "POST"){ res.status(405).send("Method not allowed"); return; }

  // 1) read the raw body
  const raw = await readRaw(req);

  // 2) verify it really came from Shopify
  const sentSignature = req.headers["x-shopify-hmac-sha256"] || "";
  const ourSignature = crypto.createHmac("sha256", SHOPIFY_WEBHOOK_SECRET).update(raw).digest("base64");
  const valid = sentSignature.length === ourSignature.length &&
    crypto.timingSafeEqual(Buffer.from(ourSignature), Buffer.from(sentSignature));
  if(!valid){ res.status(401).send("Invalid signature"); return; }

  // 3) read the order
  let order;
  try { order = JSON.parse(raw.toString("utf8")); }
  catch(e){ res.status(400).send("Bad JSON"); return; }

  const email = (order.email || (order.customer && order.customer.email) || "").toLowerCase().trim();
  if(!email){ res.status(200).send("No email on order; ignored"); return; }

  // 4) figure out what they bought
  const titles = (order.line_items || []).map(li => (li.title || "").toLowerCase());
  const bought = (keywords) => titles.some(t => keywords.some(k => t.includes(k)));

  const fields = {};
  if(bought(MEMBERSHIP_KEYWORDS)) fields.has_membership = true;
  if(bought(COURSE_KEYWORDS))     fields.has_course = true;

  if(Object.keys(fields).length === 0){ res.status(200).send("No matching product; ignored"); return; }

  // 5) flip their access on (matched by email)
  await grantAccess(email, fields);
  res.status(200).send("ok");
}
