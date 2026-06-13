import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ganjel Belaj - Lezioni private di italiano online | ciaogan.eu',
  description: 'Ganjel Belaj insegna italiano agli stranieri online.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ganjel Belaj',
    alternateName: ['Gan Belaj', 'ciaogan'],
    url: 'https://ciaogan.eu',
    image: 'https://ciaogan.eu/ganjel.jpg',
    jobTitle: 'Insegnante di italiano',
    description:
      'Ganjel Belaj è un insegnante di italiano per stranieri. Offre lezioni private online di conversazione, grammatica e preparazione agli esami CILS e CELI.',
    knowsLanguage: ['it', 'en', 'sq'],
    offers: {
      '@type': 'Offer',
      name: 'Lezioni private di italiano',
      url: 'https://ciaogan.eu',
    },
    sameAs: ['https://ciaogan.eu'],
  };

  return (
    <html>
      <head>
        <meta name="google-site-verification" content="gezFYdeKGZYt3LmM0PHd5fZZZQhR4H6kA2Jk7lAe3sU" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
