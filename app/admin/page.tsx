'use client';

import Link from 'next/link';
import { Check, Clock3, FileText, MapPin, MoreHorizontal, ShieldCheck, Users, X } from 'lucide-react';

const pending = [
  { id: 'L-1001', title: 'Agricultural Land', location: 'Tronica City, Ghaziabad', status: 'Pending' },
  { id: 'L-1002', title: 'Residential Plot', location: 'Baghpat, Uttar Pradesh', status: 'Pending' },
  { id: 'L-1003', title: 'Industrial Plot', location: 'Ghaziabad, Uttar Pradesh', status: 'Review' }
];

export default function AdminPage() {
  return (
    <main className="admin-page section">
      <div className="container">
        <div className="admin-head">
          <div><span className="kicker">ADMIN</span><h1>1Bigha control centre</h1><p className="muted">Review listings and seller activity.</p></div>
          <Link href="/" className="btn">View website</Link>
        </div>

        <div className="admin-stats">
          <div className="admin-stat"><FileText size={19}/><span>New listings</span><b>12</b></div>
          <div className="admin-stat"><Clock3 size={19}/><span>Pending review</span><b>7</b></div>
          <div className="admin-stat"><Users size={19}/><span>Seller leads</span><b>24</b></div>
          <div className="admin-stat"><ShieldCheck size={19}/><span>Verified listings</span><b>38</b></div>
        </div>

        <div className="admin-grid">
          <section className="panel">
            <div className="heading-row"><div><h2>Review queue</h2><p className="muted">UI only — database connection comes later.</p></div></div>
            <div className="admin-table">
              {pending.map((p) => (
                <div className="admin-row" key={p.id}>
                  <div><b>{p.title}</b><small>{p.id}</small></div>
                  <div><MapPin size={13}/>{p.location}</div>
                  <div><span className="status">{p.status}</span></div>
                  <div className="row-actions">
                    <button className="icon-btn" aria-label="Approve"><Check size={16}/></button>
                    <button className="icon-btn" aria-label="Reject"><X size={16}/></button>
                    <button className="icon-btn" aria-label="More"><MoreHorizontal size={16}/></button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <aside className="panel admin-side">
            <h3>Quick actions</h3>
            <Link href="/sell" className="btn primary full">Create test listing</Link>
            <Link href="/search" className="btn full">Browse properties</Link>
            <Link href="/account" className="btn full">Open account UI</Link>
            <div className="admin-note"><ShieldCheck size={18}/><span>UI is ready for backend integration later.</span></div>
          </aside>
        </div>
      </div>
    </main>
  );
}
