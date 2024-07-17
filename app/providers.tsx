'use client';

import { NextUIProvider } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import Link from 'next/link';
import Header from './header';

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider attribute='class' defaultTheme='dark'>
        <Header />
        {children}
        <div className='text-center p-4'>
          <Link
            href='https://beian.miit.gov.cn/'
            target='_blank'
          >
            © 2024 35AI.com | 京ICP备2022010315号-3
          </Link>
        </div>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
