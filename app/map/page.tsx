import Link from 'next/link';
import { ExternalLink, MapPinned, ShieldCheck } from 'lucide-react';

export default function MapPage() {
  return (
    <main className="map-page section">
      <div className="container">
        <div className="map-head">
          <div><span className="kicker">VIRTUAL MAP</span><h1>Tronica City</h1><p className="muted">Sector map reference for buyers exploring the area.</p></div>
          <Link href="/search?city=Tronica%20City" className="btn primary">View properties</Link>
        </div>
        <div className="map-panel panel">
          <div className="map-toolbar"><span><MapPinned size={17}/> Tronica City map</span><span className="map-tag"><ShieldCheck size={15}/> Reference only</span></div>
          <div className="map-image-wrap"><img src="/tronica-city-reference-map.png" alt="Tronica City reference map"/></div>
          <div className="map-disclaimer"><ShieldCheck size={18}/><div><b>Reference map</b><p className="muted">Confirm sector, plot number, dimensions, ownership and availability with the concerned authority before any transaction.</p></div></div>
          <div className="map-links"><Link href="/search?city=Tronica%20City" className="btn">Search Tronica City</Link><a href="https://www.onlineupsida.com/" target="_blank" rel="noreferrer" className="btn">Official authority <ExternalLink size={15}/></a></div>
        </div>
      </div>
    </main>
  );
}
