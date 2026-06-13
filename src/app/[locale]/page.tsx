import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import Booking from '@/components/Booking';
import { siteConfig } from '@/site.config';

export default async function Home() {
  const t = await getTranslations();

  const courses = [
    { title: t('courses.conversationTitle'), body: t('courses.conversationBody'), n: '01' },
    { title: t('courses.examTitle'), body: t('courses.examBody'), n: '02' },
    { title: t('courses.grammarTitle'), body: t('courses.grammarBody'), n: '03' },
    { title: t('courses.businessTitle'), body: t('courses.businessBody'), n: '04' },
  ];

  const steps = [
    { title: t('method.step1Title'), body: t('method.step1Body') },
    { title: t('method.step2Title'), body: t('method.step2Body') },
    { title: t('method.step3Title'), body: t('method.step3Body') },
  ];

  const reviews = [
    { text: t('reviews.r1'), author: t('reviews.r1Author'), flag: t('reviews.r1Flag') },
    { text: t('reviews.r2'), author: t('reviews.r2Author'), flag: t('reviews.r2Flag') },
    { text: t('reviews.r3'), author: t('reviews.r3Author'), flag: t('reviews.r3Flag') },
  ];

  const faqs = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') },
  ];

  return (
    <main className="min-h-screen">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/90 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <Link href="/" className="font-display text-xl font-black tracking-tight text-ink">
            ciaogan<span className="text-terra">.eu</span>
          </Link>
          <div className="hidden items-center gap-8 text-sm md:flex">
            <a href="#method" className="text-ink/70 hover:text-ink">{t('nav.method')}</a>
            <a href="#courses" className="text-ink/70 hover:text-ink">{t('nav.courses')}</a>
            <a href="#about" className="text-ink/70 hover:text-ink">{t('nav.about')}</a>
            <a href="#reviews" className="text-ink/70 hover:text-ink">{t('nav.reviews')}</a>
          </div>
          <div className="flex items-center gap-4">
            <LocaleSwitcher />
            <a href="#booking" className="hidden text-sm font-medium text-terra underline-offset-4 hover:underline sm:block">
              {t('nav.book')}
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-5xl px-5 pb-20 pt-20 md:pt-28">
        <p className="rise mb-5 text-sm text-ink/55">{t('hero.kicker')}</p>
        <h1 className="rise max-w-3xl font-display text-5xl font-black leading-[1.02] tracking-tight text-ink md:text-6xl lg:text-7xl" style={{ animationDelay: '0.06s' }}>
          {t('hero.title')}
        </h1>
        <p className="rise mt-7 max-w-xl text-lg leading-relaxed text-ink/70" style={{ animationDelay: '0.12s' }}>
          {t('hero.subtitle')}
        </p>
        <div className="rise mt-8 flex flex-wrap items-center gap-5" style={{ animationDelay: '0.18s' }}>
          <a href="#booking" className="rounded-md bg-ink px-6 py-3 font-medium text-white transition-colors hover:bg-ink/85">
            {t('hero.ctaPrimary')}
          </a>
          <a href="#method" className="font-medium text-ink/70 underline-offset-4 hover:text-ink hover:underline">
            {t('hero.ctaSecondary')} →
          </a>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-ink/10">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-10 gap-y-3 px-5 py-6 text-sm text-ink/60">
          <span><strong className="font-semibold text-ink">{t('stats.levels')}</strong></span>
          <span className="hidden h-4 w-px bg-ink/15 md:block" />
          <span>{t('about.point1')}</span>
          <span className="hidden h-4 w-px bg-ink/15 md:block" />
          <span>{t('about.point2')}</span>
          <span className="hidden h-4 w-px bg-ink/15 md:block" />
          <span>{t('about.point3')}</span>
        </div>
      </section>

      {/* METHOD */}
      <section id="method" className="mx-auto max-w-5xl px-5 py-24">
        <h2 className="font-display text-3xl font-black text-ink md:text-4xl">{t('method.title')}</h2>
        <div className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={i}>
              <div className="font-display text-lg text-terra">{(i + 1).toString().padStart(2, '0')}</div>
              <h3 className="mt-2 text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-ink/65">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COURSES */}
      <section id="courses" className="border-t border-ink/10" style={{ backgroundColor: 'rgba(107,79,58,0.08)' }}>
        <div className="mx-auto max-w-5xl px-5 py-24">
          <h2 className="font-display text-3xl font-black text-ink md:text-4xl">{t('courses.title')}</h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-ink/10 bg-ink/10 md:grid-cols-2">
            {courses.map((c) => (
              <div key={c.n} className="p-8" style={{ backgroundColor: '#E9CCA2' }}>
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-sm text-terra">{c.n}</span>
                  <h3 className="font-display text-xl font-bold text-ink">{c.title}</h3>
                </div>
                <p className="mt-3 leading-relaxed text-ink/65">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-5xl px-5 py-24">
        <div className="grid items-start gap-12 md:grid-cols-[1fr_1.2fr]">
          <img
            src="/ganjel.jpg"
            alt="Ganjel Belaj - insegnante di italiano"
            className="aspect-[4/5] w-full rounded-lg object-cover"
          />
          <div>
            <h2 className="font-display text-3xl font-black text-ink md:text-4xl">{t('about.title')}</h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/75">{t('about.body')}</p>
            <a href="#booking" className="mt-8 inline-block font-medium text-terra underline underline-offset-4">
              {t('hero.ctaPrimary')} →
            </a>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="border-t border-ink/10" style={{ backgroundColor: 'rgba(107,79,58,0.08)' }}>
        <div className="mx-auto max-w-5xl px-5 py-24">
          <h2 className="font-display text-3xl font-black text-ink md:text-4xl">{t('reviews.title')}</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {reviews.map((r, i) => (
              <figure key={i}>
                <div className="mb-2 text-xl">{r.flag}</div>
                <blockquote className="font-display text-xl leading-snug text-ink">"{r.text}"</blockquote>
                <figcaption className="mt-4 flex items-center gap-2 text-sm text-ink/55">
                  <span>{r.flag}</span>
                  <span>{r.author}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="mx-auto max-w-5xl px-5 py-24">
        <h2 className="font-display text-3xl font-black text-ink md:text-4xl">{t('booking.title')}</h2>
        <p className="mt-3 max-w-xl text-ink/65">{t('booking.subtitle')}</p>
        <div className="mt-10">
          <Booking />
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-ink/10">
        <div className="mx-auto max-w-3xl px-5 py-24">
          <h2 className="font-display text-3xl font-black text-ink md:text-4xl">{t('faq.title')}</h2>
          <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
            {faqs.map((f, i) => (
              <details key={i} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-ink">
                  {f.q}
                  <span className="text-terra transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 leading-relaxed text-ink/65">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mx-auto max-w-5xl px-5 py-12">
        <div className="flex flex-col items-start justify-between gap-6 border-t border-ink/10 pt-8 md:flex-row md:items-center">
          <div>
            <div className="font-display text-lg font-black text-ink">ciaogan<span className="text-terra">.eu</span></div>
            <p className="mt-1 text-sm text-ink/55">{t('footer.tagline')}</p>
          </div>
          <div className="flex items-center gap-5 text-sm">
            <a href={`mailto:${siteConfig.email}`} className="text-ink/70 hover:text-ink">{siteConfig.email}</a>
            {siteConfig.whatsapp && (
              <a href={`https://wa.me/${siteConfig.whatsapp}`} className="text-ink/70 hover:text-ink">WhatsApp</a>
            )}
          </div>
        </div>
        <p className="mt-6 text-xs text-ink/40">© {new Date().getFullYear()} ciaogan.eu — {t('footer.rights')}</p>
      </footer>
    </main>
  );
}
