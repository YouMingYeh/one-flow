'use server';

import createSupabaseServerClient from '../../../../lib/supabase/server';

export async function getCurrentUser() {
  try {
    const supabase = await createSupabaseServerClient();

    const { data } = await supabase.auth.getUser();

    return data.user;
  } catch (error) {
    // cookies().delete('sb:token');
  }
}

export async function signOut() {
  const supabase = await createSupabaseServerClient();

  await supabase.auth.signOut();
}
