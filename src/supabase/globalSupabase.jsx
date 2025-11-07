export async function GetIdAuthSupabase() {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (session != null) {
    const { user } = session;
    const idAuthSupabase = user.id;
    return idAuthSupabase;
  }
}
