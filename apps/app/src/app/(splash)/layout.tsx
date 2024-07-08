import type { ReactNode } from 'react';
import { NavBar } from '../../components/layouts/Navbar';
import { getCurrentUser } from '../app/actions/user';
import Footer from '../../modules/splash/components/Footer';

const LandingLayout = async ({ children }: { children: ReactNode }) => {
  const user = await getCurrentUser();
  return (
    <div className='flex min-h-screen flex-col'>
      <header className='container'>
        <NavBar userExists={user ? true : undefined} />
      </header>
      <main className='flex-1'>{children}</main>
      <Footer />
    </div>
  );
};

export default LandingLayout;
