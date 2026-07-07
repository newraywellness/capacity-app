import { useState, useEffect, useMemo } from 'react'
import Head from 'next/head'
import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = "https://gidezdugmwtemohkkeyr.supabase.co"
const SUPABASE_KEY = "sb_publishable_bmt_uXzHvBlMTBpvkkRJPA_VpsEfPnp"
const db = createClient(SUPABASE_URL, SUPABASE_KEY)

const BASE = {
  bg: "#181410", bg2: "#211B15", surface: "#2A2219", surface2: "#352B20",
  border: "rgba(217,199,172,0.12)", cream: "#F2EADD", creamDim: "#D9C7AC",
  taupe: "#A8987F", terracotta: "#D08560", terracottaDeep: "#B56A47",
}
const THEMES = {
  none: { accent: BASE.terracotta, glow: "208,133,96", tint: "rgba(208,133,96,0.05)", label: "", range: "", word: "" },
  red: { accent: "#DC6F5E", glow: "220,111,94", tint: "rgba(220,111,94,0.10)", label: "Red Day", range: "0–35%", word: "Survive · stabilize · simplify" },
  yellow: { accent: "#E3AC5E", glow: "227,172,94", tint: "rgba(227,172,94,0.10)", label: "Yellow Day", range: "36–70%", word: "Steady progress, protect tomorrow" },
  green: { accent: "#94AC6E", glow: "148,172,110", tint: "rgba(148,172,110,0.10)", label: "Green Day", range: "71–100%", word: "Plan · grow · build" },
}
const colorFromPct = (p) => (p <= 35 ? "red" : p <= 70 ? "yellow" : "green")
const FACTORS = ["Poor sleep", "Interrupted sleep", "Stress", "Work demands", "Parenting", "Hormonal changes", "Anxiety", "Mental load", "Illness", "Grief or loss"]
const SUPPORTS = ["Rest", "Food", "Water", "Quiet", "Connection", "Movement", "Time outside", "Saying no", "Slowing down"]
const QUOTES = {
  red: "Capacity is not character. A Red Day means your system needs support, not pressure.",
  yellow: "Most of life is not lived on Green Days. The goal is to do enough — not everything.",
  green: "Use the energy you have wisely. Build on the good days without spending tomorrow's energy.",
  none: "Stop expecting Green Day performance on Red Day energy.",
}

const SHARE_TRUE = ["Tired", "Overwhelmed", "Anxious", "Emotionally full", "Fine but low energy", "Good but busy"]
const SHARE_NEED = ["Patience", "Help with the kids", "Quiet time", "No heavy conversations", "Teamwork", "Affection", "Just awareness"]
const SHARE_LEVELS = {
  red: { emoji: "🔴", label: "Red — survival mode", short: "Red" },
  yellow: { emoji: "🟡", label: "Yellow — functional but limited", short: "Yellow" },
  green: { emoji: "🟢", label: "Green — resourced & present", short: "Green" },
}

const PHASES = {
  menstrual: {
    emoji: "🩸", name: "Menstrual", accent: "#C97B6E",
    thisIsntYou: "Rest is productive. Recovery is part of building capacity — not time taken away from it. Lower energy here isn't you slipping.",
    lookingAhead: "You're in your menstrual phase. Keep your schedule lighter where you can, prioritize warmth, rest, and food, and let \u2018enough\u2019 be enough.",
  },
  follicular: {
    emoji: "🌱", name: "Follicular", accent: "#94AC6E",
    thisIsntYou: "You may notice more steadiness or motivation now. Use it intentionally — and don't expect yourself to feel this way every day. This is a season, not a standard.",
    lookingAhead: "You're in your follicular phase. Often a good window for planning and starting things. Build gently — you don't have to spend it all at once.",
  },
  ovulation: {
    emoji: "☀️", name: "Ovulation", accent: "#E3AC5E",
    thisIsntYou: "This is often a higher-energy window. It can feel like your \u2018real\u2019 self — but every phase is you. Don't set the bar here for all the others.",
    lookingAhead: "You're around your ovulation window. A good time for connection and anything that takes a little more social energy. Enjoy it without overcommitting.",
  },
  luteal: {
    emoji: "🍂", name: "Luteal", accent: "#B98A6E",
    thisIsntYou: "You're not becoming lazy or \u2018less.\u2019 Capacity often dips in this phase. Adjust your expectations — not your worth.",
    lookingAhead: "You're heading into your luteal phase — historically a lower-capacity stretch for many. A good week to protect sleep, lean on protein and hydration, and give yourself extra grace.",
  },
}
const PHASE_ORDER = ["menstrual", "follicular", "ovulation", "luteal"]

// Estimate cycle day + phase from cycle length and last period start date
function computeCycle(cycleLength, lastPeriodISO, when) {
  if (!cycleLength || !lastPeriodISO) return null
  const L = Math.max(20, Math.min(45, parseInt(cycleLength)))
  const start = new Date(lastPeriodISO + "T00:00:00")
  const ref = when ? new Date(when) : new Date()
  const ms = 86400000
  const diff = Math.floor((ref - start) / ms)
  if (isNaN(diff)) return null
  const day = (((diff % L) + L) % L) + 1
  const ovu = Math.max(12, L - 14)
  let phase
  if (day <= 5) phase = "menstrual"
  else if (day < ovu - 1) phase = "follicular"
  else if (day <= ovu + 1) phase = "ovulation"
  else phase = "luteal"
  return { day, phase, length: L }
}

// Capacity-based workout library: 4 types x 3 capacity levels
const PHASE_SUGGESTION = { menstrual: "red", follicular: "green", ovulation: "green", luteal: "yellow" }
const WO_TYPES = [
  { key: "full", label: "Full Body" },
  { key: "legs", label: "Leg Day" },
  { key: "upper", label: "Upper Body" },
  { key: "walk", label: "Walk / Cardio" },
]
const WORKOUTS = {
  walk: {
    red: { title: "Show Up Gently", time: "10-20 min", note: "On a Red day, showing up IS the workout. Walk, then go home proud.", exercises: [
      { name: "Treadmill walk - easy pace", sets: 1, reps: "10-20 min", cue: "Flat or a gentle incline. Music or silence - your call." },
    ]},
    yellow: { title: "The Steady Walk", time: "20-30 min", note: "Purposeful, not punishing. You should be able to talk, but not sing.", exercises: [
      { name: "Treadmill walk - brisk", sets: 1, reps: "20-30 min", cue: "Comfortable but intentional pace." },
      { name: "Incline minutes (optional)", sets: 1, reps: "5 x 1 min", cue: "Bump incline to 3-5% for a minute, then recover flat." },
    ]},
    green: { title: "Cardio That Builds", time: "40-60 min", note: "You have energy today - use it well, without spending tomorrow's.", exercises: [
      { name: "Warmup walk", sets: 1, reps: "5 min", cue: "Ease in. Let your body arrive." },
      { name: "Incline or jog intervals", sets: 1, reps: "8-10 x 2 min", cue: "Work hard-ish for 2 minutes, easy for 1 between." },
      { name: "Cooldown + stretch", sets: 1, reps: "5-10 min", cue: "Let your heart rate come all the way down." },
    ]},
  },
  full: {
    red: { title: "The Gentle Circuit", time: "~15 min", note: "Light, kind movement. Every rep here fully counts.", exercises: [
      { name: "Squat to a bench", sets: 2, reps: "10", cue: "Sit back until you touch, stand tall. Control over speed." },
      { name: "Wall or incline pushups", sets: 2, reps: "8-10", cue: "Body in one line. Ease down slowly." },
      { name: "Band or light seated row", sets: 2, reps: "10", cue: "Shoulders down, squeeze between the shoulder blades." },
      { name: "Stretch anything tight", sets: 1, reps: "5 min", cue: "Whatever feels kind today." },
    ]},
    yellow: { title: "Short + Solid", time: "~25 min", note: "Three lifts, done well. Enough beats impressive.", exercises: [
      { name: "Goblet squat", sets: 3, reps: "10", cue: "Hold the weight at your chest, elbows inside knees at the bottom." },
      { name: "Seated cable row", sets: 3, reps: "10", cue: "Tall posture. Pull to your ribs, not your neck." },
      { name: "Machine chest press", sets: 3, reps: "10", cue: "Wrists stacked over elbows. Smooth on the way back." },
    ]},
    green: { title: "The Full Builder", time: "40-60 min", note: "The complete session - strength you will feel all week.", exercises: [
      { name: "Goblet or barbell squat", sets: 4, reps: "8-10", cue: "Brace like someone is about to poke your stomach." },
      { name: "Romanian deadlift", sets: 3, reps: "10", cue: "Soft knees, push hips back, feel the hamstrings - not the low back." },
      { name: "Chest press", sets: 3, reps: "8-10", cue: "Control down, powerful up." },
      { name: "Lat pulldown", sets: 3, reps: "10", cue: "Lead with the elbows. Chest tall." },
      { name: "Plank", sets: 3, reps: "30-45 sec", cue: "Squeeze glutes, ribs down. Quality over seconds." },
    ]},
  },
  legs: {
    red: { title: "Legs, Softly", time: "~15 min", note: "Blood flow, not breakdown. Gentle counts.", exercises: [
      { name: "Easy bike or walk", sets: 1, reps: "10 min", cue: "Conversational pace. Just warm the legs up." },
      { name: "Glute bridge", sets: 2, reps: "12", cue: "Ribs down, squeeze at the top for a full second." },
      { name: "Calf raises", sets: 2, reps: "12", cue: "Slow up, slower down." },
    ]},
    yellow: { title: "Essential Legs", time: "~25 min", note: "The big movers, kept honest and short.", exercises: [
      { name: "Goblet squat", sets: 3, reps: "10", cue: "Depth you can control - no lower." },
      { name: "Leg press", sets: 3, reps: "12", cue: "Feet mid-platform. Do not lock the knees hard at the top." },
      { name: "Glute bridge", sets: 3, reps: "12", cue: "Drive through the heels." },
    ]},
    green: { title: "Leg Day, For Real", time: "45-60 min", note: "Five movements. Strong legs carry everything else.", exercises: [
      { name: "Squat", sets: 4, reps: "8", cue: "Brace, sit down between your hips, drive up." },
      { name: "Romanian deadlift", sets: 3, reps: "10", cue: "Hips back until the hamstrings speak, then stand tall." },
      { name: "Leg press", sets: 3, reps: "10-12", cue: "Full control - the weight never slams." },
      { name: "Walking lunges", sets: 3, reps: "10/leg", cue: "Long steps, torso proud." },
      { name: "Hip thrust or glute bridge", sets: 3, reps: "12", cue: "Chin tucked, full squeeze at the top." },
    ]},
  },
  upper: {
    red: { title: "Upper, Easy Does It", time: "~15 min", note: "Wake the muscles up without emptying the tank.", exercises: [
      { name: "Band pull-aparts", sets: 2, reps: "12", cue: "Arms straight, squeeze the shoulder blades." },
      { name: "Wall pushups", sets: 2, reps: "8-10", cue: "Slow and controlled beats many and messy." },
      { name: "Light dumbbell curls", sets: 2, reps: "10", cue: "Elbows glued to your sides." },
    ]},
    yellow: { title: "Upper Essentials", time: "~25 min", note: "Push, pull, press. The trio that keeps you strong.", exercises: [
      { name: "Lat pulldown", sets: 3, reps: "10", cue: "Pull to the collarbone, elbows down and back." },
      { name: "Machine chest press", sets: 3, reps: "10", cue: "Smooth tempo both directions." },
      { name: "Seated shoulder press", sets: 3, reps: "10", cue: "Ribs down - do not arch to push." },
    ]},
    green: { title: "The Upper Builder", time: "40-60 min", note: "The full session. Strong shoulders, strong posture, strong you.", exercises: [
      { name: "Lat pulldown", sets: 4, reps: "10", cue: "Chest tall, lead with the elbows." },
      { name: "Chest press", sets: 4, reps: "8-10", cue: "Control the negative - that is where strength builds." },
      { name: "Seated row", sets: 3, reps: "10", cue: "Squeeze the mid-back, not the arms." },
      { name: "Shoulder press", sets: 3, reps: "10", cue: "Press up and slightly back, biceps by the ears." },
      { name: "Curls + triceps pushdown superset", sets: 3, reps: "12 each", cue: "Back to back, minimal rest. Finish strong." },
    ]},
  },
}

const ShopItems = [
  { name: "Respectfully, No", price: "$54", blurb: "For the art of the boundary.", url: "https://new-ray-wellness.myshopify.com/products/hoodie-respectfully-no-floral-graphic-pullover" },
  { name: "Out of Office: Nervous System Maintenance", price: "$58", blurb: "A Red Day, worn proudly.", url: "https://new-ray-wellness.myshopify.com/products/minimalist-hoodie-subtle-embossed-text-crew-pullover" },
  { name: "Capacity is not Character", price: "$54", blurb: "The reminder, on your sleeve.", url: "https://new-ray-wellness.myshopify.com/products/capacity-is-not-character-hoodie-new-ray-wellness-motivational-sweatshirt" },
]

export default function App() {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [tab, setTab] = useState("today")
  const [pct, setPct] = useState(50)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(true)
  const [history, setHistory] = useState([])
  const [checkedIn, setCheckedIn] = useState(false)
  const [factors, setFactors] = useState([])
  const [supports, setSupports] = useState([])
  const [oneThing, setOneThing] = useState("")
  const [baseline, setBaseline] = useState([false, false, false, false, false])
  const [saving, setSaving] = useState(false)
  const [saveErr, setSaveErr] = useState("")
  // cycle settings (stored on device for v1)
  const [cycleLength, setCycleLength] = useState("")
  const [lastPeriod, setLastPeriod] = useState("")
  const [editCycle, setEditCycle] = useState(false)
  const [tmpLen, setTmpLen] = useState("28")
  const [tmpStart, setTmpStart] = useState("")
  // auth UX: guest preview, password recovery, status messages
  const [guest, setGuest] = useState(false)
  const [recovery, setRecovery] = useState(false)
  const [authMsg, setAuthMsg] = useState("")
  const [newPass, setNewPass] = useState("")
  // share-with-partner (couples capacity check-in)
  const [shareLevel, setShareLevel] = useState("yellow")
  const [shareTrue, setShareTrue] = useState([])
  const [shareNeed, setShareNeed] = useState([])
  const [shareContext, setShareContext] = useState("")
  const [shareStatus, setShareStatus] = useState("")

  const [woColor, setWoColor] = useState(null)
  const [woType, setWoType] = useState("full")
  const [woDone, setWoDone] = useState({})

  useEffect(() => { checkAuth() }, [])

  useEffect(() => {
    const { data: sub } = db.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY") setRecovery(true)
    })
    return () => { try { sub.subscription.unsubscribe() } catch (e) {} }
  }, [])

  useEffect(() => {
    try {
      const L = window.localStorage.getItem("cap_cycle_length")
      const S = window.localStorage.getItem("cap_last_period")
      if (L) setCycleLength(L)
      if (S) setLastPeriod(S)
      if (L) setTmpLen(L)
      if (S) setTmpStart(S)
    } catch (e) {}
  }, [])

  const checkAuth = async () => {
    try {
      const s = await db.auth.getSession()
      if (s.data.session) {
        const u = s.data.session.user
        setUser(u)
        const p = await db.from("profiles").select("*").eq("id", u.id).single()
        if (p.data) setProfile(p.data)
        await loadHistory(u.id)
      }
    } catch (err) { console.log(err) }
    setLoading(false)
  }

  const loadHistory = async (uid) => {
    const { data } = await db.from("checkins").select("*").eq("user_id", uid).order("date", { ascending: true })
    const rows = data || []
    setHistory(rows.map((d) => ({
      date: new Date(d.date + "T00:00:00"),
      dateISO: d.date,
      pct: d.pct,
      color: d.color,
      factors: Array.isArray(d.factors) ? d.factors : [],
      supports: Array.isArray(d.supports) ? d.supports : [],
    })))
    const today = new Date().toISOString().slice(0, 10)
    if (rows.some((d) => d.date === today)) setCheckedIn(true)
  }

  const handleLogin = async () => {
    try {
      const res = await db.auth.signInWithPassword({ email, password })
      if (res.data.user) {
        setUser(res.data.user)
        const p = await db.from("profiles").select("*").eq("id", res.data.user.id).single()
        if (p.data) setProfile(p.data)
        await loadHistory(res.data.user.id)
        setEmail(""); setPassword("")
      }
    } catch (err) { alert("Login failed") }
  }

  const handleSignUp = async () => {
    try {
      const res = await db.auth.signUp({ email, password })
      if (res.data.user) {
        await db.from("profiles").insert([{ id: res.data.user.id, email, has_membership: false }])
        setUser(res.data.user); setEmail(""); setPassword("")
      }
    } catch (err) { alert("Signup failed") }
  }

  const handleLogout = async () => {
    await db.auth.signOut(); setUser(null); setProfile(null); setCheckedIn(false); setHistory([])
  }

  const handleForgot = async () => {
    if (!email) { setAuthMsg("Enter your email above first, then tap reset."); return }
    setAuthMsg("")
    try {
      await db.auth.resetPasswordForEmail(email, { redirectTo: window.location.origin })
      setAuthMsg("Check your email for a link to reset your password.")
    } catch (err) { setAuthMsg("Couldn't send the reset email — double-check the address.") }
  }

  const handleSetNewPassword = async () => {
    if (newPass.length < 6) { setAuthMsg("Password must be at least 6 characters."); return }
    try {
      const { error } = await db.auth.updateUser({ password: newPass })
      if (error) { setAuthMsg(error.message); return }
      setRecovery(false); setNewPass(""); setAuthMsg("")
      await checkAuth()
    } catch (err) { setAuthMsg("Couldn't update password. Try the reset link again.") }
  }

  const toggle = (arr, set, v) => set(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v])

  const saveCheckin = async () => {
    setSaving(true); setSaveErr("")
    const color = colorFromPct(pct)
    const today = new Date().toISOString().slice(0, 10)
    const { error } = await db.from("checkins").upsert(
      { user_id: user.id, date: today, pct, color, factors, supports, one_thing: oneThing },
      { onConflict: "user_id,date" }
    )
    setSaving(false)
    if (error) { setSaveErr(error.message); return }
    setCheckedIn(true)
    await loadHistory(user.id)
  }

  const saveCycle = () => {
    const L = String(Math.max(20, Math.min(45, parseInt(tmpLen) || 28)))
    setCycleLength(L)
    setLastPeriod(tmpStart)
    try {
      window.localStorage.setItem("cap_cycle_length", L)
      window.localStorage.setItem("cap_last_period", tmpStart)
    } catch (e) {}
    setEditCycle(false)
  }

  const buildShareMessage = () => {
    const L = SHARE_LEVELS[shareLevel]
    const lines = [`My capacity today: ${L.emoji} ${L.label}`]
    if (shareTrue.length) lines.push(`What's true for me: ${shareTrue.join(", ")}`)
    if (shareNeed.length) lines.push(`What I need: ${shareNeed.join(", ")}`)
    if (shareContext.trim()) lines.push(shareContext.trim())
    lines.push("— shared via New Ray · The Capacity Method")
    return lines.join("\n")
  }

  const flashStatus = (msg) => { setShareStatus(msg); setTimeout(() => setShareStatus(""), 2500) }

  const handleShare = async () => {
    const msg = buildShareMessage()
    try {
      if (typeof navigator !== "undefined" && navigator.share) {
        await navigator.share({ text: msg })
        flashStatus("Shared")
        return
      }
    } catch (e) { /* user canceled or unsupported — fall through to copy */ }
    try {
      await navigator.clipboard.writeText(msg)
      flashStatus("Copied — paste it to your partner")
    } catch (e) { flashStatus("Copy the message below to share") }
  }

  const handleCopyShare = async () => {
    try {
      await navigator.clipboard.writeText(buildShareMessage())
      flashStatus("Copied to clipboard")
    } catch (e) { flashStatus("Select the message below to copy") }
  }

  const Fonts = () => (
    <Head>
      <title>The Capacity Method · New Ray Wellness</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Pinyon+Script&family=Sacramento&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Nunito+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
    </Head>
  )

  const GlobalStyle = () => (
    <style jsx global>{`
      * { margin: 0; padding: 0; box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
      html, body { background: #181410; color: #F2EADD; font-family: 'Nunito Sans', -apple-system, sans-serif; }
      ::-webkit-scrollbar { width: 0; }
      a { text-decoration: none; }
      input[type=range] { -webkit-appearance: none; appearance: none; height: 6px; border-radius: 999px; outline: none; }
      input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; width: 26px; height: 26px; border-radius: 50%; background: #F2EADD; cursor: pointer; border: 3px solid var(--accent, #D08560); }
      input[type=range]::-moz-range-thumb { width: 26px; height: 26px; border-radius: 50%; background: #F2EADD; cursor: pointer; border: 3px solid var(--accent, #D08560); }
      @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
      @keyframes breathe { 0%,100% { opacity: .9; } 50% { opacity: 1; } }
      .fade-in { animation: fadeIn 0.5s ease both; }
      .glow-breathe { animation: breathe 6s ease-in-out infinite; }
    `}</style>
  )

  if (loading) {
    return (
      <><Fonts /><GlobalStyle />
        <div style={{ background: BASE.bg, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", maxWidth: 440, margin: "0 auto" }}>
          <div style={{ fontFamily: "'Pinyon Script', cursive", fontSize: 46, color: BASE.cream }}>New Ray</div>
        </div>
      </>
    )
  }

  if (recovery) {
    return (
      <><Fonts /><GlobalStyle />
        <div style={{ background: BASE.bg, minHeight: "100vh", maxWidth: 440, margin: "0 auto", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 28px" }}>
          <div style={{ textAlign: "center", marginBottom: 18 }}>
            <div style={{ fontFamily: "'Pinyon Script', cursive", fontSize: 44, color: BASE.cream, marginBottom: 8 }}>New Ray</div>
            <div style={{ fontSize: 13, color: BASE.creamDim }}>Choose a new password</div>
          </div>
          <input type="password" placeholder="New password" value={newPass} onChange={(e) => setNewPass(e.target.value)} style={{ width: "100%", padding: 14, background: BASE.surface2, border: `1px solid ${BASE.border}`, color: BASE.cream, borderRadius: 8, fontSize: 14, marginBottom: 16 }} />
          {authMsg && <div style={{ fontSize: 13, color: BASE.creamDim, textAlign: "center", marginBottom: 14, lineHeight: 1.5 }}>{authMsg}</div>}
          <button onClick={handleSetNewPassword} style={{ width: "100%", padding: 16, background: BASE.terracotta, color: "#1a140f", border: "none", borderRadius: 12, cursor: "pointer", fontWeight: 700, fontSize: 15 }}>Save new password</button>
        </div>
      </>
    )
  }

  if (!user && !guest) {
    return (
      <><Fonts /><GlobalStyle />
        <div style={{ background: BASE.bg, minHeight: "100vh", maxWidth: 440, margin: "0 auto", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 28px" }}>
          <div style={{ textAlign: "center", marginBottom: 14 }}>
            <div style={{ fontFamily: "'Pinyon Script', cursive", fontSize: 52, color: BASE.cream, marginBottom: 8 }}>New Ray</div>
            <div style={{ fontSize: 11, letterSpacing: 4, textTransform: "uppercase", color: BASE.taupe }}>The Capacity Method</div>
          </div>
          <input type="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value); setAuthMsg("") }} style={{ width: "100%", padding: 14, background: BASE.surface2, border: `1px solid ${BASE.border}`, color: BASE.cream, borderRadius: 8, fontSize: 14, marginBottom: 12 }} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: "100%", padding: 14, background: BASE.surface2, border: `1px solid ${BASE.border}`, color: BASE.cream, borderRadius: 8, fontSize: 14, marginBottom: 8 }} />
          <div onClick={handleForgot} style={{ fontSize: 12, color: BASE.taupe, textAlign: "right", marginBottom: 18, cursor: "pointer" }}>Forgot password?</div>
          {authMsg && <div style={{ fontSize: 13, color: BASE.creamDim, textAlign: "center", marginBottom: 14, lineHeight: 1.5 }}>{authMsg}</div>}
          <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
            <button onClick={handleLogin} style={{ flex: 1, padding: 16, background: BASE.terracotta, color: "#1a140f", border: "none", borderRadius: 12, cursor: "pointer", fontWeight: 700, fontSize: 15 }}>Log In</button>
            <button onClick={handleSignUp} style={{ flex: 1, padding: 16, background: BASE.terracotta, color: "#1a140f", border: "none", borderRadius: 12, cursor: "pointer", fontWeight: 700, fontSize: 15 }}>Sign Up</button>
          </div>
          <button onClick={() => { setGuest(true); setAuthMsg("") }} style={{ width: "100%", padding: 14, background: "transparent", color: BASE.cream, border: `1px solid ${BASE.border}`, borderRadius: 12, cursor: "pointer", fontWeight: 600, fontSize: 14 }}>Try it first — no account needed</button>
        </div>
      </>
    )
  }

  if (!user && guest) {
    const gcur = colorFromPct(pct)
    const GT = THEMES[gcur]
    return (
      <><Fonts /><GlobalStyle />
        <div style={{ "--accent": GT.accent, background: BASE.bg, minHeight: "100vh", maxWidth: 440, margin: "0 auto", padding: "0 22px 40px" }}>
          <header style={{ padding: "26px 0 6px", textAlign: "center" }}>
            <div style={{ fontFamily: "'Pinyon Script', cursive", fontSize: 40, color: BASE.cream }}>New Ray</div>
            <div style={{ fontSize: 11, letterSpacing: 4, textTransform: "uppercase", color: BASE.taupe, marginTop: 6 }}>The Capacity Method</div>
          </header>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontSize: 24, textAlign: "center", margin: "24px 0 4px" }}>How's your capacity today?</h2>
          <div style={{ textAlign: "center", margin: "10px 0 4px" }}>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 64, fontWeight: 600, color: GT.accent }}>{pct}</span>
            <span style={{ fontSize: 22, color: BASE.taupe }}>%</span>
          </div>
          <input type="range" min="0" max="100" step="5" value={pct} onChange={(e) => setPct(+e.target.value)} style={{ width: "100%", margin: "8px 0 14px", background: `linear-gradient(90deg, ${GT.accent} ${pct}%, ${BASE.surface2} ${pct}%)` }} />
          <div style={{ textAlign: "center", fontSize: 14, color: BASE.taupe, textTransform: "uppercase", letterSpacing: 1, marginBottom: 22 }}>{gcur === "red" ? "Red Day — Restoration Mode" : gcur === "yellow" ? "Yellow Day — Steady Pace" : "Green Day — Full Capacity"}</div>
          <div style={{ padding: 20, borderRadius: 16, background: GT.tint, border: `1px solid rgba(${GT.glow},0.3)`, textAlign: "center", marginBottom: 24 }}>
            <p style={{ fontFamily: "'Sacramento', cursive", fontSize: 26, lineHeight: 1.35, color: GT.accent }}>{"\u201C"}{QUOTES[gcur]}{"\u201D"}</p>
            <p style={{ fontSize: 11, color: BASE.taupe, marginTop: 8, letterSpacing: 1 }}>— VANESSA, RN</p>
          </div>
          <p style={{ fontSize: 14, color: BASE.creamDim, textAlign: "center", lineHeight: 1.6, marginBottom: 18 }}>This is your daily check-in. Create a free account to save your days, see your trends, and unlock your cycle insights.</p>
          <button onClick={() => { setGuest(false); setAuthMsg("") }} style={{ width: "100%", padding: 16, background: GT.accent, color: "#1a140f", border: "none", borderRadius: 12, cursor: "pointer", fontWeight: 700, fontSize: 15, marginBottom: 10 }}>Create my free account</button>
          <button onClick={() => setGuest(false)} style={{ width: "100%", padding: 12, background: "transparent", color: BASE.taupe, border: `1px solid ${BASE.border}`, borderRadius: 12, cursor: "pointer", fontWeight: 600, fontSize: 13 }}>Back</button>
        </div>
      </>
    )
  }

  const themeKey = checkedIn ? colorFromPct(pct) : "none"
  const T = THEMES[themeKey]
  const cur = colorFromPct(pct)
  const dateStr = new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })
  const cycleNow = computeCycle(cycleLength, lastPeriod)

  const Label = ({ children }) => (
    <div style={{ fontSize: 13, fontWeight: 700, color: BASE.cream, marginBottom: 10 }}>{children}</div>
  )

  const Chips = ({ items, selected, onToggle }) => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      {items.map((item) => {
        const on = selected.includes(item)
        return (
          <button key={item} onClick={() => onToggle(item)} style={{ padding: "8px 14px", borderRadius: 999, fontSize: 13, cursor: "pointer", background: on ? THEMES[cur].accent : BASE.surface, color: on ? "#1a140f" : BASE.creamDim, border: `1px solid ${on ? THEMES[cur].accent : BASE.border}`, fontWeight: on ? 700 : 500 }}>
            {item}
          </button>
        )
      })}
    </div>
  )

  const Stat = ({ label, value, accent }) => (
    <div style={{ padding: 16, borderRadius: 14, background: BASE.surface, border: `1px solid ${BASE.border}` }}>
      <div style={{ fontSize: 11, color: BASE.taupe, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>{label}</div>
      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 30, fontWeight: 600, color: accent }}>{value}</div>
    </div>
  )

  const Protocol = () => {
    const RED = ["Drink water", "Eat something with protein", "Basic hygiene", "Take medications", "Rest when possible"]
    return (
      <div className="fade-in" style={{ marginTop: 26 }}>
        <div style={{ textAlign: "center", padding: "0 6px 22px" }}>
          <p style={{ fontFamily: "'Sacramento', cursive", fontSize: 30, lineHeight: 1.35, color: T.accent }}>{"\u201C"}{QUOTES[cur]}{"\u201D"}</p>
          <p style={{ fontSize: 11, color: BASE.taupe, marginTop: 8, letterSpacing: 1 }}>— VANESSA, RN</p>
        </div>
        <div style={{ padding: 18, borderRadius: 16, background: T.tint, border: `1px solid rgba(${T.glow},0.3)` }}>
          <div style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: T.accent, fontWeight: 700 }}>{T.label} · {T.word}</div>
          {cur === "red" && (
            <>
              <p style={{ fontSize: 14, color: BASE.creamDim, margin: "12px 0 14px", lineHeight: 1.6 }}>Your only goal today is to stay safe, stable, and minimally supported. Everything else can wait.</p>
              <div style={{ fontSize: 11, color: BASE.taupe, marginBottom: 8, fontWeight: 600 }}>BASELINE CARE</div>
              {RED.map((item, i) => (
                <div key={i} onClick={() => setBaseline(baseline.map((b, j) => (j === i ? !b : b)))} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", cursor: "pointer", borderBottom: i < 4 ? `0.5px solid ${BASE.border}` : "none" }}>
                  <span style={{ width: 22, height: 22, borderRadius: "50%", border: `1.5px solid ${baseline[i] ? T.accent : BASE.taupe}`, background: baseline[i] ? T.accent : "transparent", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: "#1a140f" }}>{baseline[i] ? "✓" : ""}</span>
                  <span style={{ fontSize: 14, color: baseline[i] ? BASE.taupe : BASE.cream, textDecoration: baseline[i] ? "line-through" : "none" }}>{item}</span>
                </div>
              ))}
            </>
          )}
          {cur === "yellow" && (
            <>
              <p style={{ fontSize: 14, color: BASE.creamDim, margin: "12px 0 14px", lineHeight: 1.6 }}>You can do things — you just can't do everything. Handle today while protecting tomorrow.</p>
              {[["Essential", "Must happen: work, childcare, meals"], ["Important", "Pick one or two: errands, movement, prep"], ["Optional", "Let it wait: deep cleaning, catching up"]].map(([h, d], i) => (
                <div key={i} style={{ padding: "10px 0", borderBottom: i < 2 ? `0.5px solid ${BASE.border}` : "none" }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: T.accent }}>{h}</div>
                  <div style={{ fontSize: 13, color: BASE.creamDim, marginTop: 2 }}>{d}</div>
                </div>
              ))}
            </>
          )}
          {cur === "green" && (
            <>
              <p style={{ fontSize: 14, color: BASE.creamDim, margin: "12px 0 14px", lineHeight: 1.6 }}>You're resourced. This is the time for the things Red and Yellow days can't hold.</p>
              {["Plan and set goals", "Deep or creative work", "A bigger project or habit", "Connection and growth"].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 10, padding: "8px 0", fontSize: 14, color: BASE.cream }}><span style={{ color: T.accent }}>›</span>{item}</div>
              ))}
            </>
          )}
        </div>
      </div>
    )
  }

  // ---- analytics over history ----
  const topOf = (rows, key) => {
    const tally = {}
    rows.forEach((r) => (r[key] || []).forEach((v) => { tally[v] = (tally[v] || 0) + 1 }))
    const arr = Object.entries(tally).sort((a, b) => b[1] - a[1])
    return arr.length ? arr[0][0] : null
  }

  const stats = (() => {
    if (!history.length) return null
    const counts = { red: 0, yellow: 0, green: 0 }
    let sum = 0
    history.forEach((d) => { counts[d.color]++; sum += d.pct })
    return { counts, avg: Math.round(sum / history.length), top: Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0] }
  })()

  // capacity average per cycle phase (needs cycle set + history)
  const phaseAverages = (() => {
    if (!cycleLength || !lastPeriod || !history.length) return null
    const buckets = { menstrual: [], follicular: [], ovulation: [], luteal: [] }
    history.forEach((d) => {
      const c = computeCycle(cycleLength, lastPeriod, d.date)
      if (c) buckets[c.phase].push(d.pct)
    })
    const out = {}
    let any = false
    PHASE_ORDER.forEach((p) => {
      if (buckets[p].length) { out[p] = Math.round(buckets[p].reduce((a, b) => a + b, 0) / buckets[p].length); any = true }
      else out[p] = null
    })
    return any ? out : null
  })()

  // monthly capacity report (current calendar month)
  const report = (() => {
    if (!history.length) return null
    const now = new Date()
    const m = now.getMonth(), y = now.getFullYear()
    const rows = history.filter((d) => d.date.getMonth() === m && d.date.getFullYear() === y)
    if (!rows.length) return { empty: true, monthName: now.toLocaleDateString("en-US", { month: "long" }) }
    const counts = { red: 0, yellow: 0, green: 0 }
    let sum = 0
    rows.forEach((d) => { counts[d.color]++; sum += d.pct })
    const avg = Math.round(sum / rows.length)
    const redRows = rows.filter((d) => d.color === "red")
    const greenRows = rows.filter((d) => d.color === "green")
    const trigger = topOf(redRows.length ? redRows : rows, "factors")
    const recovery = topOf(greenRows.length ? greenRows : rows, "supports")
    let bestPhase = null
    if (phaseAverages) {
      const ranked = PHASE_ORDER.filter((p) => phaseAverages[p] != null).sort((a, b) => phaseAverages[b] - phaseAverages[a])
      if (ranked.length) bestPhase = ranked[0]
    }
    const reminder = counts.green >= counts.red
      ? "You had at least as many Green Days as Red this month — your patterns are leaning steadier. That's worth noticing."
      : "Red Days outnumbered Green this month. That's information, not failure — it shows where your system needed more support."
    return { empty: false, monthName: now.toLocaleDateString("en-US", { month: "long" }), avg, counts, trigger, recovery, bestPhase, days: rows.length }
  })()

  const ReportLine = ({ label, value }) => (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, padding: "8px 0" }}>
      <span style={{ fontSize: 13, color: BASE.taupe }}>{label}</span>
      <span style={{ fontSize: 14, color: BASE.cream, fontWeight: 600, textAlign: "right" }}>{value}</span>
    </div>
  )


  const renderContent = () => {
    if (tab === "today") {
      return (
        <div style={{ padding: "8px 18px 0" }}>
          <p style={{ textAlign: "center", color: BASE.creamDim, fontSize: 14, margin: "4px 0 2px" }}>Good morning</p>
          <p style={{ textAlign: "center", color: BASE.taupe, fontSize: 12 }}>{dateStr}</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontSize: 24, textAlign: "center", margin: "26px 0 4px" }}>How's your capacity today?</h2>
          <div style={{ textAlign: "center", margin: "10px 0 4px" }}>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 64, fontWeight: 600, color: THEMES[cur].accent }}>{pct}</span>
            <span style={{ fontSize: 22, color: BASE.taupe }}>%</span>
          </div>
          <input type="range" min="0" max="100" step="5" value={pct} onChange={(e) => setPct(+e.target.value)} style={{ width: "100%", margin: "8px 0 20px", background: `linear-gradient(90deg, ${THEMES[cur].accent} ${pct}%, ${BASE.surface2} ${pct}%)` }} />
          <div style={{ display: "flex", gap: 10, marginBottom: 22 }}>
            {["red", "yellow", "green"].map((k) => {
              const active = cur === k
              return (
                <div key={k} onClick={() => setPct(k === "red" ? 25 : k === "yellow" ? 55 : 85)} style={{ flex: 1, cursor: "pointer", textAlign: "center", padding: "16px 6px", borderRadius: 16, background: active ? THEMES[k].tint : BASE.surface, border: `1.5px solid ${active ? THEMES[k].accent : BASE.border}` }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 19, fontWeight: 600, color: THEMES[k].accent }}>{THEMES[k].label.split(" ")[0]}</div>
                  <div style={{ fontSize: 10, color: BASE.taupe, marginTop: 2 }}>{THEMES[k].range}</div>
                </div>
              )
            })}
          </div>
          <Label>What's affecting you?</Label>
          <Chips items={FACTORS} selected={factors} onToggle={(v) => toggle(factors, setFactors, v)} />
          <div style={{ height: 20 }} />
          <Label>What would support you most?</Label>
          <Chips items={SUPPORTS} selected={supports} onToggle={(v) => toggle(supports, setSupports, v)} />
          <div style={{ height: 20 }} />
          <Label>Today's one thing</Label>
          <input type="text" value={oneThing} onChange={(e) => setOneThing(e.target.value)} placeholder="The single thing that would make today a success…" style={{ width: "100%", padding: "13px 15px", borderRadius: 12, background: BASE.surface, border: `1px solid ${BASE.border}`, color: BASE.cream, fontSize: 14, outline: "none" }} />
          {saveErr && <div style={{ marginTop: 14, padding: 12, borderRadius: 12, background: "rgba(220,111,94,0.12)", border: "1px solid rgba(220,111,94,0.4)", color: "#DC6F5E", fontSize: 13, textAlign: "center" }}>Couldn't save: {saveErr}</div>}
          {!checkedIn ? (
            <button onClick={saveCheckin} disabled={saving} style={{ width: "100%", marginTop: 24, padding: 16, borderRadius: 14, border: "none", cursor: "pointer", background: THEMES[cur].accent, color: "#1a140f", fontSize: 15, fontWeight: 700, opacity: saving ? 0.6 : 1 }}>{saving ? "Saving…" : "Set my capacity for today"}</button>
          ) : (
            <>
              <div className="fade-in" style={{ marginTop: 24, padding: 13, borderRadius: 12, background: THEMES[cur].tint, border: `1px solid rgba(${THEMES[cur].glow},0.4)`, textAlign: "center", color: THEMES[cur].accent, fontSize: 14, fontWeight: 700 }}>Saved ✓&nbsp;&nbsp;Your capacity is set for today</div>
              <Protocol />
            </>
          )}
        </div>
      )
    }

    if (tab === "cycle") {
      const needSetup = !cycleLength || !lastPeriod
      const todayPct = checkedIn ? pct : (history.length ? history[history.length - 1].pct : null)
      const P = cycleNow ? PHASES[cycleNow.phase] : null
      return (
        <div className="fade-in" style={{ padding: "8px 18px 0" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontSize: 26, margin: "12px 0 4px" }}>Cycle & Capacity</h2>
          <p style={{ fontSize: 13, color: BASE.taupe, marginBottom: 20 }}>Your energy, in the context of your cycle.</p>

          {(needSetup || editCycle) ? (
            <div style={{ padding: 20, borderRadius: 16, background: BASE.surface, border: `1px solid ${BASE.border}` }}>
              <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 6 }}>{needSetup ? "Set up your cycle" : "Update your cycle info"}</div>
              <p style={{ fontSize: 13, color: BASE.creamDim, lineHeight: 1.6, marginBottom: 18 }}>Two quick things and the app can start showing your capacity by phase.</p>
              <div style={{ fontSize: 12, color: BASE.taupe, marginBottom: 6 }}>Your typical cycle length (days)</div>
              <input type="number" min="20" max="45" value={tmpLen} onChange={(e) => setTmpLen(e.target.value)} style={{ width: "100%", padding: "12px 14px", borderRadius: 12, background: BASE.surface2, border: `1px solid ${BASE.border}`, color: BASE.cream, fontSize: 15, marginBottom: 16, outline: "none" }} />
              <div style={{ fontSize: 12, color: BASE.taupe, marginBottom: 6 }}>First day of your last period</div>
              <input type="date" value={tmpStart} onChange={(e) => setTmpStart(e.target.value)} style={{ width: "100%", padding: "12px 14px", borderRadius: 12, background: BASE.surface2, border: `1px solid ${BASE.border}`, color: BASE.cream, fontSize: 15, marginBottom: 20, outline: "none" }} />
              <button onClick={saveCycle} disabled={!tmpStart} style={{ width: "100%", padding: 14, borderRadius: 12, border: "none", cursor: tmpStart ? "pointer" : "not-allowed", background: BASE.terracotta, color: "#1a140f", fontSize: 15, fontWeight: 700, opacity: tmpStart ? 1 : 0.5 }}>Save</button>
              <p style={{ fontSize: 11, color: BASE.taupe, lineHeight: 1.5, marginTop: 14, textAlign: "center" }}>This is an estimate based on what you enter — not medical or contraceptive guidance.</p>
            </div>
          ) : (
            <>
              <div style={{ padding: 22, borderRadius: 18, background: `rgba(${P.accent === "#94AC6E" ? "148,172,110" : "208,133,96"},0.08)`, border: `1px solid ${P.accent}55`, textAlign: "center", marginBottom: 14 }}>
                <div style={{ fontSize: 40 }}>{P.emoji}</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 600, color: P.accent, marginTop: 4 }}>{P.name}</div>
                <div style={{ fontSize: 12, color: BASE.taupe, letterSpacing: 1, textTransform: "uppercase", marginTop: 2 }}>Cycle Day {cycleNow.day}</div>
                {todayPct != null && (
                  <div style={{ marginTop: 16, paddingTop: 16, borderTop: `0.5px solid ${BASE.border}` }}>
                    <div style={{ fontSize: 11, color: BASE.taupe, textTransform: "uppercase", letterSpacing: 1 }}>Today's Capacity</div>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 34, fontWeight: 600, color: THEMES[colorFromPct(todayPct)].accent, marginTop: 2 }}>{todayPct}%</div>
                  </div>
                )}
              </div>

              <div style={{ padding: 18, borderRadius: 16, background: BASE.surface, border: `1px solid ${BASE.border}`, marginBottom: 14 }}>
                <div style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: P.accent, fontWeight: 700, marginBottom: 10 }}>This isn't you</div>
                <p style={{ fontSize: 15, color: BASE.cream, lineHeight: 1.65 }}>{P.thisIsntYou}</p>
              </div>

              <div style={{ padding: 18, borderRadius: 16, background: BASE.surface, border: `1px solid ${BASE.border}`, marginBottom: 14 }}>
                <div style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: BASE.taupe, fontWeight: 700, marginBottom: 10 }}>Looking ahead</div>
                <p style={{ fontSize: 14, color: BASE.creamDim, lineHeight: 1.65 }}>{P.lookingAhead}</p>
              </div>

              {phaseAverages && (
                <div style={{ padding: 18, borderRadius: 16, background: BASE.surface, border: `1px solid ${BASE.border}`, marginBottom: 14 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 4 }}>Your capacity by phase</div>
                  <p style={{ fontSize: 12, color: BASE.taupe, marginBottom: 14 }}>From the check-ins you've logged so far.</p>
                  {PHASE_ORDER.map((p) => (
                    <div key={p} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                      <div style={{ width: 96, fontSize: 13, color: BASE.creamDim }}>{PHASES[p].emoji} {PHASES[p].name}</div>
                      <div style={{ flex: 1, height: 10, borderRadius: 999, background: BASE.surface2, overflow: "hidden" }}>
                        <div style={{ width: `${phaseAverages[p] || 0}%`, height: "100%", background: PHASES[p].accent, borderRadius: 999 }} />
                      </div>
                      <div style={{ width: 40, textAlign: "right", fontSize: 13, color: phaseAverages[p] != null ? PHASES[p].accent : BASE.taupe, fontWeight: 600 }}>{phaseAverages[p] != null ? phaseAverages[p] + "%" : "—"}</div>
                    </div>
                  ))}
                  <p style={{ fontSize: 11, color: BASE.taupe, lineHeight: 1.5, marginTop: 6 }}>The more you check in across a full cycle, the clearer this gets.</p>
                </div>
              )}

              <button onClick={() => { setTmpLen(cycleLength); setTmpStart(lastPeriod); setEditCycle(true) }} style={{ width: "100%", padding: 12, borderRadius: 12, background: "transparent", color: BASE.taupe, border: `1px solid ${BASE.border}`, cursor: "pointer", fontSize: 13, fontWeight: 600, marginBottom: 8 }}>Update cycle info</button>
            </>
          )}
        </div>
      )
    }

    if (tab === "gym") {
      const gymColor = woColor || cur
      const wo = WORKOUTS[woType][gymColor]
      const suggestion = cycleNow ? PHASE_SUGGESTION[cycleNow.phase] : null
      const setKey = (i, s) => woType + "|" + gymColor + "|" + i + "|" + s
      const toggleSet = (i, s) => setWoDone((prev) => ({ ...prev, [setKey(i, s)]: !prev[setKey(i, s)] }))
      return (
        <div style={{ padding: "8px 18px 0" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontSize: 24, textAlign: "center", margin: "14px 0 4px" }}>Train the body you woke up with</h2>
          <p style={{ textAlign: "center", color: BASE.taupe, fontSize: 12, margin: "0 0 16px" }}>Pick your capacity, pick your day. The workout meets you there.</p>

          {suggestion && (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, padding: "10px 14px", borderRadius: 12, background: THEMES[suggestion].tint, border: `1px solid rgba(${THEMES[suggestion].glow},0.35)`, marginBottom: 14 }}>
              <span style={{ fontSize: 12, color: BASE.creamDim }}>Cycle hint: <b style={{ color: THEMES[suggestion].accent }}>{cycleNow.phase}</b> (day {cycleNow.day}) often feels like a {THEMES[suggestion].label}</span>
              <button onClick={() => setWoColor(suggestion)} style={{ padding: "6px 12px", borderRadius: 8, border: "none", cursor: "pointer", background: THEMES[suggestion].accent, color: "#1a140f", fontSize: 11, fontWeight: 700 }}>Use it</button>
            </div>
          )}

          <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
            {["red", "yellow", "green"].map((k) => {
              const active = gymColor === k
              return (
                <div key={k} onClick={() => setWoColor(k)} style={{ flex: 1, cursor: "pointer", textAlign: "center", padding: "12px 6px", borderRadius: 14, background: active ? THEMES[k].tint : BASE.surface, border: `1.5px solid ${active ? THEMES[k].accent : BASE.border}` }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 17, fontWeight: 600, color: THEMES[k].accent }}>{THEMES[k].label.split(" ")[0]}</div>
                </div>
              )
            })}
          </div>
          {!woColor && <p style={{ textAlign: "center", color: BASE.taupe, fontSize: 11, margin: "0 0 12px" }}>Following today's check-in ({THEMES[cur].label}). Tap a color to override.</p>}

          <div style={{ display: "flex", gap: 6, marginBottom: 18, flexWrap: "wrap" }}>
            {WO_TYPES.map((t) => (
              <button key={t.key} onClick={() => setWoType(t.key)} style={{ flex: 1, minWidth: 90, padding: 9, background: woType === t.key ? T.accent : "transparent", color: woType === t.key ? "#1a140f" : BASE.cream, border: `1px solid ${woType === t.key ? T.accent : BASE.border}`, borderRadius: 8, cursor: "pointer", fontSize: 12, fontWeight: 600 }}>{t.label}</button>
            ))}
          </div>

          <div style={{ padding: 16, borderRadius: 16, background: BASE.surface, border: `1px solid ${BASE.border}`, marginBottom: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 10 }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 600, color: THEMES[gymColor].accent }}>{wo.title}</div>
              <div style={{ fontSize: 12, color: BASE.taupe }}>{wo.time}</div>
            </div>
            <p style={{ fontSize: 12.5, color: BASE.creamDim, margin: "6px 0 0", lineHeight: 1.5 }}>{wo.note}</p>
          </div>

          {wo.exercises.map((ex, i) => (
            <div key={i} style={{ padding: "13px 15px", borderRadius: 14, background: BASE.surface, border: `1px solid ${BASE.border}`, marginBottom: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
                <div style={{ fontSize: 14, color: BASE.cream, fontWeight: 600 }}>{ex.name}</div>
                <div style={{ fontSize: 12, color: THEMES[gymColor].accent, fontWeight: 700, whiteSpace: "nowrap" }}>{ex.sets > 1 ? ex.sets + " x " + ex.reps : ex.reps}</div>
              </div>
              <div style={{ fontSize: 11.5, color: BASE.taupe, marginTop: 4, lineHeight: 1.45 }}>{ex.cue}</div>
              <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                {Array.from({ length: ex.sets }).map((_, s) => {
                  const done = !!woDone[setKey(i, s)]
                  return (
                    <div key={s} onClick={() => toggleSet(i, s)} style={{ width: 30, height: 30, borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, background: done ? THEMES[gymColor].accent : "transparent", color: done ? "#1a140f" : BASE.taupe, border: `1.5px solid ${done ? THEMES[gymColor].accent : BASE.border}` }}>{done ? "✓" : s + 1}</div>
                  )
                })}
              </div>
            </div>
          ))}

          <p style={{ fontSize: 10.5, color: BASE.taupe, textAlign: "center", margin: "16px 0 0", lineHeight: 1.5 }}>General fitness guidance, not medical advice. Especially if you're postpartum, healing, or managing a condition - move within your provider's guidance.</p>
        </div>
      )
    }

    if (tab === "trends") {
      return (
        <div style={{ padding: "8px 18px 0" }} className="fade-in">
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontSize: 26, margin: "12px 0 6px" }}>Your capacity over time</h2>
          <p style={{ fontSize: 13, color: BASE.taupe, marginBottom: 22 }}>Patterns, not pressure.</p>
          {!stats ? (
            <div style={{ padding: 24, borderRadius: 14, background: BASE.surface, border: `1px solid ${BASE.border}`, color: BASE.taupe, fontSize: 14, lineHeight: 1.6, textAlign: "center" }}>Once you start checking in each day, your capacity history will grow here — and patterns will start to show.</div>
          ) : (
            <>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 140, paddingBottom: 8, borderBottom: `0.5px solid ${BASE.border}` }}>
                {history.map((d, i) => (
                  <div key={i} title={d.pct + "%"} style={{ flex: 1, height: `${d.pct}%`, borderRadius: 3, background: THEMES[d.color].accent, opacity: 0.85 }} />
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, margin: "22px 0" }}>
                <Stat label="Average capacity" value={stats.avg + "%"} accent={T.accent} />
                <Stat label="Most common day" value={THEMES[stats.top].label.split(" ")[0]} accent={THEMES[stats.top].accent} />
                <Stat label="Green Days" value={stats.counts.green} accent={THEMES.green.accent} />
                <Stat label="Yellow Days" value={stats.counts.yellow} accent={THEMES.yellow.accent} />
                <Stat label="Red Days" value={stats.counts.red} accent={THEMES.red.accent} />
              </div>

              {report && (
                <div style={{ padding: 22, borderRadius: 18, background: `linear-gradient(160deg, ${BASE.surface}, ${BASE.bg2})`, border: `1px solid ${BASE.border}`, marginBottom: 16 }}>
                  <div style={{ fontFamily: "'Pinyon Script', cursive", fontSize: 30, color: BASE.cream, textAlign: "center", lineHeight: 1 }}>Your {report.monthName} Report</div>
                  <div style={{ width: 40, height: 2, background: T.accent, margin: "12px auto 18px", borderRadius: 2 }} />
                  {report.empty ? (
                    <p style={{ fontSize: 13, color: BASE.creamDim, textAlign: "center", lineHeight: 1.6 }}>No check-ins yet this month. As you log your days, your {report.monthName} report will appear here.</p>
                  ) : (
                    <>
                      <div style={{ textAlign: "center", marginBottom: 18 }}>
                        <div style={{ fontSize: 11, color: BASE.taupe, textTransform: "uppercase", letterSpacing: 1 }}>Average capacity</div>
                        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 44, fontWeight: 600, color: THEMES[colorFromPct(report.avg)].accent }}>{report.avg}%</div>
                      </div>
                      <div style={{ display: "flex", gap: 8, marginBottom: 18 }}>
                        {[["Green", report.counts.green, THEMES.green.accent], ["Yellow", report.counts.yellow, THEMES.yellow.accent], ["Red", report.counts.red, THEMES.red.accent]].map(([lbl, n, c]) => (
                          <div key={lbl} style={{ flex: 1, textAlign: "center", padding: "12px 4px", borderRadius: 12, background: BASE.surface2 }}>
                            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 600, color: c }}>{n}</div>
                            <div style={{ fontSize: 11, color: BASE.taupe }}>{lbl} Days</div>
                          </div>
                        ))}
                      </div>
                      <div style={{ borderTop: `0.5px solid ${BASE.border}`, paddingTop: 14 }}>
                        {report.trigger && <ReportLine label="Most common Red Day trigger" value={report.trigger} />}
                        {report.recovery && <ReportLine label="Strongest recovery factor" value={report.recovery} />}
                        {report.bestPhase && <ReportLine label="Highest-capacity phase" value={PHASES[report.bestPhase].emoji + " " + PHASES[report.bestPhase].name} />}
                      </div>
                      <p style={{ fontSize: 13, color: BASE.creamDim, lineHeight: 1.65, marginTop: 16, fontStyle: "italic" }}>{report.empty ? "" : (report.counts.green >= report.counts.red ? "You had at least as many Green Days as Red this month — your patterns are leaning steadier. That's worth noticing." : "Red Days outnumbered Green this month. That's information, not failure — it shows where your system needed more support.")}</p>
                    </>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      )
    }

    if (tab === "share") {
      const SL = SHARE_LEVELS[shareLevel]
      const ST = THEMES[shareLevel]
      return (
        <div className="fade-in" style={{ padding: "8px 18px 0" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontSize: 26, margin: "12px 0 4px" }}>The Capacity Check-In</h2>
          <p style={{ fontSize: 13, color: BASE.taupe, lineHeight: 1.5, marginBottom: 22 }}>Share where you're at with your partner — so they can meet you, instead of guessing.</p>

          <Label>My capacity today</Label>
          <div style={{ display: "flex", gap: 10, marginBottom: 22 }}>
            {["red", "yellow", "green"].map((k) => {
              const active = shareLevel === k
              return (
                <div key={k} onClick={() => setShareLevel(k)} style={{ flex: 1, cursor: "pointer", textAlign: "center", padding: "14px 6px", borderRadius: 16, background: active ? THEMES[k].tint : BASE.surface, border: `1.5px solid ${active ? THEMES[k].accent : BASE.border}` }}>
                  <div style={{ fontSize: 20 }}>{SHARE_LEVELS[k].emoji}</div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 17, fontWeight: 600, color: THEMES[k].accent, marginTop: 2 }}>{SHARE_LEVELS[k].short}</div>
                </div>
              )
            })}
          </div>

          <Label>What's true for me today</Label>
          <Chips items={SHARE_TRUE} selected={shareTrue} onToggle={(v) => toggle(shareTrue, setShareTrue, v)} />
          <div style={{ height: 20 }} />
          <Label>What I need today</Label>
          <Chips items={SHARE_NEED} selected={shareNeed} onToggle={(v) => toggle(shareNeed, setShareNeed, v)} />
          <div style={{ height: 20 }} />
          <Label>One line of context (optional)</Label>
          <input type="text" value={shareContext} onChange={(e) => setShareContext(e.target.value)} placeholder="Bad sleep, running low today…" style={{ width: "100%", padding: "13px 15px", borderRadius: 12, background: BASE.surface, border: `1px solid ${BASE.border}`, color: BASE.cream, fontSize: 14, outline: "none" }} />

          <div style={{ marginTop: 26, marginBottom: 8, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: BASE.taupe, fontWeight: 700 }}>Preview</div>
          <div style={{ padding: 18, borderRadius: 16, background: ST.tint, border: `1px solid rgba(${ST.glow},0.35)` }}>
            <div style={{ fontSize: 15, color: BASE.cream, lineHeight: 1.7 }}>
              <div><strong style={{ color: ST.accent }}>My capacity today:</strong> {SL.emoji} {SL.label}</div>
              {shareTrue.length > 0 && <div style={{ marginTop: 6 }}><strong style={{ color: ST.accent }}>What's true for me:</strong> {shareTrue.join(", ")}</div>}
              {shareNeed.length > 0 && <div style={{ marginTop: 6 }}><strong style={{ color: ST.accent }}>What I need:</strong> {shareNeed.join(", ")}</div>}
              {shareContext.trim() !== "" && <div style={{ marginTop: 6, fontStyle: "italic", color: BASE.creamDim }}>{shareContext.trim()}</div>}
            </div>
            <div style={{ marginTop: 14, paddingTop: 12, borderTop: `0.5px solid ${BASE.border}`, fontSize: 10, color: BASE.taupe, letterSpacing: 1 }}>SHARED VIA NEW RAY · THE CAPACITY METHOD</div>
          </div>

          <button onClick={handleShare} style={{ width: "100%", marginTop: 18, padding: 16, borderRadius: 14, border: "none", cursor: "pointer", background: ST.accent, color: "#1a140f", fontSize: 15, fontWeight: 700 }}>Send to my partner</button>
          <button onClick={handleCopyShare} style={{ width: "100%", marginTop: 10, padding: 13, borderRadius: 12, background: "transparent", color: BASE.creamDim, border: `1px solid ${BASE.border}`, cursor: "pointer", fontSize: 13, fontWeight: 600 }}>Copy message</button>
          {shareStatus && <div style={{ marginTop: 12, textAlign: "center", fontSize: 13, color: ST.accent, fontWeight: 700 }}>{shareStatus}</div>}
        </div>
      )
    }

    if (tab === "shop") {
      return (
        <div className="fade-in" style={{ padding: "8px 20px 0" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontSize: 26, margin: "12px 0 6px" }}>The Capacity Method Shop</h2>
          <p style={{ fontSize: 13, color: BASE.creamDim, lineHeight: 1.5, marginBottom: 22 }}>Wear the reminder. Soft, oversized, made for low-capacity days.</p>
          {ShopItems.map((p, i) => (
            <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>
              <div style={{ borderRadius: 16, overflow: "hidden", background: BASE.surface, border: `1px solid ${BASE.border}`, marginBottom: 16 }}>
                <div style={{ height: 220, background: `linear-gradient(135deg, ${BASE.surface2}, ${BASE.bg2})`, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, color: BASE.creamDim, textAlign: "center", lineHeight: 1.4, fontWeight: 500 }}>"{p.name}"</span>
                </div>
                <div style={{ padding: "18px 16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 10 }}>
                    <div style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.2 }}>{p.name}</div>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 600, color: T.accent, whiteSpace: "nowrap" }}>{p.price}</div>
                  </div>
                  <div style={{ fontSize: 13, color: BASE.taupe, marginBottom: 14 }}>{p.blurb}</div>
                  <button style={{ width: "100%", textAlign: "center", padding: 13, borderRadius: 10, background: T.accent, color: "#1a140f", fontSize: 14, fontWeight: 700, border: "none", cursor: "pointer" }}>Add to cart</button>
                </div>
              </div>
            </a>
          ))}
        </div>
      )
    }

    if (tab === "about") {
      return (
        <div className="fade-in" style={{ padding: "8px 20px 0" }}>
          <div style={{ textAlign: "center", margin: "16px 0 32px" }}>
            <div style={{ width: 92, height: 92, borderRadius: "50%", margin: "0 auto 16px", background: `linear-gradient(135deg, ${T.accent}, ${BASE.terracottaDeep})`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Pinyon Script', cursive", fontSize: 44, color: "#1a140f", boxShadow: "0 8px 24px rgba(0,0,0,0.3)" }}>V</div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 600, marginBottom: 6 }}>Vanessa Parkin</div>
            <div style={{ fontSize: 12, color: BASE.taupe, letterSpacing: 2, textTransform: "uppercase" }}>RN · Mother · Founder</div>
          </div>
          <p style={{ fontFamily: "'Sacramento', cursive", fontSize: 36, textAlign: "center", color: T.accent, lineHeight: 1.3, margin: "0 20px 28px" }}>Capacity is not character.</p>
          <div style={{ padding: "0 20px" }}>
            <div style={{ padding: 20, borderRadius: 16, background: BASE.surface, border: `1px solid ${BASE.border}` }}>
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 12, color: T.accent }}>Why I built this</div>
              <p style={{ fontSize: 14, color: BASE.creamDim, lineHeight: 1.8 }}>For years I expected the same output from myself regardless of what I was carrying. As a nurse, wife, and mother of two under two, I kept measuring myself against my best days — and shaming myself when I fell short. The Capacity Method began as a way to stop fighting reality and start working with it.</p>
            </div>
          </div>
        </div>
      )
    }

    return null
  }

  return (
    <><Fonts /><GlobalStyle />
      <div style={{ "--accent": T.accent, background: BASE.bg, minHeight: "100vh", maxWidth: 440, margin: "0 auto", position: "relative", overflow: "hidden" }}>
        <div className="glow-breathe" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 360, background: `radial-gradient(120% 80% at 50% 0%, rgba(${T.glow},0.22) 0%, transparent 60%)`, pointerEvents: "none" }} />
        <div style={{ position: "relative" }}>
          <header style={{ padding: "22px 22px 6px", textAlign: "center" }}>
            <div style={{ fontFamily: "'Pinyon Script', cursive", fontSize: 40, lineHeight: 1, color: BASE.cream }}>New Ray</div>
            <div style={{ fontSize: 11, letterSpacing: 4, textTransform: "uppercase", color: BASE.taupe, marginTop: 6 }}>The Capacity Method</div>
          </header>
          <div style={{ display: "flex", gap: 6, padding: "14px 18px 0", flexWrap: "wrap" }}>
            {["today", "gym", "cycle", "trends", "share", "shop", "about"].map((t) => (
              <button key={t} onClick={() => setTab(t)} style={{ flex: 1, minWidth: 64, padding: 9, background: tab === t ? T.accent : "transparent", color: tab === t ? "#1a140f" : BASE.cream, border: `1px solid ${tab === t ? T.accent : BASE.border}`, borderRadius: 8, cursor: "pointer", fontSize: 12, fontWeight: 600, textTransform: "capitalize" }}>{t}</button>
            ))}
            <button onClick={handleLogout} style={{ flex: 1, minWidth: 64, padding: 9, background: "transparent", color: BASE.creamDim, border: `1px solid ${BASE.border}`, borderRadius: 8, cursor: "pointer", fontSize: 12, fontWeight: 600 }}>Log Out</button>
          </div>
          {renderContent()}
          <div style={{ height: 48 }} />
        </div>
      </div>
    </>
  )
}
