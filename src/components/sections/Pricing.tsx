import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/config/translations';

type Category = 'frauen' | 'maenner';

export const Pricing = () => {
  const [activeTab, setActiveTab] = useState<Category>('frauen');
  const { language, t } = useLanguage();

  // Ensure language is valid
  const currentLang = translations[language] ? language : 'de';
  const pricingList = translations[currentLang]?.pricingList;

  // @ts-ignore
  const currentData = pricingList ? pricingList[activeTab === 'frauen' ? 'women' : 'men'] : [];

  if (!currentData) return null;

  return (
    <section id="pricing" className="py-24 bg-background">
      <Container className="max-w-4xl">
        <SectionTitle title={t('pricing.title')} subtitle={t('pricing.subtitle')} centered />

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-surface p-1 rounded-full border border-white/5">
            {[
              { id: 'frauen', label: t('pricing.women') },
              { id: 'maenner', label: t('pricing.men') }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as Category)}
                className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === tab.id
                  ? 'bg-primary text-black shadow-lg'
                  : 'text-textMuted hover:text-white'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing List */}
        <div className="bg-surface border border-white/5 p-8 md:p-12 relative overflow-hidden">
          {/* Decorative sheen */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {currentData.map((section: any, idx: number) => (
                <div key={idx}>
                  <h3 className="text-xl font-display text-primary mb-6 border-b border-white/10 pb-2 inline-block">
                    {section.title}
                  </h3>
                  <div className="space-y-6">
                    {section.items.map((item: any, itemIdx: number) => (
                      <div key={itemIdx} className="flex flex-col gap-1">
                        <div className="flex items-baseline justify-between group">
                          <h4 className="text-lg font-display text-white group-hover:text-primary transition-colors">
                            {item.name}
                          </h4>
                          <span className="hidden md:block flex-1 border-b border-dotted border-white/20 mx-4 opacity-30" />
                          <span className="text-lg font-medium text-primary whitespace-nowrap">
                            {item.price}
                          </span>
                        </div>
                        {item.includes && (
                          <p className="text-xs text-textMuted italic">
                            {Array.isArray(item.includes) ? item.includes.join(', ') : item.includes}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                  {section.notes && (
                    <div className="mt-6 p-4 border border-primary/20 bg-primary/5">
                      <h4 className="text-primary font-bold mb-2 uppercase tracking-widest text-sm">{t('pricing.studentDiscount')}</h4>
                      <ul className="list-disc list-inside text-sm text-textMuted space-y-1">
                        <li className="font-bold text-white">{t('pricing.studentNote')}</li>
                        <li>{t('pricing.studentGen')}</li>
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 text-center">
            <Button variant="outline" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
              {t('hero.book')}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
