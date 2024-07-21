import type { ReactNode } from 'react';
import { AppNavBar } from '../../components/layouts/AppNavbar';
import { DashboardSideBar } from '../../components/layouts/DashboardSideBar';

const AppLayout = async ({ children }: { children: ReactNode }) => {
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
