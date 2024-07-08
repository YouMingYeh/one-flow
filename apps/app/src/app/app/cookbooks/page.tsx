import Link from 'next/link';
import { Button, Separator } from 'ui';

const CookbooksPage = async () => {
  return (
    <div className='space-y-6 px-10'>
      <div className='space-y-0.5'>
        <h2 className='text-2xl font-bold tracking-tight'>Cookbooks</h2>
        <p className='text-muted-foreground'>
          Here are some cookbooks for your inspiration.
        </p>
      </div>
      <Separator className='my-6' />
      <div className='flex flex-col gap-2'>
        <Link href='/app/cookbooks/first'>
          <Button className='relative p-8 text-xl' variant='outline'>
            #1 ▶️ Learn making your first flow
          </Button>
        </Link>
        <p className='text-muted-foreground'> More cookbooks coming soon...</p>
      </div>
    </div>
  );
};

export default CookbooksPage;
