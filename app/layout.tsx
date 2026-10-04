import './globals.css';
import Link from 'next/link';
import Header from '@/components/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://1बीघा.com'),

  title: {
    default: '1Bigha — Buy & Sell Land, Plots & Property',
    template: '%s | 1Bigha',
  },

  description:
    'Buy and sell land, residential plots, agricultural land, commercial property and industrial land across Ghaziabad, Tronica City, Noida, Baghpat and Delhi NCR.',

  keywords: [
    'land for sale',
    'plots for sale',
    'property for sale',
    'land for sale in Ghaziabad',
    'plots for sale in Ghaziabad',
    'Tronica City plots',
    'Tronica City land',
    'agricultural land for sale',
    'residential plots',
    'commercial plots',
    'industrial land',
    'property in Delhi NCR',
    'property in Noida',
    'property in Baghpat',
    '1Bigha',
  ],

  authors: [
    {
      name: '1Bigha',
    },
  ],

  creator: '1Bigha',
  publisher: '1Bigha',

  applicationName: '1Bigha',

  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://1बीघा.com/',
    siteName: '1Bigha',
    title: '1Bigha — Buy & Sell Land, Plots & Property',
    description:
      'Find land, plots and property across Ghaziabad, Tronica City, Noida, Baghpat and Delhi NCR.',
    images: [
      {
        url: '/1bigha-logo.png',
        width: 1200,
        height: 630,
        alt: '1Bigha — Buy & Sell Land and Property',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: '1Bigha — Buy & Sell Land, Plots & Property',
    description:
      'Find land, plots and property across Ghaziabad, Tronica City, Noida, Baghpat and Delhi NCR.',
    images: ['/1bigha-logo.png'],
  },

  icons: {
    icon: '/1bigha-logo.png',
    apple: '/1bigha-logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />

      {children}

      <footer className="site-footer">
        <div className="container site-footer-grid">
          <div className="footer-brand">
            <img
              src="/1bigha-logo.png"
              alt="1Bigha"
              className="footer-logo"
            />

            <p>Your land, your future.</p>
          </div>

          <div>
            <h4>Explore</h4>

            <Link href="/search">
              Buy Property
            </Link>

            <Link href="/search?type=Agricultural%20Land">
              Agricultural Land
            </Link>

            <Link href="/search?type=Residential%20Plot">
              Residential Plots
            </Link>
          </div>

          <div>
            <h4>For Owners</h4>

            <Link href="/sell">
              List Property
            </Link>

            <Link href="/sell">
              Sell Land
            </Link>

            <Link href="/search">
              Find Buyers
            </Link>
          </div>

          <div>
            <h4>Account</h4>

            <Link href="/login">
              Login / Sign up
            </Link>

            <Link href="/search">
              Help
            </Link>
          </div>
        </div>

        <div className="site-footer-bottom">
          <div className="container">
            © 2026 1Bigha. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
