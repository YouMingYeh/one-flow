type User = {
  id: string;
  created_at?: Date;
  name: string;
  email: string;
  avatar_url?: string;
};

type Workspace = {
  id: string;
  created_at?: Date;
  user_id: string;
  name: string;
  description: string;
  icon: string;
};

type Flow = {
  id: string;
  created_at?: Date;
  workspace_id: string;
  name: string;
  description: string;
  content: string;
  icon: string;
  type: string;
  template: string;
};

type SavedFlow = {
  id: string;
  created_at?: Date;
  user_id: string;
  version: number;
  name: string;
  content: string;
  public: boolean;
};


type Activity = {
  created_at?: Date;
  user_id: string;
  workspace: {
    id: string;
    name: string;
    description: string;
    icon: string;
  };
  flow: {
    id: string;
    name: string;
    description: string;
    icon: string;
  };
};
