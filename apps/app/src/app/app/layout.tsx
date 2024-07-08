import type { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import { AppNavBar } from '../../components/layouts/AppNavbar';
import { DashboardSideBar } from '../../components/layouts/DashboardSideBar';
import { getCurrentUser } from './actions/user';

const AppLayout = async ({ children }: { children: ReactNode }) => {
  const user = await getCurrentUser();

  if (!user) return redirect('/auth/login');

  return (
    <div className='relative flex h-screen w-screen flex-col'>
      <header className='container'>
        <AppNavBar />
      </header>
      <main className='h-full w-screen'>
        <DashboardSideBar>{children}</DashboardSideBar>
      </main>
    </div>
  );
};

export default AppLayout;
