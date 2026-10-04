'use client';

import Link from 'next/link';
import {
  CheckCircle2,
  Heart,
  ListPlus,
  LogOut,
  MessageCircle,
  Settings,
  ShieldCheck,
  Smartphone,
  UserRound,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AccountPage() {
  const router = useRouter();

  const [active, setActive] = useState('saved');
  const [loggedIn, setLoggedIn] = useState(false);
  const [mobile, setMobile] = useState('');

  useEffect(() => {
    const verified = sessionStorage.getItem('1bigha_logged_in');
    const savedMobile = sessionStorage.getItem('1bigha_mobile');

    if (verified === 'true') {
      setLoggedIn(true);
      setMobile(savedMobile || '');
    } else {
      router.replace('/login?next=%2Faccount');
    }
  }, [router]);

  function logout() {
    sessionStorage.removeItem('1bigha_logged_in');
    sessionStorage.removeItem('1bigha_mobile');
    router.replace('/');
  }

  function startMobileVerification() {
    router.push('/login?next=%2Faccount');
  }

  if (!loggedIn) {
    return null;
  }

  const maskedMobile =
    mobile.length === 10
      ? `+91 ${mobile.slice(0, 2)}******${mobile.slice(-2)}`
      : 'Mobile number verified';

  return (
    <main className="account-page section">
      <div className="container">

        {/* Account Header */}
        <div className="account-hero panel">

          <div className="account-avatar">
            <UserRound size={28} />
          </div>

          <div className="account-identity">
            <span className="kicker">MY ACCOUNT</span>

            <h1>Welcome to 1Bigha</h1>

            <p className="muted">
              Your saved properties, contacts and listings in one place.
            </p>
          </div>

          <button className="btn">
            <Settings size={16} />
            Settings
          </button>

        </div>

        <div className="account-layout">

          {/* Left Menu */}
          <aside className="account-menu panel">

            <button
              className={active === 'saved' ? 'active' : ''}
              onClick={() => setActive('saved')}
            >
              <Heart size={17} />
              Saved
            </button>

            <button
              className={active === 'contacted' ? 'active' : ''}
              onClick={() => setActive('contacted')}
            >
              <MessageCircle size={17} />
              Contacted
            </button>

            <button
              className={active === 'listings' ? 'active' : ''}
              onClick={() => setActive('listings')}
            >
              <ListPlus size={17} />
              My Listings
            </button>

            {/* Mobile Verification */}
            <button
              className={active === 'verification' ? 'active' : ''}
              onClick={() => setActive('verification')}
            >
              <Smartphone size={17} />
              Mobile Verification
            </button>

            <Link href="/sell">
              <ListPlus size={17} />
              List Property
            </Link>

            <button
              type="button"
              className="logout"
              onClick={logout}
            >
              <LogOut size={17} />
              Log out
            </button>

          </aside>

          {/* Content */}
          <section className="account-content">

            {/* Saved */}
            {active === 'saved' && (
              <div className="panel">

                <h2>Saved properties</h2>

                <div className="account-empty">

                  <Heart size={28} />

                  <h3>No saved properties yet</h3>

                  <p className="muted">
                    Tap Shortlist on a property to save it here.
                  </p>

                  <Link
                    href="/search"
                    className="btn primary"
                  >
                    Explore properties
                  </Link>

                </div>

              </div>
            )}

            {/* Contacted */}
            {active === 'contacted' && (
              <div className="panel">

                <h2>Contact history</h2>

                <div className="account-empty">

                  <MessageCircle size={28} />

                  <h3>No conversations yet</h3>

                  <p className="muted">
                    Your seller conversations will appear here.
                  </p>

                </div>

              </div>
            )}

            {/* Listings */}
            {active === 'listings' && (
              <div className="panel">

                <div className="heading-row">

                  <div>
                    <h2>My listings</h2>

                    <p className="muted">
                      Track your submitted properties.
                    </p>
                  </div>

                  <Link
                    href="/sell"
                    className="btn primary"
                  >
                    New listing
                  </Link>

                </div>

                <div className="account-empty">

                  <ListPlus size={28} />

                  <h3>No listings yet</h3>

                  <p className="muted">
                    Submitted properties will appear here.
                  </p>

                </div>

              </div>
            )}

            {/* Mobile Verification */}
            {active === 'verification' && (
              <div className="panel">

                <h2>Mobile Verification</h2>

                <p className="muted">
                  Your mobile number is used to securely contact property owners.
                </p>

                <div
                  style={{
                    marginTop: 24,
                    border: '1px solid #dce8e2',
                    borderRadius: 16,
                    padding: 20,
                    background: '#f8fcfa',
                  }}
                >

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 14,
                    }}
                  >

                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 14,
                        background: '#e8f6f0',
                        color: '#087653',
                        display: 'grid',
                        placeItems: 'center',
                      }}
                    >
                      <Smartphone size={24} />
                    </div>

                    <div style={{ flex: 1 }}>

                      <div
                        style={{
                          fontWeight: 800,
                          fontSize: 16,
                        }}
                      >
                        Mobile Number
                      </div>

                      <div
                        style={{
                          color: '#687770',
                          marginTop: 4,
                        }}
                      >
                        {maskedMobile}
                      </div>

                    </div>

                    <CheckCircle2
                      size={25}
                      color="#087653"
                    />

                  </div>

                  <div
                    style={{
                      marginTop: 18,
                      paddingTop: 16,
                      borderTop: '1px solid #dce8e2',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      color: '#087653',
                      fontWeight: 800,
                    }}
                  >
                    <ShieldCheck size={18} />
                    Mobile number verified
                  </div>

                </div>

                <button
                  type="button"
                  className="btn"
                  style={{ marginTop: 18 }}
                  onClick={startMobileVerification}
                >
                  <Smartphone size={17} />
                  Verify another number
                </button>

              </div>
            )}

            {/* Trust */}
            <div className="account-trust">

              <ShieldCheck size={17} />

              <span>
                Mobile verification is used for seller contact actions.
              </span>

            </div>

          </section>

        </div>
      </div>
    </main>
  );
}
