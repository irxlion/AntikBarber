import { useState, FormEvent } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Contact = () => {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData();
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); // Replace with your actual key
    formData.append("name", formState.name);
    formData.append("email", formState.email);
    formData.append("phone", formState.phone);
    formData.append("message", formState.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormState({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="py-24 bg-background">
      <Container>
        <SectionTitle title={t('contact.title')} subtitle={t('contact.subtitle')} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div className="bg-surface p-8 border border-white/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Hidden Access Key Input if sticking to pure HTML fallback, but here we use fetch */}
              {/* <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" /> */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm uppercase text-textMuted tracking-wider">{t('contact.form.name')}</label>
                  <input
                    required
                    type="text"
                    value={formState.name}
                    onChange={e => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-background border border-white/10 px-4 py-3 text-white focus:border-primary outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm uppercase text-textMuted tracking-wider">{t('pricing.men')} / {t('pricing.women')}</label> {/* Reusing pricing labels for simplicity or add specific translation */}
                  <input
                    required
                    type="tel"
                    value={formState.phone}
                    onChange={e => setFormState({ ...formState, phone: e.target.value })}
                    placeholder="Phone"
                    className="w-full bg-background border border-white/10 px-4 py-3 text-white focus:border-primary outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm uppercase text-textMuted tracking-wider">{t('contact.form.email')}</label>
                <input
                  required
                  type="email"
                  value={formState.email}
                  onChange={e => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-background border border-white/10 px-4 py-3 text-white focus:border-primary outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm uppercase text-textMuted tracking-wider">{t('contact.form.message')}</label>
                <textarea
                  rows={4}
                  value={formState.message}
                  onChange={e => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-background border border-white/10 px-4 py-3 text-white focus:border-primary outline-none transition-colors"
                />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
              </Button>

              {submitStatus === 'success' && (
                <p className="text-green-500 text-center">{t('contact.form.success')}</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 text-center">{t('contact.form.error')}</p>
              )}
            </form>
          </div>

          {/* Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-display text-white">{t('contact.title')} Info</h3>
              <div className="space-y-4 text-textMuted">
                <a href={`tel:${siteConfig.contact.phone} `} className="flex items-center gap-4 hover:text-primary transition-colors">
                  <Phone className="text-primary" size={20} />
                  {siteConfig.contact.phone}
                </a>
                <a href={`mailto:${siteConfig.contact.email} `} className="flex items-center gap-4 hover:text-primary transition-colors">
                  <Mail className="text-primary" size={20} />
                  {siteConfig.contact.email}
                </a>
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary shrink-0" size={20} />
                  {siteConfig.contact.address}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-display text-white">{t('contact.open')}</h3>
              <div className="space-y-2 text-textMuted">
                {/* We can translate days here if needed, or stick to config if simpler */}
                {siteConfig.openingHours.map((item, idx) => (
                  <div key={idx} className="flex justify-between border-b border-white/5 py-2">
                    <span>{item.day}</span>
                    <span>{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button variant="outline" className="w-full" onClick={() => window.open(siteConfig.contact.whatsapp, '_blank')}>
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};