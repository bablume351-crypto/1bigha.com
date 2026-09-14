import './globals.css';
import Link from 'next/link';
import Header from '@/components/Header';

export const metadata = {
  title: '1Bigha — Buy & Sell Land and Property',
  description: 'Discover land, plots and property opportunities across NCR.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <footer className="site-footer">
        <div className="container site-footer-grid">
          <div className="footer-brand">
            <img src="/1bigha-logo.png" alt="1Bigha" className="footer-logo" />
            <p>Your land, your future.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <Link href="/search">Buy Property</Link>
            <Link href="/search?type=Agricultural%20Land">Agricultural Land</Link>
            <Link href="/search?type=Residential%20Plot">Residential Plots</Link>
          </div>
          <div>
            <h4>For Owners</h4>
            <Link href="/sell">List Property</Link>
            <Link href="/sell">Sell Land</Link>
            <Link href="/search">Find Buyers</Link>
          </div>
          <div>
            <h4>Account</h4>
            <Link href="/login">Login / Sign up</Link>
            <Link href="/search">Help</Link>
          </div>
        </div>
        <div className="site-footer-bottom">
          <div className="container">© 2026 1Bigha. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
}
