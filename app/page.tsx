import Link from 'next/link';
import { ArrowRight, Building2, LandPlot, MapPin, Search, ShieldCheck, Tractor, Warehouse } from 'lucide-react';
import { cities, properties } from '@/lib/data';

const locations = [
  {name:'Tronica City',area:'Ghaziabad',route:'Delhi – Meerut Expressway',image:'/delhi-meerut.jpg',query:'Tronica City'},
  {name:'Ghaziabad',area:'NCR',route:'Eastern Peripheral Expressway',image:'/eastern-peripheral.jpg',query:'Ghaziabad'},
  {name:'Baghpat',area:'Western UP',route:'Delhi – Dehradun Expressway',image:'/delhi-dehradun.jpg',query:'Baghpat'},
];
const categories = [
  {title:'Agricultural',icon:Tractor,href:'/search?type=Agricultural%20Land'},
  {title:'Residential',icon:Building2,href:'/search?type=Residential%20Plot'},
  {title:'Industrial',icon:Warehouse,href:'/search?type=Industrial%20Land'},
  {title:'Commercial',icon:LandPlot,href:'/search?type=Commercial%20Plot'},
];

export default function Home(){
 return <main className="home">
  <section className="hero">
   <div className="hero-collage" aria-hidden="true"><div style={{backgroundImage:"url('/delhi-meerut.jpg')"}}/><div style={{backgroundImage:"url('/eastern-peripheral.jpg')"}}/><div style={{backgroundImage:"url('/delhi-dehradun.jpg')"}}/></div>
   <div className="hero-overlay"/>
   <div className="container hero-content">
    <div className="hero-copy">
     <span className="eyebrow"><ShieldCheck size={15}/> 1Bigha</span>
     <h1>Find the right land.<span>Build your future.</span></h1>
     <form action="/search" className="hero-search">
      <div className="hero-field"><MapPin size={20}/><select name="city" defaultValue=""><option value="">Select city</option>{cities.map(c=><option key={c} value={c}>{c}</option>)}</select></div>
      <div className="hero-field"><LandPlot size={20}/><select name="type" defaultValue=""><option value="">All property types</option><option>Agricultural Land</option><option>Residential Plot</option><option>Commercial Plot</option><option>Industrial Land</option><option>Farm Land</option></select></div>
      <button type="submit" className="hero-button"><Search size={19}/> Search</button>
     </form>
     <div className="hero-popular"><span>Popular</span>{locations.map(item=><Link key={item.name} href={`/search?city=${encodeURIComponent(item.query)}`}>{item.name}</Link>)}</div>
    </div>
    <div className="hero-side"><strong>Your land, your future</strong><span>✓ Verified owners</span><span>✓ Clear deals</span><span>✓ Better locations</span><span>✓ Legal support</span></div>
   </div>
  </section>

  <section className="trust-strip"><div className="container trust-grid"><div><ShieldCheck size={20}/><b>Verified Owners</b></div><div><span className="rupee">₹</span><b>Better Deals</b></div><div><LandPlot size={20}/><b>Prime Locations</b></div><div><Building2 size={20}/><b>No Brokerage</b></div></div></section>

  <section className="section"><div className="container"><div className="heading-row"><div><span className="kicker">PRIME NCR</span><h2>Three growth corridors</h2></div><Link href="/search" className="text-link">Explore <ArrowRight size={16}/></Link></div><div className="corridor-grid">{locations.map(item=><Link key={item.name} href={`/search?city=${encodeURIComponent(item.query)}`} className="corridor-card"><div className="corridor-img"><img src={item.image} alt={item.route} loading="lazy"/><div className="location-chip"><MapPin size={16}/>{item.name}</div></div><div className="corridor-body"><span>{item.area}</span><h3>{item.route}</h3><div className="card-action">Search properties <ArrowRight size={15}/></div></div></Link>)}</div></div></section>

  <section className="section section-soft"><div className="container"><div className="heading-row"><div><span className="kicker">CATEGORIES</span><h2>Find by type</h2></div></div><div className="category-grid">{categories.map(({title,icon:Icon,href})=><Link href={href} key={title} className="category-card"><Icon size={28}/><span>{title}</span><ArrowRight size={17}/></Link>)}</div></div></section>

  <section className="section"><div className="container"><div className="heading-row"><div><span className="kicker">FEATURED</span><h2>Popular properties</h2></div><Link href="/search" className="text-link">View all <ArrowRight size={16}/></Link></div><div className="property-grid">{properties.slice(0,10).map(p=><Link href={`/property/${p.id}`} key={p.id} className="property-card"><div className="property-image"><img src={p.image} alt={p.title} loading="lazy"/>{p.verified&&<span className="verified"><ShieldCheck size={12}/> Verified</span>}</div><div className="property-body"><div className="property-location"><MapPin size={13}/> {p.location}</div><h3>{p.title}</h3><div className="property-bottom"><strong>{p.price}</strong><span>{p.area}</span></div></div></Link>)}</div></div></section>

  <section className="sell-cta"><div className="container sell-inner"><div><span className="kicker light">SELL ON 1BIGHA</span><h2>Have land to sell?</h2><p>List it on 1Bigha.</p></div><Link href="/sell" className="sell-button">List Property <ArrowRight size={17}/></Link></div></section>
 </main>
}
