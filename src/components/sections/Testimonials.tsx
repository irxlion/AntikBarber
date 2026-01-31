import { useState, useEffect } from 'react';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/config/site';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % siteConfig.testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-surfaceHighlight border-y border-white/5">
      <Container className="max-w-3xl text-center">
        <Quote className="mx-auto text-primary mb-8 w-12 h-12 opacity-50" />

        <div className="relative h-48 md:h-40">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <p className="text-2xl md:text-3xl font-display text-white italic leading-relaxed mb-6">
                "{siteConfig.testimonials[currentIndex].text}"
              </p>
              <cite className="text-primary font-medium tracking-widest uppercase not-italic">
                — {siteConfig.testimonials[currentIndex].author}
              </cite>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {siteConfig.testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? "bg-primary w-8" : "bg-white/20 hover:bg-white/40"
                }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};