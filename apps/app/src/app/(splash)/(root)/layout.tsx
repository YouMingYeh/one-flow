import type { ReactNode } from 'react';
import createSupabaseServerClient from '../../../../lib/supabase/server';

const LandingLayout = async ({ children }: { children: ReactNode }) => {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase.auth.getSession();

  if (error) {
    return supabase.auth.signOut();
  }

  const user = data.session?.user;

  if (user) return null;
  return <>{children}</>;
};

export default LandingLayout;
