import { readActivities } from '../../../modules/recent/actions';
import { RecentCards } from '../../../modules/workspace/components/recentCards';
import { RecentCardsSkeleton } from '../../../modules/workspace/components/recentCardsSkeleton';

const RecentPage = async () => {
  const activities = (await readActivities()) as unknown as Activity[] | null;

  return (
    <div className='space-y-6'>
      {activities ? (
        <RecentCards activities={activities} />
      ) : (
        <RecentCardsSkeleton />
      )}
    </div>
  );
};

export default RecentPage;
