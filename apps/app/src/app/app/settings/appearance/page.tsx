import type { FC } from 'react';
import { Separator } from 'ui/src/components/ui/separator';
import { AppearanceForm } from '../../../../modules/settings/components/AppearanceForm';

const AppearancePage: FC = () => {
  return (
    <div className='h-full space-y-6 overflow-scroll'>
      <div>
        <h3 className='text-lg font-medium'>Appearance</h3>
        <p className='text-muted-foreground text-sm'>
          Customize the appearance of the app. Automatically switch between day
          and night themes.
        </p>
      </div>
      <Separator />
      <div className='h-[60vh] flex-1 overflow-auto p-3'>
        <AppearanceForm />
      </div>
    </div>
  );
};

export default AppearancePage;
