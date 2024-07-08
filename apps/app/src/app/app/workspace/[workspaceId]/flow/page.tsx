import { redirect } from 'next/navigation';

const Page = async ({ params }: { params: { workspaceId: string } }) => {
  redirect(`/app/workspace/${params.workspaceId}`);
};

export default Page;
