export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, name, line_items } = req.body;
  
  // Check if order contains the Library product
  const hasLibrary = line_items?.some(item => 
    item.title?.toLowerCase().includes('library') ||
    item.title?.toLowerCase().includes('capacity method')
  );

  if (!hasLibrary) {
    return res.status(200).json({ received: true });
  }

  try {
    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_KEY
    );

    // Find or create profile
    let { data: profile } = await supabase
      .from('profiles')
      .select('id')
      .eq('email', email)
      .single();

    if (!profile) {
      const { data: newProfile } = await supabase
        .from('profiles')
        .insert([{ email, name }])
        .select()
        .single();
      profile = newProfile;
    }

    // Flip has_membership to true
    await supabase
      .from('profiles')
      .update({ has_membership: true })
      .eq('id', profile.id);

    return res.status(200).json({ success: true, email });
  } catch (error) {
    console.error('Webhook error:', error);
    return res.status(500).json({ error: error.message });
  }
}
