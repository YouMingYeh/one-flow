'use server';

import createSupabaseServerClient from '../../../lib/supabase/server';

export async function readActivities() {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.auth.getSession();
  const user = data.session?.user;
  if (!user) {
    return null;
  }
  const { data: activities } = await supabase.from('activity').select(
    `
      user_id,
      created_at,
      workspace (id, name, description, icon),
      flow (id, name, description, icon)
      `,
  );

  return activities;
}

export async function createActivity(activity: Activity) {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.auth.getSession();
  const user = data.session?.user;
  if (!user) {
    return null;
  }
  const newActivity = {
    ...activity,
    user_id: user.id,
  };

  await supabase.from('activity').insert([newActivity]).select();
}

export async function updateActivity(activity: {
  user_id: string;
  flow_id: string;
  workspace_id: string;
  created_at: Date;
}) {
  const supabase = await createSupabaseServerClient();
  await supabase.from('activity').upsert([activity]).select();
}
