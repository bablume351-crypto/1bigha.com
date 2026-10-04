'use client';

import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Star,
} from 'lucide-react';

const partners = [
  {
    name: 'Partner Name 01',
    company: 'Verified Property Partner',
    location: 'Tronica City, Ghaziabad',
    properties: 24,
    types: 'Plots, Land & Industrial',
    rating: '4.9',
  },
  {
    name: 'Partner Name 02',
    company: 'Verified Property Partner',
    location: 'Ghaziabad, Uttar Pradesh',
    properties: 18,
    types: 'Residential & Commercial',
    rating: '4.8',
  },
  {
    name: 'Partner Name 03',
    company: 'Verified Property Partner',
    location: 'Noida, Uttar Pradesh',
    properties: 31,
    types: 'Plots & Land',
    rating: '4.9',
  },
  {
    name: 'Partner Name 04',
    company: 'Verified Property Partner',
    location: 'Greater Noida',
    properties: 16,
    types: 'Residential Plots',
    rating: '4.7',
  },
  {
    name: 'Partner Name 05',
    company: 'Verified Property Partner',
    location: 'Baghpat, Uttar Pradesh',
    properties: 12,
    types: 'Agricultural Land',
    rating: '4.8',
  },
  {
    name: 'Partner Name 06',
    company: 'Verified Property Partner',
    location: 'Delhi NCR',
    properties: 27,
    types: 'Land & Commercial',
    rating: '4.9',
  },
];

const partnerProperties = [
  {
    title: 'Tronica City Residential Plot',
    location: 'Tronica City, Ghaziabad',
    type: 'Residential Plot',
    price: '₹32 Lakh',
    area: '1200 sq.ft.',
  },
  {
    title: 'Industrial Land Opportunity',
    location: 'Ghaziabad, Uttar Pradesh',
    type: 'Industrial Land',
    price: '₹1.25 Cr',
    area: '5000 sq.ft.',
  },
  {
    title: 'Agricultural Land',
    location: 'Baghpat, Uttar Pradesh',
    type: 'Agricultural Land',
    price: '₹48 Lakh',
    area: '2 Bigha',
  },
  {
    title: 'Greater Noida Plot',
    location: 'Greater Noida, Uttar Pradesh',
    type: 'Residential Plot',
    price: '₹55 Lakh',
    area: '1500 sq.ft.',
  },
];

export default function PartnersPage() {
  return (
    <main className="section">

      {/* Hero */}
      <section
        style={{
          background:
            'linear-gradient(135deg, #063f31 0%, #087653 55%, #0b8b64 100%)',
          color: '#fff',
          padding: '70px 0',
        }}
      >
        <div className="container">

          <div
            style={{
              maxWidth: 760,
              margin: '0 auto',
              textAlign: 'center',
            }}
          >

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 7,
                padding: '8px 14px',
                borderRadius: 999,
                background: 'rgba(255,255,255,.12)',
                border: '1px solid rgba(255,255,255,.18)',
                marginBottom: 18,
                fontWeight: 800,
                fontSize: 13,
              }}
            >
              <ShieldCheck size={16} />
              1Bigha Partner Network
            </div>

            <h1
              style={{
                margin: 0,
                fontSize: 'clamp(38px, 6vw, 64px)',
                lineHeight: 1.05,
                letterSpacing: '-2px',
              }}
            >
              Our Partners
            </h1>

            <p
              style={{
                margin: '20px auto 0',
                maxWidth: 650,
                fontSize: 18,
                lineHeight: 1.6,
                color: 'rgba(255,255,255,.82)',
              }}
            >
              Discover trusted property partners and explore their
              verified land, plot and property listings on 1Bigha.
            </p>

          </div>
        </div>
      </section>

      {/* Partner network stats */}
      <section style={{ marginTop: -35 }}>
        <div className="container">

          <div
            className="panel"
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(180px, 1fr))',
              gap: 1,
              padding: 0,
              overflow: 'hidden',
            }}
          >

            <div style={{ padding: 24, textAlign: 'center' }}>
              <Building2
                size={25}
                style={{ color: '#087653', marginBottom: 8 }}
              />
              <strong style={{ display: 'block', fontSize: 26 }}>
                50+
              </strong>
              <span className="muted">
                Property Partners
              </span>
            </div>

            <div style={{ padding: 24, textAlign: 'center' }}>
              <ShieldCheck
                size={25}
                style={{ color: '#087653', marginBottom: 8 }}
              />
              <strong style={{ display: 'block', fontSize: 26 }}>
                500+
              </strong>
              <span className="muted">
                Listed Properties
              </span>
            </div>

            <div style={{ padding: 24, textAlign: 'center' }}>
              <MapPin
                size={25}
                style={{ color: '#087653', marginBottom: 8 }}
              />
              <strong style={{ display: 'block', fontSize: 26 }}>
                10+
              </strong>
              <span className="muted">
                Locations
              </span>
            </div>

            <div style={{ padding: 24, textAlign: 'center' }}>
              <Star
                size={25}
                style={{ color: '#087653', marginBottom: 8 }}
              />
              <strong style={{ display: 'block', fontSize: 26 }}>
                4.8+
              </strong>
              <span className="muted">
                Partner Rating
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="container" style={{ marginTop: 55 }}>

        <div
          style={{
            display: 'flex',
            alignItems: 'end',
            justifyContent: 'space-between',
            gap: 20,
            marginBottom: 24,
          }}
        >

          <div>
            <span className="kicker">
              PARTNER NETWORK
            </span>

            <h2 style={{ margin: '7px 0 5px' }}>
              Trusted Property Partners
            </h2>

            <p className="muted" style={{ margin: 0 }}>
              Explore properties listed by our partner network.
            </p>
          </div>

        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 20,
          }}
        >

          {partners.map((partner) => (
            <div
              key={partner.name}
              className="panel"
              style={{
                padding: 22,
                transition: 'transform .2s ease',
              }}
            >

              {/* Partner identity */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                }}
              >

                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    background: '#e8f6f0',
                    color: '#087653',
                    display: 'grid',
                    placeItems: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Building2 size={26} />
                </div>

                <div style={{ minWidth: 0 }}>

                  <h3
                    style={{
                      margin: 0,
                      fontSize: 18,
                    }}
                  >
                    {partner.name}
                  </h3>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      marginTop: 5,
                      color: '#087653',
                      fontSize: 12,
                      fontWeight: 800,
                    }}
                  >
                    <CheckCircle2 size={14} />
                    {partner.company}
                  </div>

                </div>

              </div>

              {/* Location */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 7,
                  marginTop: 20,
                  color: '#66756e',
                  fontSize: 14,
                }}
              >
                <MapPin size={16} />
                {partner.location}
              </div>

              {/* Info */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 10,
                  marginTop: 18,
                }}
              >

                <div
                  style={{
                    background: '#f5f9f7',
                    borderRadius: 12,
                    padding: 12,
                  }}
                >
                  <strong
                    style={{
                      display: 'block',
                      fontSize: 20,
                    }}
                  >
                    {partner.properties}
                  </strong>

                  <span className="muted">
                    Properties
                  </span>
                </div>

                <div
                  style={{
                    background: '#f5f9f7',
                    borderRadius: 12,
                    padding: 12,
                  }}
                >
                  <strong
                    style={{
                      display: 'block',
                      fontSize: 20,
                    }}
                  >
                    ★ {partner.rating}
                  </strong>

                  <span className="muted">
                    Rating
                  </span>
                </div>

              </div>

              <p
                className="muted"
                style={{
                  margin: '15px 0 18px',
                  fontSize: 14,
                }}
              >
                {partner.types}
              </p>

              <Link
                href="/search"
                className="btn primary full"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                }}
              >
                View Properties
                <ArrowRight size={17} />
              </Link>

            </div>
          ))}

        </div>
      </section>

      {/* Partner Properties */}
      <section
        className="container"
        style={{ marginTop: 65 }}
      >

        <div style={{ marginBottom: 24 }}>

          <span className="kicker">
            PARTNER PROPERTIES
          </span>

          <h2 style={{ margin: '7px 0 5px' }}>
            Latest Properties From Partners
          </h2>

          <p className="muted" style={{ margin: 0 }}>
            Browse selected properties currently available
            through our partner network.
          </p>

        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 18,
          }}
        >

          {partnerProperties.map((property) => (
            <div
              key={property.title}
              className="panel"
              style={{
                padding: 0,
                overflow: 'hidden',
              }}
            >

              <div
                style={{
                  height: 155,
                  background:
                    'linear-gradient(135deg, #dcefe7, #b9ddce)',
                  display: 'grid',
                  placeItems: 'center',
                  color: '#087653',
                }}
              >
                <Building2 size={44} />
              </div>

              <div style={{ padding: 20 }}>

                <span
                  style={{
                    display: 'inline-block',
                    padding: '5px 9px',
                    borderRadius: 999,
                    background: '#e8f6f0',
                    color: '#087653',
                    fontSize: 11,
                    fontWeight: 900,
                  }}
                >
                  {property.type}
                </span>

                <h3 style={{ margin: '12px 0 7px' }}>
                  {property.title}
                </h3>

                <div
                  className="muted"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    fontSize: 13,
                  }}
                >
                  <MapPin size={15} />
                  {property.location}
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: 10,
                    marginTop: 17,
                    paddingTop: 15,
                    borderTop: '1px solid #e5ece8',
                  }}
                >

                  <div>
                    <strong>{property.price}</strong>
                    <div className="muted">
                      Price
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <strong>{property.area}</strong>
                    <div className="muted">
                      Area
                    </div>
                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>
      </section>

      {/* Become partner */}
      <section
        className="container"
        style={{ marginTop: 65 }}
      >

        <div
          className="panel"
          style={{
            padding: '35px 30px',
            background:
              'linear-gradient(135deg, #edf8f3, #f7fbf9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 25,
            flexWrap: 'wrap',
          }}
        >

          <div style={{ maxWidth: 650 }}>

            <span className="kicker">
              PARTNER WITH 1BIGHA
            </span>

            <h2 style={{ margin: '7px 0 8px' }}>
              Want to list your properties with us?
            </h2>

            <p
              className="muted"
              style={{ margin: 0, lineHeight: 1.6 }}
            >
              Join the 1Bigha partner network and showcase
              your properties to buyers looking for land,
              plots and real estate.
            </p>

          </div>

          <Link
            href="/sell"
            className="btn primary"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              whiteSpace: 'nowrap',
            }}
          >
            Become a Partner
            <ArrowRight size={17} />
          </Link>

        </div>

      </section>

    </main>
  );
}
