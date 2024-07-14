import type { Metadata } from 'next';
import { Providers } from './providers';

import './globals.css';
import { outfit } from './fonts';

export const metadata: Metadata = {
  title: '35AI',
  description: 'Get your AI generated workflow tool in seconds with 35AI.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`dark ${outfit.className}`}>
      <body className={outfit.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
