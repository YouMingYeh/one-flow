import createSupabaseServerClient from '../../../lib/supabase/server';

export async function readWorkspaces() {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user: supabaseUser },
  } = await supabase.auth.getUser();

  if (!supabaseUser) {
    return { error: new Error('User not found') };
  }

  const userId = supabaseUser.id;

  const { data, error } = await supabase
    .from('workspace')
    .select()
    .eq('user_id', userId);

  return { data, error };
}

export async function updateWorkspace(
  workspaceId: string,
  workspace: {
    name: string;
    description: string;
    icon: string;
  },
) {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from('workspace')
    .update(workspace)
    .eq('id', workspaceId);

  return { data, error };
}

export async function deleteWorkspace(workspaceId: string) {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from('workspace')
    .delete()
    .eq('id', workspaceId);

  return { data, error };
}

export async function deleteFlow(flowId: string) {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase.from('flow').delete().eq('id', flowId);

  return { data, error };
}

export async function readFlows(workspaceId: string) {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from('flow')
    .select()
    .eq('workspace_id', workspaceId);

  return { data, error };
}
