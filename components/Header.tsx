'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import ContactLoginModal from '@/components/ContactLoginModal';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const pathname = usePathname();

  const close = () => setOpen(false);

  useEffect(() => {
    if (pathname !== '/') {
      setLoginOpen(false);
      return;
    }

    const loggedIn = sessionStorage.getItem('1bigha_logged_in');

    if (loggedIn === 'true') {
      setLoginOpen(false);
    } else {
      setLoginOpen(true);
    }
  }, [pathname]);

  return (
    <header className="site-header">

      <div className="container site-header-inner">

        <Link
          href="/"
          className="brand"
          aria-label="1Bigha home"
          onClick={close}
        >
          <img
            src="/1bigha-logo.png"
            alt="1Bigha"
            className="brand-logo"
          />
        </Link>

        <nav
          className={`site-nav ${open ? 'open' : ''}`}
          aria-label="Main navigation"
        >
          <Link href="/search" onClick={close}>
            Buy
          </Link>

          <Link href="/sell" onClick={close}>
            Sell
          </Link>

          <Link
            href="/search?type=Agricultural%20Land"
            onClick={close}
          >
            Land
          </Link>

          <Link
            href="/search?type=Residential%20Plot"
            onClick={close}
          >
            Plots
          </Link>

          <Link href="/map" onClick={close}>
            Map
          </Link>

          <Link href="/account" onClick={close}>
            Account
          </Link>
        </nav>

        <div className="site-actions">

          <Link
            href="/sell"
            className="site-post-btn"
          >
            Post Property
          </Link>

          <button
            type="button"
            className="site-login"
            onClick={() => setLoginOpen(true)}
          >
            Login / Sign up
          </button>

          <button
            type="button"
            className="mobile-menu-btn"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>

        </div>
      </div>

      {loginOpen && (
        <ContactLoginModal
          nextPath="/"
          onClose={() => setLoginOpen(false)}
        />
      )}

      {open && (
        <div className="mobile-quickbar">

          <div className="container mobile-quickbar-inner">

            <button
              type="button"
              className="site-login"
              onClick={() => {
                close();
                setLoginOpen(true);
              }}
            >
              Login / Sign up
            </button>

            <Link
              href="/sell"
              onClick={close}
            >
              List Property
            </Link>

          </div>

        </div>
      )}

    </header>
  );
}
