import type { FC } from 'react';
import { Separator } from 'ui/src/components/ui/separator';
import { UpdateUserForm } from '../../../../modules/auth/components/UpdateUserForm';

const AppearancePage: FC = () => {
  return (
    <div className='space-y-6'>
      <div>
        <h3 className='text-lg font-medium'>Account</h3>
        <p className='text-muted-foreground text-sm'>
          This is how we will communicate with you.
        </p>
      </div>
      <Separator />
      <div className='h-[60vh] flex-1 overflow-auto p-3'>
        <UpdateUserForm />
      </div>
    </div>
  );
};

export default AppearancePage;
