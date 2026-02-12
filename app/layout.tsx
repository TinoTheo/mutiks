import type { Metadata } from 'next';
import { Inter, Oswald } from 'next/font/google';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-oswald',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mutiks Grassroots Investments | Structural Execution',
  description:
    'Premium construction and infrastructure authority specializing in residential, commercial, and institutional execution.',
  openGraph: {
    title: 'Mutiks Grassroots Investments',
    description: 'Structural Longevity. Engineered Precision.',
    siteName: 'Mutiks Grassroots Investments',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body>
        <Navbar />
        <main id="app-root">{children}</main>
        <Footer />
      </body>
    </html>
  );
}