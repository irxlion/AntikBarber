import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/motion';
import { Scissors, Palette, Sparkles, User, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';


export const Services = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Scissors, title: t('services.items.cuts.title'), desc: t('services.items.cuts.desc'), price: t('services.items.cuts.price') },
    { icon: Palette, title: t('services.items.color.title'), desc: t('services.items.color.desc'), price: t('services.items.color.price') },
    { icon: Sparkles, title: t('services.items.bridal.title'), desc: t('services.items.bridal.desc'), price: t('services.items.bridal.price') },
    { icon: ShieldCheck, title: t('services.items.care.title'), desc: t('services.items.care.desc'), price: t('services.items.care.price') },
    { icon: User, title: t('services.items.barber.title'), desc: t('services.items.barber.desc'), price: t('services.items.barber.price') },
    { icon: User, title: t('services.items.styling.title'), desc: t('services.items.styling.desc'), price: t('services.items.styling.price') },
  ];

  return (
    <section id="services" className="py-24 bg-background relative">
      <Container>
        <SectionTitle title={t('services.title')} subtitle={t('services.subtitle')} />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="group p-8 bg-surface border border-white/5 hover:border-primary/50 transition-colors duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <service.icon size={100} />
              </div>

              <div className="w-12 h-12 rounded-full bg-surfaceHighlight flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                <service.icon size={24} />
              </div>

              <h3 className="text-xl font-display text-white mb-3">{service.title}</h3>
              <p className="text-textMuted mb-6 text-sm leading-relaxed">{service.desc}</p>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-primary font-medium">{service.price}</span>
                <span className="w-8 h-[1px] bg-white/20 group-hover:w-16 group-hover:bg-primary transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};