'use client';
import { useEffect, useState, type ReactNode } from 'react';
import { useSearchParams } from 'next/navigation';
import type { User } from '@supabase/supabase-js';
import { NavBar } from '../../components/layouts/Navbar';
import { getCurrentUser } from '../app/actions/user';
import Footer from '../../modules/splash/components/Footer';
import { defaultLanguage, getDictionary } from '../i18n';

const LandingLayout = ({ children }: { children: ReactNode }) => {
  // const user = getCurrentUser();
  const [user, setUser] = useState<User | null>(null);
  const searchParams = useSearchParams();
  const dictionary = getDictionary(searchParams.get('lang') || defaultLanguage);

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    };

    void fetchUser();
  }, []);

  return (
    <div className='flex min-h-screen flex-col'>
      <header className='container'>
        <NavBar userExists={user ? true : undefined} />
      </header>
      <main className='flex-1'>{children}</main>
      <Footer dictionary={dictionary} />
    </div>
  );
};

export default LandingLayout;
