'use client';

import { useState } from 'react';
import { ArrowRight, LockKeyhole, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

type Props = {
  nextPath: string;
  onClose: () => void;
};

export default function ContactLoginModal({ nextPath, onClose }: Props) {
  const router = useRouter();
  const [phone, setPhone] = useState('');

  function continueToLogin(e: React.FormEvent) {
    e.preventDefault();
    if (!phone.trim()) return;
    router.push(
      `/login?phone=${encodeURIComponent(phone.trim())}&next=${encodeURIComponent(nextPath)}`
    );
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile login"
      onMouseDown={(e) => {
        if (e.currentTarget === e.target) onClose();
      }}
      onTouchStart={(e) => {
        if (e.currentTarget === e.target) onClose();
      }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2147483000,
        background: 'rgba(2, 18, 13, 0.72)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 18,
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 430,
          background: '#fff',
          color: '#10221b',
          borderRadius: 22,
          padding: 26,
          boxShadow: '0 30px 90px rgba(0,0,0,.35)',
          position: 'relative',
        }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: 12,
            right: 12,
            width: 38,
            height: 38,
            border: '1px solid #dfe8e3',
            borderRadius: 10,
            background: '#fff',
            display: 'grid',
            placeItems: 'center',
            cursor: 'pointer',
          }}
        >
          <X size={20} strokeWidth={2.6} />
        </button>

        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: 15,
            background: '#eaf5f0',
            color: '#0b6b50',
            display: 'grid',
            placeItems: 'center',
            marginBottom: 16,
          }}
        >
          <LockKeyhole size={25} strokeWidth={2.7} />
        </div>

        <h2 style={{ margin: '0 42px 8px 0', fontSize: 25, lineHeight: 1.15 }}>
          Login to contact owner
        </h2>

        <p style={{ margin: '0 0 18px', color: '#66756e', lineHeight: 1.5 }}>
          You can view the property without login. Verify your mobile number only to contact the owner.
        </p>

        <form onSubmit={continueToLogin}>
          <label
            htmlFor="contact-login-phone"
            style={{
              display: 'block',
              fontSize: 12,
              fontWeight: 900,
              marginBottom: 7,
            }}
          >
            Mobile number
          </label>

          <input
            id="contact-login-phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 98XXXXXXXX"
            required
            style={{
              width: '100%',
              minHeight: 52,
              border: '1px solid #d5e0da',
              borderRadius: 12,
              padding: '0 14px',
              outline: 'none',
              fontSize: 16,
              marginBottom: 12,
            }}
          />

          <button
            type="submit"
            style={{
              width: '100%',
              minHeight: 52,
              border: 0,
              borderRadius: 12,
              background: '#0b6b50',
              color: '#fff',
              fontWeight: 900,
              fontSize: 15,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              cursor: 'pointer',
            }}
          >
            Continue with Mobile
            <ArrowRight size={18} strokeWidth={2.7} />
          </button>
        </form>

        <button
          type="button"
          onClick={onClose}
          style={{
            width: '100%',
            minHeight: 46,
            marginTop: 9,
            border: '1px solid #dfe8e3',
            borderRadius: 12,
            background: '#fff',
            color: '#17352a',
            fontWeight: 800,
            cursor: 'pointer',
          }}
        >
          Maybe Later
        </button>
      </div>
    </div>
  );
}
