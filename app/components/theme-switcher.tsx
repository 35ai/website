'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MoonFilledIcon, SunFilledIcon } from '../icons';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <div onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        {theme === 'dark' ? (
          <SunFilledIcon className='text-default-600 dark:text-default-500' />
        ) : (
          <MoonFilledIcon className='text-default-600 dark:text-default-500' />
        )}
      </div>
    </div>
  );
}
