import { siteConfig } from '@/site.config';

export default function WhatsAppCta() {
  if (!siteConfig.whatsapp) return null;
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-6 py-4 text-base font-semibold text-white shadow-xl shadow-black/20 transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 32 32" className="h-6 w-6" fill="currentColor" aria-hidden="true">
        <path d="M19.11 17.39c-.29-.15-1.7-.84-1.97-.93-.27-.1-.46-.15-.66.14-.19.29-.75.93-.92 1.12-.17.19-.34.22-.63.07-.29-.14-1.22-.45-2.32-1.43-.86-.77-1.43-1.71-1.6-2-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.49.1-.19.05-.36-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.49-.66-.5l-.56-.01c-.19 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.43s1.04 2.82 1.18 3.02c.15.19 2.05 3.13 4.98 4.39.7.3 1.24.48 1.66.61.7.22 1.33.19 1.83.12.56-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.27-.19-.56-.34zM16.04 4C9.4 4 4 9.4 4 16.04c0 2.34.61 4.54 1.78 6.51L4 28l5.62-1.47a12.02 12.02 0 0 0 6.42 1.84h.01c6.64 0 12.04-5.4 12.04-12.04S22.68 4 16.04 4z" />
      </svg>
      <span>WhatsApp</span>
    </a>
  );
}
