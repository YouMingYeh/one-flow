import { Separator } from 'ui';
import Link from 'next/link';
import { getSavedFlows } from '../../../modules/flow/actions';

const Page = async () => {
  const flows = await getSavedFlows();

  return (
    <div className='space-y-6 px-10'>
      <div className='space-y-0.5'>
        <h2 className='text-2xl font-bold tracking-tight'>Flow</h2>
        <p className='text-muted-foreground'>You can create a new flow here.</p>
      </div>
      <Separator className='my-6' />
      <div className='flex w-full flex-col gap-3'>
        {flows.map(flow => {
          return (
            <Link
              className='underline'
              href={`/app/flow/${flow.id}`}
              key={flow.id}
            >
              {flow.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
