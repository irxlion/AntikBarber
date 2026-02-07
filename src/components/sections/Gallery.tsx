import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Image } from '@/components/ui/Image';
import { assets } from '@/config/assets';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const [activeTab, setActiveTab] = useState<'women' | 'men'>('men');
  const { t } = useLanguage();

  const currentImages = assets.gallery[activeTab];

  return (
    <section id="gallery" className="py-24 bg-background">
      <Container>
        <SectionTitle title={t('gallery.title')} subtitle={t('gallery.subtitle')} centered />

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-surface p-1 rounded-full border border-white/5">
            {[
              { id: 'women', label: t('pricing.women') },
              { id: 'men', label: t('pricing.men') }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id as 'women' | 'men'); setVisibleCount(6); }}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentImages.slice(0, visibleCount).map((src, idx) => (
            <motion.div
              key={`${activeTab}-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative aspect-[3/4] group cursor-pointer overflow-hidden"
              onClick={() => setSelectedImage(src)}
            >
              <Image
                src={src}
                alt={`Gallery image ${idx + 1}`}
                className="group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm uppercase tracking-widest border border-white px-4 py-2">{t('gallery.view')}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-12">
          {visibleCount < currentImages.length && (
            <button
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors uppercase tracking-widest text-sm font-medium"
            >
              {t('gallery.more')}
            </button>
          )}

          {visibleCount > 6 && (
            <button
              onClick={() => setVisibleCount(6)}
              className="px-8 py-3 bg-transparent border border-primary text-primary hover:bg-primary/10 transition-colors uppercase tracking-widest text-sm font-medium"
            >
              {t('gallery.less')}
            </button>
          )}
        </div>
      </Container>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-8 right-8 text-white hover:text-primary">
              <X size={40} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImage} // Note: This should ideally use the parsed direct link
              className="max-h-[90vh] max-w-full object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};