import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/config/site';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/images/work/A33FD017-16AA-45C0-95E3-0C4AC37B0572.jpeg"
          alt="A&B Premium Hair Salon"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background" />
      </motion.div>

      {/* Content */}
      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs uppercase tracking-[0.2em] text-white/80 mb-6 bg-black/20 backdrop-blur-sm">
            {t('hero.welcome')} {siteConfig.name}
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
            {t('hero.title')} <br />
            <span className="text-primary italic">{t('hero.subtitle')}</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light">
            {siteConfig.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
              {t('hero.book')}
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
              {t('hero.prices')}
            </Button>
          </div>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-[10px] uppercase tracking-widest opacity-70">{t('hero.scroll')}</span>
        <ChevronDown className="w-5 h-5 opacity-70" />
      </motion.div>
    </section>
  );
};