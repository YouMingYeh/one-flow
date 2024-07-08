'use server';
import { v4 as uuidv4 } from 'uuid';
import createSupabaseServerClient from '../../../lib/supabase/server';

export async function updateUserAvatar(base64: string) {
  const supabase = await createSupabaseServerClient();
  const filename = `avatar-${uuidv4()}`;

  const { error } = await supabase.storage
    .from('avatar')
    .upload(
      filename,
      Buffer.from(
        base64.replace(/data:image\/(?:[^;]+);base64,/, ''),
        'base64',
      ),
    );

  if (error) {
    return { error };
  }
  const {
    data: { publicUrl },
  } = supabase.storage.from('avatar').getPublicUrl(filename);

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return { error: new Error('User not found') };
  }

  const supabaseUser = user;

  return supabase
    .from('user')
    .update({
      avatar_url: publicUrl,
    })
    .eq('id', supabaseUser.id);
}

export async function updateUserProfile(values: {
  name?: string;
  email?: string;
  avatarUrl?: string;
}) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return { error: new Error('User not found') };
  }

  const supabaseUser = user;

  return supabase
    .from('user')
    .update({
      avatar_url: values.avatarUrl,
      name: values.name,
      email: values.email,
    })
    .eq('id', supabaseUser.id);
}

export async function fetchUser() {
  const supabase = await createSupabaseServerClient();

  const { data: supabaseUser, error } = await supabase.auth.getUser();

  if (error) {
    return { data: supabaseUser, error };
  }

  const { data: user } = (await supabase
    .from('user')
    .select()
    .eq('id', supabaseUser.user.id)
    .single()) as { data: User | null };

  return { data: user, error };
}
