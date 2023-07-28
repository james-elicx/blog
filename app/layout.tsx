import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ThemeProvider, TopNav } from '@/components';
import './globals.css';

const TASAOrbiterText = localFont({
  variable: '--font-tasa-orbiter-text',
  src: [
    { path: '../utils/fonts/TASAOrbiterText-Regular.otf', weight: '400' },
    { path: '../utils/fonts/TASAOrbiterText-Medium.otf', weight: '500' },
    { path: '../utils/fonts/TASAOrbiterText-SemiBold.otf', weight: '600' },
    { path: '../utils/fonts/TASAOrbiterText-Bold.otf', weight: '700' },
  ],
});

export const metadata: Metadata = {
  title: {
    default: 'Home',
    template: '%s | James',
  },
  description: 'Personal website and blog of James.',
  authors: [{ name: 'James' }],
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon', sizes: 'any', rel: 'icon' }],
    shortcut: [
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16', rel: 'shortcut icon' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32', rel: 'shortcut icon' },
    ],
    apple: {
      url: '/apple-touch-icon.png',
      type: 'image/png',
      sizes: '180x180',
      rel: 'apple-touch-icon',
    },
  },
  manifest: '/site.webmanifest',
};

type Props = { children: React.ReactNode };

const Layout = ({ children }: Props) => (
  <html lang="en">
    <body className={TASAOrbiterText.variable}>
      <ThemeProvider attribute="data-theme" defaultTheme="dark">
        <TopNav />

        {children}
      </ThemeProvider>
    </body>
  </html>
);

export default Layout;
