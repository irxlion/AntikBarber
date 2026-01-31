import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/config/site';
import { Instagram } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

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

  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="font-display text-2xl font-bold text-white tracking-wider">
              {siteConfig.name}
            </span>
            <p className="text-textMuted text-xs mt-2">
              © {new Date().getFullYear()} {t('footer.rights')}
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/ab.friseurmannheim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.tiktok.com/@antik.barber"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
              aria-label="TikTok"
            >
              <TikTok size={20} />
            </a>
          </div>

          <div className="flex gap-6 text-xs text-textMuted uppercase tracking-wider">
            <a href="#" className="hover:text-white">{t('footer.impressum')}</a>
            <a href="#" className="hover:text-white">{t('footer.datenschutz')}</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};