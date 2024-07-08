import type { NextPage } from 'next';
import { Separator } from 'ui/src/components/ui/separator';
import { ProfileForm } from '../../../modules/settings/components/ProfileForm';

const SettingsPage: NextPage = () => {
  return (
    <div className='h-full space-y-6' id='onborda-step5'>
      <div>
        <h3 className='text-lg font-medium'>Profile</h3>
        <p className='text-muted-foreground text-sm'>
          This is how others will see you on the site.
        </p>
      </div>
      <Separator />
      <div className='h-[60vh] flex-1 overflow-auto p-3'>
        <ProfileForm />
      </div>
    </div>
  );
};

export default SettingsPage;
