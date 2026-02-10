import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface LegalModalProps {
    isOpen: boolean;
    onClose: () => void;
    type: 'impressum' | 'datenschutz';
}

export const LegalModal = ({ isOpen, onClose, type }: LegalModalProps) => {
    const impressumContent = (
        <div className="space-y-6 text-white/80">
            <h2 className="text-3xl font-display text-white mb-8">Impressum</h2>

            <section>
                <h3 className="text-lg font-semibold text-primary mb-2">Angaben gemäß § 5 TMG</h3>
                <p>
                    Antik-Barber<br />
                    {siteConfig.contact.address}
                </p>
            </section>

            <section>
                <h3 className="text-lg font-semibold text-primary mb-2">Kontakt</h3>
                <p>
                    Telefon: {siteConfig.contact.phone}<br />
                    E-Mail: {siteConfig.contact.email}
                </p>
            </section>

            <section>
                <h3 className="text-lg font-semibold text-primary mb-2">Umsatzsteuer-ID</h3>
                <p>
                    Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                    DE XXX XXX XXX (bitte eintragen)
                </p>
            </section>

            <section>
                <h3 className="text-lg font-semibold text-primary mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
                <p>
                    Antik-Barber<br />
                    {siteConfig.contact.address}
                </p>
            </section>

            <section>
                <h3 className="text-lg font-semibold text-primary mb-2">Streitschlichtung</h3>
                <p className="text-sm">
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                    <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                        https://ec.europa.eu/consumers/odr/
                    </a>
                </p>
                <p className="text-sm mt-2">
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
            </section>

            <section>
                <h3 className="text-lg font-semibold text-primary mb-2">Haftung für Inhalte</h3>
                <p className="text-sm">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                    Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen
                    zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
            </section>

            <section>
                <h3 className="text-lg font-semibold text-primary mb-2">Haftung für Links</h3>
                <p className="text-sm">
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                    Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten
                    ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
            </section>

            <section>
                <h3 className="text-lg font-semibold text-primary mb-2">Urheberrecht</h3>
                <p className="text-sm">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                    Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
                    bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
            </section>
        </div>
    );

    const datenschutzContent = (
        <div className="space-y-6 text-white/80">
            <h2 className="text-3xl font-display text-white mb-8">Datenschutzerklärung</h2>

            <section>
                <h3 className="text-lg font-semibold text-primary mb-2">1. Datenschutz auf einen Blick</h3>
                <h4 className="font-medium text-white mt-4 mb-2">Allgemeine Hinweise</h4>
                <p className="text-sm">
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert,
                    wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert
                    werden können.
                </p>
            </section>

            <section>
                <h3 className="text-lg font-semibold text-primary mb-2">2. Verantwortliche Stelle</h3>
                <p className="text-sm">
                    Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br /><br />
                    Antik-Barber<br />
                    {siteConfig.contact.address}<br />
                    Telefon: {siteConfig.contact.phone}<br />
                    E-Mail: {siteConfig.contact.email}
                </p>
            </section>

            <section>
                <h3 className="text-lg font-semibold text-primary mb-2">3. Datenerfassung auf dieser Website</h3>
                <h4 className="font-medium text-white mt-4 mb-2">Cookies</h4>
                <p className="text-sm">
                    Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten auf Ihrem
                    Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies)
                    oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
                </p>

                <h4 className="font-medium text-white mt-4 mb-2">Kontaktformular</h4>
                <p className="text-sm">
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive
                    der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen
                    bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
            </section>

            <section>
                <h3 className="text-lg font-semibold text-primary mb-2">4. Ihre Rechte</h3>
                <p className="text-sm">
                    Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten
                    personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten
                    zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung
                    jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung
                    der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                </p>
            </section>

            <section>
                <h3 className="text-lg font-semibold text-primary mb-2">5. Analyse-Tools und Werbung</h3>
                <p className="text-sm">
                    Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit
                    sogenannten Analyseprogrammen. Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden
                    Datenschutzerklärung.
                </p>
            </section>

            <section>
                <h3 className="text-lg font-semibold text-primary mb-2">6. Hosting</h3>
                <p className="text-sm">
                    Die Inhalte unserer Website werden bei einem externen Dienstleister gehostet. Personenbezogene Daten, die auf
                    dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v.a. um
                    IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe
                    und sonstige Daten, die über eine Website generiert werden, handeln.
                </p>
            </section>

            <section>
                <h3 className="text-lg font-semibold text-primary mb-2">7. SSL- bzw. TLS-Verschlüsselung</h3>
                <p className="text-sm">
                    Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel
                    Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung.
                    Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://"
                    wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
            </section>

            <section>
                <h3 className="text-lg font-semibold text-primary mb-2">8. Recht auf Beschwerde</h3>
                <p className="text-sm">
                    Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu,
                    insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des
                    mutmaßlichen Verstoßes.
                </p>
            </section>
        </div>
    );

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="fixed inset-4 md:inset-10 lg:inset-20 bg-background border border-white/10 rounded-2xl z-50 overflow-hidden shadow-2xl"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
                            aria-label="Schließen"
                        >
                            <X className="w-6 h-6 text-white" />
                        </button>

                        {/* Content */}
                        <div className="h-full overflow-y-auto p-6 md:p-10 lg:p-16">
                            <div className="max-w-3xl mx-auto">
                                {type === 'impressum' ? impressumContent : datenschutzContent}
                            </div>
                        </div>

                        {/* Gradient overlay at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none" />
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
