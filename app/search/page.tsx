'use client';

import { useEffect, useMemo, useState } from 'react';
import PropertyCard from '@/components/PropertyCard';
import { cities, properties } from '@/lib/data';

const mapLocations: Record<string, { lat: number; lon: number }> = {
  'Tronica City': { lat: 28.7507, lon: 77.2821 },
  Ghaziabad: { lat: 28.6692, lon: 77.4538 },
  Loni: { lat: 28.7526, lon: 77.2905 },
  Baghpat: { lat: 28.9448, lon: 77.2189 },
  'Greater Noida': { lat: 28.4744, lon: 77.504 },
  Noida: { lat: 28.5355, lon: 77.391 },
  Delhi: { lat: 28.6139, lon: 77.209 },
};

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
  const [view, setView] = useState<'list' | 'map'>('list');

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

  const mapCenter = mapLocations[city] || mapLocations['Tronica City'];
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${mapCenter.lon - 0.16}%2C${mapCenter.lat - 0.12}%2C${mapCenter.lon + 0.16}%2C${mapCenter.lat + 0.12}&layer=mapnik&marker=${mapCenter.lat}%2C${mapCenter.lon}`;

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
          <div style={{display:'flex',gap:8,flexWrap:'wrap'}}><button type="button" className={view === 'list' ? 'btn primary' : 'btn'} onClick={() => setView('list')}>☷ List</button><button type="button" className={view === 'map' ? 'btn primary' : 'btn'} onClick={() => setView('map')}>⌖ Map</button><button type="button" className="btn" onClick={clearFilters}>Clear filters</button></div>
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
            {view === 'map' ? (
              <div className="panel" style={{padding:0,overflow:'hidden'}}>
                <div style={{padding:'18px 20px 8px'}}><h2 style={{marginBottom:4}}>Property Map</h2><p className="muted">{city || 'NCR'} property locations</p></div>
                <iframe title="1Bigha property map" src={mapUrl} style={{width:'100%',height:390,border:0}} loading="lazy" />
                <div style={{padding:18}}><h3 style={{marginTop:0}}>Properties in this search</h3>
                  {filtered.length ? <div style={{display:'grid',gap:10}}>{filtered.map((p) => <div key={p.id} style={{display:'flex',justifyContent:'space-between',gap:12,alignItems:'center',border:'1px solid #e1e8e3',borderRadius:12,padding:'12px 14px'}}><div><b>{p.title}</b><div className="muted" style={{fontSize:13}}>{p.city} · {p.area}</div></div><button className="btn" type="button" onClick={() => setView('list')}>View</button></div>)}</div> : <p className="muted">No properties match these filters.</p>}
                  <p className="muted" style={{fontSize:12,marginBottom:0,marginTop:14}}>Map shows the selected area reference. Exact plot coordinates will be connected in the backend phase.</p>
                </div>
              </div>
            ) : filtered.length ? (
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
