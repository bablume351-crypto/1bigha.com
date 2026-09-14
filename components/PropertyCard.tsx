import Link from 'next/link';
import type { Property } from '@/lib/data';
import ShareButton from './ShareButton';

export default function PropertyCard({ p }: { p: Property }) {
  return (
    <article className="card">
      <Link href={`/property/${p.id}`} className="card-main">
        <div className="imgwrap">
          <img src={p.image} alt={p.title} loading="lazy" />
          {p.verified && <span className="badge">✓ Verified</span>}
        </div>
        <div className="cardbody">
          <p className="cardtitle">{p.title}</p>
          <div className="muted">📍 {p.location}</div>
          <div className="price">{p.price}</div>
          <div className="meta">
            <span className="pill">{p.area}</span>
            <span className="pill">{p.type}</span>
          </div>
        </div>
      </Link>
      <div className="card-footer-actions">
        <ShareButton title={p.title} location={p.location} />
        <Link href={`/property/${p.id}`} className="details-link">View details →</Link>
      </div>
    </article>
  );
}
