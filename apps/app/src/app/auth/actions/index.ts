'use server';

import { redirect } from 'next/navigation';
import type { User as SupabaseUser } from '@supabase/auth-helpers-nextjs';
import createSupabaseServerClient from '../../../../lib/supabase/server';

export async function AdaptUser(user: SupabaseUser | null) {
  if (!user) {
    return null;
  }

  if (!user.email) {
    return null;
  }

  const supabase = await createSupabaseServerClient();
  const { data }: { data: unknown } = await supabase
    .from('user')
    .select()
    .eq('id', user.id)
    .single();

  if (data) {
    return data;
  }

  const newUser: User = {
    id: user.id,
    email: user.email,
    name: user.email.split('@')[0],
  };

  await supabase.from('user').insert(newUser);

  const newBilling: Billing = {
    user_id: newUser.id,
    plan: 'free',
    credit: 100,
  };

  await supabase.from('billing').insert([newBilling]);

  return newUser;
}

export async function signUpWithEmailAndPassword(values: {
  email: string;
  password: string;
}) {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase.auth.signUp({
    email: values.email,
    password: values.password,
    options: {
      emailRedirectTo: `${process.env.NEXT_APP_URL!}/auth/callback`,
    },
  });

  await AdaptUser(data.user);

  return { data, error };
}

export async function signInWithEmailAndPassword(values: {
  email: string;
  password: string;
}) {
  const supabase = await createSupabaseServerClient();

  return supabase.auth.signInWithPassword(values);
}

export async function signInWithGithub() {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: `${process.env.NEXT_APP_URL!}/auth/callback`,
    },
  });

  if (error) {
    return error;
  }

  if (data.url) {
    redirect(data.url);
  }
}

export async function signInWithGoogle() {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${process.env.NEXT_APP_URL!}/auth/callback`,
    },
  });

  if (error) {
    return error;
  }

  if (data.url) {
    redirect(data.url);
  }
}

export const signInWithRecoveryToken = async (code: string) => {
  const supabase = await createSupabaseServerClient();

  return supabase.auth.exchangeCodeForSession(code);
};

export async function signInWithEmail(email: string) {
  const supabase = await createSupabaseServerClient();

  // signup users if not available
  const { data, error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${process.env.NEXT_APP_URL!}/auth/welcome`,
    },
  });

  await AdaptUser(data.user);

  return { data, error };
}

// Todo: Add loginWithGithub

export async function resetPasswordForEmail(email: string) {
  const supabase = await createSupabaseServerClient();

  return supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_APP_URL!}/auth/reset-password`,
  });
}

export async function updatePassword(password: string) {
  const supabase = await createSupabaseServerClient();

  return supabase.auth.updateUser({
    password,
  });
}
