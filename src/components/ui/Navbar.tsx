import { useState, useEffect } from 'react';
import { siteConfig } from '@/config/site';
import { assets } from '@/config/assets';
import { Container } from './Container';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';
import { cn } from '@/lib/cn';

import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.about'), href: '#signature' },
    { name: t('nav.gallery'), href: '#gallery' },

    { name: t('nav.pricing'), href: '#pricing' },
  ];

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'de' ? 'en' : 'de');
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5",
        isScrolled ? "bg-background/95 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6"
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          {assets.logo ? (
            <img src={assets.logo} alt={siteConfig.name} className="h-14 w-auto brightness-0 invert" />
          ) : (
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold text-white tracking-wider group-hover:text-primary transition-colors">
                A&B
              </span>
              <span className="text-[0.6rem] uppercase tracking-[0.3em] text-textMuted">Premium Salon</span>
            </div>
          )}
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="text-sm uppercase tracking-widest text-white/80 hover:text-primary transition-colors"
            >
              {link.name}
            </button>
          ))}

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-sm uppercase tracking-widest text-white/80 hover:text-primary transition-colors"
          >
            <Globe className="w-4 h-4" />
            <span>{language.toUpperCase()}</span>
          </button>

          <Button variant="primary" size="sm" onClick={() => scrollTo('#booking')}>
            {t('nav.book')}
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className="text-lg font-display text-white hover:text-primary"
                >
                  {link.name}
                </button>
              ))}

              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-lg font-display text-white hover:text-primary"
              >
                <Globe className="w-5 h-5" />
                <span>Change Language ({language.toUpperCase()})</span>
              </button>

              <Button onClick={() => scrollTo('#booking')}>{t('nav.book')}</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};