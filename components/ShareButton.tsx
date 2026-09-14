'use client';

import { Share2 } from 'lucide-react';

export default function ShareButton({ title, location }: { title: string; location?: string }) {
  const share = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({
          title,
          text: location ? `${title} — ${location}` : title,
          url,
        });
        return;
      }
      await navigator.clipboard.writeText(url);
      alert('Property link copied');
    } catch {
      // User cancelled the native share sheet.
    }
  };

  return (
    <button type="button" className="share-button" onClick={share} aria-label={`Share ${title}`} title="Share property">
      <Share2 size={16} strokeWidth={2.7} />
      <span>Share</span>
    </button>
  );
}
