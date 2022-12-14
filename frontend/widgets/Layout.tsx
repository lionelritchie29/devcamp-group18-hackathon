import {
  ArrowRightOnRectangleIcon,
  ChevronLeftIcon,
  UserCircleIcon,
} from '@heroicons/react/20/solid';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';

type Props = {
  navTitle?: string;
  children: React.ReactNode;
  withBackBtn?: boolean;
};

const Layout: React.FC<Props> = ({ children, navTitle, withBackBtn = true }) => {
  const router = useRouter();
  const { currentUser, signOut, refetchUser } = useAuth();

  useEffect(() => {
    refetchUser();
  });

  return (
    <div>
      <Head>
        <title>Devcampedia</title>
        <meta name='description' content='Devcamp 18' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <nav className='w-full bg-primary-dark text-white p-4 font-medium flex justify-between items-center'>
        <div className='flex items-center'>
          {withBackBtn && (
            <button onClick={() => router.back()}>
              <ChevronLeftIcon className='w-8 h-8 mr-2' />
            </button>
          )}
          <div className='font-bold text-lg mt-1'>{navTitle ?? 'Devcampedia'}</div>
        </div>

        {!router.pathname.includes('/auth/login') && (
          <div>
            <Link href='/account'>
              <button className='p-2'>
                <UserCircleIcon className='w-6 h-6' />
              </button>
            </Link>
            <button onClick={() => signOut()} className='p-2'>
              <ArrowRightOnRectangleIcon className='w-6 h-6' />
            </button>
          </div>
        )}
      </nav>

      <main className='p-4'>{children}</main>
    </div>
  );
};

export default Layout;
