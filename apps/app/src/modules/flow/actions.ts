'use server';

import createSupabaseServerClient from '../../../lib/supabase/server';

export async function getSavedFlows(): Promise<SavedFlow[]> {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    throw new Error('User not found');
  }

  const { data } = await supabase
    .from('saved_flow')
    .select('*')
    .eq('user_id', user.id);
  return data as SavedFlow[];
}

export async function getSavedFlowById(flowId: string): Promise<SavedFlow> {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.from('saved_flow').select().eq('id', flowId);
  return data?.[0] as SavedFlow;
}
