'use client';

import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect, useState } from 'react';
import { siteConfig } from '@/site.config';

export default function Booking() {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const cal = await getCalApi();
        cal('ui', {
          theme: 'light',
          styles: { branding: { brandColor: '#a86b48' } },
          hideEventTypeDetails: false,
        });
      } catch {
        setFailed(true);
      }
    })();
    const timer = setTimeout(() => {
      const frame = document.querySelector('iframe[src*="cal.com"]');
      if (!frame) setFailed(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  if (failed) {
    return (
      <div className="rounded-2xl border-2 border-ink/10 bg-white p-10 text-center">
        <p className="text-ink/70">
          Il calendario non è ancora configurato. Scrivimi e fissiamo la
          lezione gratuita.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <a href={`mailto:${siteConfig.email}`} className="rounded-full bg-terra px-6 py-3 font-medium text-white">
            {siteConfig.email}
          </a>
          {siteConfig.whatsapp && (
            <a href={`https://wa.me/${siteConfig.whatsapp}`} className="rounded-full border-2 border-ink px-6 py-3 font-medium">
              WhatsApp
            </a>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border-2 border-ink/10 bg-white">
      <Cal
        calLink={`${siteConfig.calUsername}/${siteConfig.calEvent}`}
        config={{ layout: 'month_view', theme: 'light' } as any}
        style={{ width: '100%', height: '100%', minHeight: '620px' }}
      />
    </div>
  );
}
