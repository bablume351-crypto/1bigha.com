'use client';

import { useEffect, useMemo, useState } from 'react';
import PropertyCard from '@/components/PropertyCard';
import { cities, properties } from '@/lib/data';

const budgetOptions = [
  { value: '', label: 'Any budget' },
  { value: 'under50', label: 'Under ₹50 Lakh' },
  { value: '50to100', label: '₹50 Lakh – ₹1 Cr' },
  { value: '100to200', label: '₹1 Cr – ₹2 Cr' },
  { value: 'over200', label: 'Above ₹2 Cr' },
];

function budgetMatch(price: number, budget: string) {
  if (!budget) return true;
  if (budget === 'under50') return price < 5000000;
  if (budget === '50to100') return price >= 5000000 && price <= 10000000;
  if (budget === '100to200') return price > 10000000 && price <= 20000000;
  if (budget === 'over200') return price > 20000000;
  return true;
}

export default function SearchPage() {
  const [q, setQ] = useState('');
  const [city, setCity] = useState('');
  const [type, setType] = useState('');
  const [budget, setBudget] = useState('');
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    setQ(p.get('q') || '');
    setCity(p.get('city') || '');
    setType(p.get('type') || '');
    setBudget(p.get('budget') || '');
  }, []);

  const filtered = useMemo(() => properties.filter((p) => {
    const hay = `${p.title} ${p.location} ${p.type}`.toLowerCase();
    const matchesQ = !q || hay.includes(q.toLowerCase());
    const matchesCity = !city || p.city.toLowerCase() === city.toLowerCase();
    const matchesType = !type || p.type.toLowerCase().includes(type.toLowerCase());
    const matchesBudget = budgetMatch(p.priceNum, budget);
    const matchesVerified = !verified || p.verified;
    return matchesQ && matchesCity && matchesType && matchesBudget && matchesVerified;
  }), [q, city, type, budget, verified]);

  function clearFilters() {
    setQ('');
    setCity('');
    setType('');
    setBudget('');
    setVerified(false);
  }

  return (
    <main className="searchpage">
      <div className="container">
        <div className="sectionhead">
          <div>
            <span className="kicker">SEARCH</span>
            <h2>Find your property</h2>
            <p className="muted">{filtered.length} properties found</p>
          </div>
          <button type="button" className="btn" onClick={clearFilters}>Clear filters</button>
        </div>

        <div className="searchlayout">
          <aside className="sidebar">
            <b>Filters</b>

            <p>
              <label>Keyword</label>
              <input className="input" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Location or property" />
            </p>

            <p>
              <label>City</label>
              <select className="input" value={city} onChange={(e) => setCity(e.target.value)}>
                <option value="">All cities</option>
                {cities.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </p>

            <p>
              <label>Property type</label>
              <select className="input" value={type} onChange={(e) => setType(e.target.value)}>
                <option value="">Any type</option>
                {[...new Set(properties.map((p) => p.type))].map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </p>

            <p>
              <label>Budget</label>
              <select className="input" value={budget} onChange={(e) => setBudget(e.target.value)}>
                {budgetOptions.map((b) => <option key={b.value} value={b.value}>{b.label}</option>)}
              </select>
            </p>

            <label className="check-row">
              <input type="checkbox" checked={verified} onChange={(e) => setVerified(e.target.checked)} />
              <span>Verified only</span>
            </label>
          </aside>

          <section>
            {filtered.length ? (
              <div className="results">{filtered.map((p) => <PropertyCard key={p.id} p={p} />)}</div>
            ) : (
              <div className="empty">
                <h3>No matching properties</h3>
                <p className="muted">Try another city, type or budget.</p>
                <button type="button" className="btn primary" onClick={clearFilters}>Show all properties</button>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
