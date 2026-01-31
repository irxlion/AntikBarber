import { Container } from '@/components/ui/Container';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Image } from '@/components/ui/Image';

export const Signature = () => {
  const { t } = useLanguage();

  return (
    <section id="signature" className="py-24 bg-surface relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-display text-lg mb-2 block uppercase tracking-widest">Our Philosophy</span>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-8 leading-tight">
              {t('signature.title')}
            </h2>
            <p className="text-textMuted leading-relaxed mb-8 text-lg">
              {t('signature.text')}
            </p>
            <ul className="space-y-4 text-white/90">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                {t('signature.item1')}
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                {t('signature.item2')}
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                {t('signature.item3')}
              </li>
            </ul>

            <div className="mt-12 pt-8 border-t border-white/10 flex gap-12">
              {[
                { value: "10+", label: t('stats.experience') },
                { value: "2k+", label: t('stats.clients') },
                { value: "15+", label: t('stats.awards') }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="font-display text-3xl text-white font-bold">{stat.value}</div>
                  <div className="text-xs uppercase tracking-wider text-primary mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right side Image instead of just stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative rounded-lg overflow-hidden border border-white/10">
              <Image
                src="/images/work/work-2.jpg"
                alt="Signature Style"
                className="hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-display text-2xl text-white italic">"Beauty is in the details."</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};