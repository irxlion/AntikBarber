import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/config/site';
import { assets } from '@/config/assets';
import { Instagram } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LegalModal } from '@/components/ui/LegalModal';

// TikTok icon component since it might not be in the version of lucide-react used or just to be safe
const TikTok = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export const Footer = () => {
  const { t } = useLanguage();
  const [impressumOpen, setImpressumOpen] = useState(false);
  const [datenschutzOpen, setDatenschutzOpen] = useState(false);

  const navLinks = [
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.about'), href: '#signature' },
    { name: t('nav.gallery'), href: '#gallery' },
    { name: t('nav.pricing'), href: '#pricing' },
    { name: t('nav.book'), href: '#booking' },
  ];

  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer className="bg-black py-16 border-t border-white/10">
        <Container>
          <div className="flex flex-col items-center gap-10">

            {/* Logo - Centered */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="inline-block hover:opacity-80 transition-opacity"
            >
              {assets.logo ? (
                <img src={assets.logo} alt={siteConfig.name} className="h-28 w-auto brightness-0 invert" />
              ) : (
                <span className="font-display text-3xl font-bold text-white tracking-wider">
                  {siteConfig.name}
                </span>
              )}
            </a>

            {/* Navigation Menu */}
            <nav className="flex flex-wrap justify-center gap-6 md:gap-10">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm uppercase tracking-widest text-white/70 hover:text-primary transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* Social Icons */}
            <div className="flex gap-6">
              <a
                href="https://www.instagram.com/ab.friseurmannheim"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 text-white hover:bg-primary hover:text-black transition-all"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@antik.barber"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 text-white hover:bg-primary hover:text-black transition-all"
                aria-label="TikTok"
              >
                <TikTok size={20} />
              </a>
            </div>

            {/* Divider */}
            <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            {/* Legal Links & Copyright */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-8 text-xs text-white/50 uppercase tracking-wider">
                <button
                  onClick={() => setImpressumOpen(true)}
                  className="hover:text-primary transition-colors"
                >
                  {t('footer.impressum')}
                </button>
                <button
                  onClick={() => setDatenschutzOpen(true)}
                  className="hover:text-primary transition-colors"
                >
                  {t('footer.datenschutz')}
                </button>
              </div>
              <p className="text-white/40 text-xs">
                © {new Date().getFullYear()} {siteConfig.name}. {t('footer.rights')}
              </p>
            </div>

          </div>
        </Container>
      </footer>

      {/* Legal Modals */}
      <LegalModal
        isOpen={impressumOpen}
        onClose={() => setImpressumOpen(false)}
        type="impressum"
      />
      <LegalModal
        isOpen={datenschutzOpen}
        onClose={() => setDatenschutzOpen(false)}
        type="datenschutz"
      />
    </>
  );
};