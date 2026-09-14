'use client';

import Link from 'next/link';
import { Heart, ListPlus, LogOut, MessageCircle, Settings, ShieldCheck, UserRound } from 'lucide-react';
import { useState } from 'react';

export default function AccountPage() {
  const [active, setActive] = useState('saved');
  return (
    <main className="account-page section">
      <div className="container">
        <div className="account-hero panel">
          <div className="account-avatar"><UserRound size={28} /></div>
          <div className="account-identity">
            <span className="kicker">MY ACCOUNT</span>
            <h1>Welcome to 1Bigha</h1>
            <p className="muted">Your saved properties, contacts and listings in one place.</p>
          </div>
          <button className="btn"><Settings size={16} /> Settings</button>
        </div>

        <div className="account-layout">
          <aside className="account-menu panel">
            <button className={active === 'saved' ? 'active' : ''} onClick={() => setActive('saved')}><Heart size={17} /> Saved</button>
            <button className={active === 'contacted' ? 'active' : ''} onClick={() => setActive('contacted')}><MessageCircle size={17} /> Contacted</button>
            <button className={active === 'listings' ? 'active' : ''} onClick={() => setActive('listings')}><ListPlus size={17} /> My Listings</button>
            <Link href="/sell"><ListPlus size={17} /> List Property</Link>
            <button className="logout"><LogOut size={17} /> Log out</button>
          </aside>

          <section className="account-content">
            <div className="panel">
              {active === 'saved' && <>
                <h2>Saved properties</h2>
                <div className="account-empty"><Heart size={28} /><h3>No saved properties yet</h3><p className="muted">Tap Shortlist on a property to save it here.</p><Link href="/search" className="btn primary">Explore properties</Link></div>
              </>}
              {active === 'contacted' && <>
                <h2>Contact history</h2>
                <div className="account-empty"><MessageCircle size={28} /><h3>No conversations yet</h3><p className="muted">Your seller conversations will appear here.</p></div>
              </>}
              {active === 'listings' && <>
                <div className="heading-row"><div><h2>My listings</h2><p className="muted">Track your submitted properties.</p></div><Link href="/sell" className="btn primary">New listing</Link></div>
                <div className="account-empty"><ListPlus size={28} /><h3>No listings yet</h3><p className="muted">Submitted properties will appear here.</p></div>
              </>}
            </div>
            <div className="account-trust"><ShieldCheck size={17} /><span>Mobile verification is used for seller contact actions.</span></div>
          </section>
        </div>
      </div>
    </main>
  );
}
