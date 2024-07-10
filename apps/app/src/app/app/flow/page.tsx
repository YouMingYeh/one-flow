import { getSavedFlows } from '../../../modules/flow/actions';

const Page = async () => {
  const flows = await getSavedFlows();

  return <div className='space-y-6'>{JSON.stringify(flows)}</div>;
};

export default Page;
