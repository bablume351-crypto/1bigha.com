'use client';

import { use, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import {
  ArrowLeft,
  Heart,
  MapPin,
  MessageCircle,
  Phone,
  Share2,
  ShieldCheck,
} from 'lucide-react';

import ContactLoginModal from '@/components/ContactLoginModal';
import { properties } from '@/lib/data';

type Props = {
  params: Promise<{ id: string }>;
};

export default function PropertyPage({ params }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const { id } = use(params);

  const property = properties.find((p) => p.id === id);

  const [showLogin, setShowLogin] = useState(false);

  if (!property) {
    return (
      <main className="section">
        <div className="container">
          <h1>Property not found</h1>
        </div>
      </main>
    );
  }

  const currentProperty = property;

  async function shareProperty() {
    // Always create the share URL using the 1बीघा.com domain
    const url = `https://1बीघा.com${window.location.pathname}${window.location.search}`;

    const shareData = {
      title: currentProperty.title,
      text: `${currentProperty.title} — ${currentProperty.location} — ${currentProperty.price}\n\n${url}`,
    };

    try {
      // Mobile native share
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }

      // Desktop / unsupported browser fallback
      await navigator.clipboard.writeText(url);
      alert('Property link copied.');
    } catch {
      // User cancelled the share sheet.
    }
  }

  function requireLogin() {
    setShowLogin(true);
  }

  return (
    <main className="detailhero">
      <div className="container">

        {/* Top bar */}
        <div className="detail-topbar">
          <button
            className="btn"
            onClick={() => router.back()}
          >
            <ArrowLeft size={15} />
            Back
          </button>

          <div className="detail-actions">

            {/* Share */}
            <button
              className="icon-btn"
              onClick={shareProperty}
              title="Share property"
              aria-label="Share property"
            >
              <Share2 size={18} />
            </button>

            {/* Shortlist */}
            <button
              className="icon-btn"
              onClick={requireLogin}
              title="Shortlist"
              aria-label="Shortlist"
            >
              <Heart size={18} />
            </button>

          </div>
        </div>

        {/* Gallery */}
        <div className="gallery">
          <img
            src={currentProperty.image}
            alt={currentProperty.title}
          />

          <div className="gallery-side">
            <img
              className="small"
              src={currentProperty.image}
              alt="Property view"
            />

            <img
              className="small"
              src={currentProperty.image}
              alt="Property view"
            />
          </div>
        </div>

        {/* Property details */}
        <div className="detailgrid">

          <div className="panel">

            <div className="detail-location">
              <MapPin size={17} />
              {currentProperty.location}
            </div>

            <div className="detail-title-row">

              <div>
                <h1>{currentProperty.title}</h1>

                <div className="detail-price">
                  {currentProperty.price}
                </div>
              </div>

              {currentProperty.verified && (
                <span className="verified-large">
                  <ShieldCheck size={15} />
                  Verified
                </span>
              )}

            </div>

            <div className="meta">

              <span className="pill">
                {currentProperty.area}
              </span>

              <span className="pill">
                {currentProperty.type}
              </span>

              <span className="pill">
                {currentProperty.road}
              </span>

            </div>

            <p className="detail-description">
              {currentProperty.description}
            </p>

            <div className="featurelist">

              <div className="feature">
                <b>Area</b>
                <br />
                {currentProperty.area}
              </div>

              <div className="feature">
                <b>Road</b>
                <br />
                {currentProperty.road}
              </div>

              <div className="feature">
                <b>Location</b>
                <br />
                {currentProperty.city}
              </div>

              <div className="feature">
                <b>Listing</b>
                <br />
                {currentProperty.verified
                  ? 'Verified'
                  : 'Standard'}
              </div>

            </div>

            <h3>Location</h3>

            <div className="mapbox">
              <MapPin size={20} />
              {currentProperty.location}
            </div>

          </div>

          {/* Seller / Contact panel */}
          <aside
            className="panel seller-panel"
            onClick={requireLogin}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                requireLogin();
              }
            }}
            style={{ cursor: 'pointer' }}
          >

            <h3>
              Interested in this property?
            </h3>

            <p className="muted">
              Contact the owner, request a call or save
              this property.
            </p>

            {/* Contact Owner */}
            <button
              type="button"
              className="btn primary full"
              onClick={(e) => {
                e.stopPropagation();
                requireLogin();
              }}
              style={{
                fontWeight: 900,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 9,
              }}
            >
              <Phone
                size={19}
                strokeWidth={2.8}
              />

              Contact Owner
            </button>

            {/* WhatsApp */}
            <button
              type="button"
              className="btn full contact-alt"
              onClick={(e) => {
                e.stopPropagation();
                requireLogin();
              }}
              style={{
                fontWeight: 900,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 9,
              }}
            >
              <MessageCircle
                size={20}
                strokeWidth={2.8}
              />

              WhatsApp Owner
            </button>

            {/* Shortlist */}
            <button
              type="button"
              className="btn full contact-alt"
              onClick={(e) => {
                e.stopPropagation();
                requireLogin();
              }}
              style={{
                fontWeight: 900,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 9,
              }}
            >
              <Heart
                size={19}
                strokeWidth={2.8}
              />

              Shortlist Property
            </button>

            <div className="login-note">

              <ShieldCheck
                size={16}
                strokeWidth={2.6}
              />

              Mobile login is required only for
              contact actions.

            </div>

          </aside>

        </div>
      </div>

      {/* Login popup */}
      {showLogin && (
        <ContactLoginModal
          nextPath={pathname}
          onClose={() => setShowLogin(false)}
        />
      )}

    </main>
  );
}
