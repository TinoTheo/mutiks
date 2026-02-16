// app/layout.tsx
import type { Metadata } from 'next';
import { Inter, Oswald } from 'next/font/google';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import SchemaOrg from '@/components/SchemaOrg';
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
  metadataBase: new URL('https://www.mutiks.africa'),
  title: {
    template: '%s | Mutiks Grassroots Investments',
    default: 'Mutiks Grassroots Investments | Construction & Steel Structure Specialists',
  },
  description: 'Premium construction and infrastructure authority specializing in prefabricated containers, steel structures, modular classrooms, and institutional execution across Southern Africa.',
  keywords: [
    'construction company',
    'prefabricated containers',
    'modular classrooms',
    'steel structures',
    'street lighting installation',
    'indoor lighting systems',
    'residential construction',
    'commercial construction',
    'institutional building contractors',
    'steel frame construction',
    'container classrooms',
    'infrastructure development',
  ],
  authors: [{ name: 'Mutiks Grassroots Investments' }],
  creator: 'Mutiks Grassroots Investments',
  publisher: 'Mutiks Grassroots Investments',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Mutiks Grassroots Investments | Construction & Steel Structure Specialists',
    description: 'Premium construction authority specializing in prefabricated containers, steel structures, and modular classrooms.',
    url: 'https://www.mutiks.africa',
    siteName: 'Mutiks Grassroots Investments',
    images: [
      {
        url: 'https://www.mutiks.africa/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mutiks Grassroots Investments - Construction Excellence',
      },
    ],
    locale: 'en_ZA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mutiks Grassroots Investments',
    description: 'Premium construction authority specializing in prefabricated containers, steel structures, and modular classrooms.',
    images: ['https://www.mutiks.africa/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://www.mutiks.africa',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <head>
        <SchemaOrg />
      </head>
      <body>
        <Navbar />
        <main id="app-root">{children}</main>
        <Footer />
      </body>
    </html>
  );
}