'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { routing } from '@/i18n/routing';
import { useTransition } from 'react';

const labels: Record<string, string> = { it: '🇮🇹 IT', en: '🇬🇧 EN', sq: '🇦🇱 SH' };

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  return (
    <div className="flex items-center gap-1 text-xs">
      {routing.locales.map((l) => (
        <button
          key={l}
          disabled={isPending}
          onClick={() =>
            startTransition(() => router.replace(pathname, { locale: l }))
          }
          className={`px-2 py-1 rounded transition-colors ${
            l === locale
              ? 'bg-ink text-cream'
              : 'text-ink/60 hover:text-ink hover:bg-ink/5'
          }`}
        >
          {labels[l]}
        </button>
      ))}
    </div>
  );
}
