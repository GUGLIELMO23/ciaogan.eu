import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { getMessages } from 'next-intl/server';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import WhatsAppCta from '@/components/WhatsAppCta';

export const metadata: Metadata = {
  title: 'Ganjel Belaj - Lezioni private di italiano online | ciaogan.eu',
  description:
    'Ganjel Belaj insegna italiano agli stranieri online: conversazione, grammatica e preparazione CILS/CELI. Lezioni 1-a-1 su misura, prima lezione gratuita.',
  keywords: [
    'Ganjel Belaj',
    'Gan Belaj',
    'insegnante italiano online',
    'lezioni italiano stranieri',
    'ciaogan',
    'ciaogan.eu',
    'CILS CELI preparazione',
    'italiano online privato',
  ],
  authors: [{ name: 'Ganjel Belaj', url: 'https://ciaogan.eu' }],
  creator: 'Ganjel Belaj',
  metadataBase: new URL('https://ciaogan.eu'),
  alternates: {
    canonical: 'https://ciaogan.eu',
    languages: {
      'it': 'https://ciaogan.eu/it',
      'en': 'https://ciaogan.eu/en',
      'sq': 'https://ciaogan.eu/sq',
    },
  },
  openGraph: {
    title: 'Ganjel Belaj - Lezioni private di italiano online',
    description:
      'Ganjel Belaj insegna italiano agli stranieri online. Lezioni 1-a-1, prima lezione gratuita.',
    url: 'https://ciaogan.eu',
    siteName: 'ciaogan.eu',
    images: [
      {
        url: '/ganjel.jpg',
        width: 800,
        height: 1000,
        alt: 'Ganjel Belaj - insegnante di italiano',
      },
    ],
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ganjel Belaj - Lezioni private di italiano online',
    description: 'Lezioni 1-a-1 su misura con Ganjel Belaj. Prima lezione gratuita.',
    images: ['/ganjel.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: '/apple-icon.png',
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
          <WhatsAppCta />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
