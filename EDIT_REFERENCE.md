# ciaogan.eu — Guida rapida alle modifiche

---

## 🎨 COLORI
**File:** `tailwind.config.ts` + `src/app/globals.css`

| Token Tailwind | Hex       | Usato per                          |
|----------------|-----------|------------------------------------|
| `cream`        | `#E9CCA2` | Sfondo generale (`body`, sezioni)  |
| `ink`          | `#1A1A1A` | Titoli, testo scuro, pulsanti      |
| `terra`        | `#6B4F3A` | Accento, numeri, link, CTA secondari |
| `accent`       | `#6B4F3A` | Alias di terra                     |
| Testo corpo    | `#3A3A3A` | `color` in `globals.css` su `body` |

Per cambiare un colore globale modifica il valore in **`tailwind.config.ts`** (es. `terra: "#NUOVOHEX"`).
Per il colore del body/testo base modifica **`globals.css`** → `body { color: ... }`.

**Selezione testo:** `globals.css` → `::selection { background: ...; color: ...; }`

---

## 📝 TESTI (tutte le lingue)

| Lingua   | File                    |
|----------|-------------------------|
| Italiano | `messages/it.json`      |
| Inglese  | `messages/en.json`      |
| Albanese | `messages/sq.json`      |

### Struttura chiavi
```
nav.*          → voci menu + bottone prenota (header)
hero.*         → kicker, titolo H1, sottotitolo, testo CTA
stats.*        → strip di fiducia sotto l'hero
method.*       → sezione "Come funziona" (3 step)
courses.*      → sezione corsi (4 card)
about.*        → sezione "Chi sono"
reviews.*      → 3 recensioni (r1, r2, r3) + r1Flag/r2Flag/r3Flag (emoji bandiera)
booking.*      → titolo + sottotitolo sezione prenotazione
faq.*          → 4 domande/risposte accordion
footer.*       → tagline + copyright
```

**Modifica una frase:** apri il .json della lingua, trova la chiave, cambia il valore. Stessa chiave in tutti e 3 i file se vuoi coerenza multilingua.

**Aggiungere una recensione:** aggiungi `r4`, `r4Author`, `r4Flag` in tutti e 3 i JSON, poi aggiungi l'elemento all'array `reviews` in `src/app/[locale]/page.tsx`.

---

## 🔘 BOTTONI

### Bottone primario (hero + about)
**File:** `src/app/[locale]/page.tsx`
```tsx
// cerca:
className="rounded-md bg-ink px-6 py-3 font-medium text-white ..."
// bg-ink = sfondo nero, text-white = testo bianco
```

### Bottone WhatsApp (fisso in basso a destra)
**File:** `src/components/WhatsAppCta.tsx`
```tsx
// dimensioni: px-6 py-4 → padding
// icona: h-6 w-6 → dimensione SVG
// colore sfondo: bg-[#25D366] → verde WhatsApp
```

---

## 📅 PRENOTAZIONE (Cal.com)
**File:** `src/site.config.ts`

```ts
export const siteConfig = {
  calUsername: 'ganjel-belaj-muma5g',  // username Cal.com
  calEvent:    '30min',                 // slug evento
  email:       'ciao@ciaogan.eu',
  whatsapp:    '355695892559',          // prefisso internazionale senza +
};
```

---

## 🌐 SEO & METADATI
**File:** `src/app/[locale]/layout.tsx`

- `title` → titolo tab browser + Google
- `description` → snippet Google (max ~160 caratteri)
- `keywords` → array parole chiave
- `openGraph.title/description` → anteprima su social

**JSON-LD (schema Person per Google):**
**File:** `src/app/layout.tsx`
```ts
name: 'Ganjel Belaj'           // nome indicizzato da Google
alternateName: ['Gan Belaj', 'ciaogan']
description: '...'             // bio per Knowledge Graph
```

---

## 🗺️ SITEMAP & ROBOTS
- Sitemap: `src/app/sitemap.ts` → generata automaticamente su `/sitemap.xml`
- Robots: `src/app/robots.ts` → generato automaticamente su `/robots.txt`

Nessuna modifica necessaria salvo cambio dominio → aggiorna `BASE_URL` in `sitemap.ts`.

---

## 🏳️ LINGUE / SWITCHER
**File:** `src/components/LocaleSwitcher.tsx`

```ts
const labels: Record<string, string> = { it: 'IT', en: 'EN', sq: 'SH' };
// Cambia il label visibile senza toccare il codice locale
```

Lingue attive: `src/i18n/routing.ts` → array `locales`.

---

## 🖼️ IMMAGINE PROFILO
**File:** `public/ganjel.jpg`
Sostituisci il file mantenendo lo stesso nome. Rapporto consigliato: 4:5.

---

## 📐 LAYOUT VELOCE

| Cosa                        | Dove nel page.tsx           |
|-----------------------------|-----------------------------|
| Larghezza max contenuto     | `max-w-5xl` (tutte le sezioni) |
| Padding orizzontale         | `px-5`                      |
| Spaziatura sezioni          | `py-24`                     |
| Font                        | Open Sans via Google Fonts (`globals.css`) |
