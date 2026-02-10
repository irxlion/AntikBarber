
export type Language = 'de' | 'en';

export const translations = {
    de: {
        nav: {
            services: 'Dienstleistungen',
            about: 'Über uns',
            gallery: 'Galerie',
            team: 'Team',
            pricing: 'Preise',
            book: 'Termin buchen',
        },
        hero: {
            welcome: 'Willkommen bei',
            title: 'Moderne Schnitte.',
            subtitle: 'Zeitloser Stil.',
            book: 'Termin buchen',
            prices: 'Preise ansehen',
            scroll: 'Scrollen',
        },
        services: {
            title: 'Unsere Dienstleistungen',
            subtitle: 'Maßgeschneiderte Erlebnisse',
            items: {
                cuts: { title: 'Präzisionsschnitte', desc: 'Experten-Styling für Männer & Frauen, abgestimmt auf Ihre Gesichtsform.', price: 'ab €35' },
                color: { title: 'Kreative Farbe', desc: 'Balayage, Ombre und Farbkorrekturen mit Premium-Produkten.', price: 'ab €65' },
                bridal: { title: 'Braut & Events', desc: 'Elegante Hochsteckfrisuren und Styling für Ihren besonderen Tag.', price: 'auf Anfrage' },
                care: { title: 'Haarpflege', desc: 'Tiefenwirksame Pflegebehandlungen für gesundes, glänzendes Haar.', price: 'ab €25' },
                barber: { title: 'Barbering', desc: 'Traditionelle Nassrasur und Bartpflege mit heißem Handtuch.', price: 'ab €25' },
                styling: { title: 'Styling & Finish', desc: 'Perfektes Föhnen und Styling für jeden Anlass.', price: 'ab €30' },
            }
        },
        stats: {
            experience: 'Jahre Erfahrung',
            clients: 'Zufriedene Kunden',
            awards: 'Gewonnene Preise',
        },
        signature: {
            title: 'Unsere Signatur',
            subtitle: 'Exzellenz im Detail',
            text: 'Bei Antik-Barber glauben wir, dass Ihr Haar Ihr wichtigstes Accessoire ist. Unsere Meisterstylisten kombinieren traditionelle Techniken mit modernen Trends, um einen Look zu kreieren, der einzigartig für Sie ist.',
            item1: 'Premium-Produkte (Kerastase, Olaplex)',
            item2: 'Persönliche Beratung',
            item3: 'Entspannende Kopfmassage inklusive',
        },
        gallery: {
            title: 'Unsere Arbeit',
            subtitle: 'Inspiration & Stil',
            view: 'Ansehen',
            more: 'Mehr ansehen',
            less: 'Weniger ansehen',
        },

        pricing: {
            title: 'Preise',
            subtitle: 'Transparente Kosten',
            women: 'Frauen',
            men: 'Männer',
            from: 'ab',
            studentDiscount: 'Studenten',
            studentNote: '20% RABATT JEDEN MONTAG - NUR FÜR STUDENTEN',
            studentGen: '10% Rabatt auf Normalpreise an anderen Tagen',
        },
        pricingList: {
            women: [
                {
                    title: "Haarschnitt",
                    items: [
                        { name: "Waschen, Schneiden", price: "29 €" },
                        { name: "Waschen, Schneiden, Föhnen | kurz", price: "44 €" },
                        { name: "Waschen, Schneiden, Föhnen | lang", price: "54 €" },
                        { name: "Pony schneiden", price: "5 €" },
                        { name: "Föhnen, Styling | kurz", price: "20 €" },
                        { name: "Föhnen, Styling | lang", price: "30 €" },
                    ]
                },
                {
                    title: "Farbe",
                    items: [
                        { name: "Komplett Farbe", price: "ab 45 €" },
                        { name: "Ansatz Farbe", price: "35 €" },
                    ]
                },
                {
                    title: "Highlights",
                    items: [
                        { name: "Highlights & Farbe", price: "ab 75 €" },
                        { name: "Ansatz Highlights komplett", price: "ab 70 €" },
                        { name: "Highlight komplett", price: "ab 95 €" },
                        { name: "Blondierung – Ansatz", price: "ab 45 €" },
                        { name: "Glossing", price: "20 €" },
                        { name: "Intensivkur", price: "9 €" },
                    ]
                },
                {
                    title: "Pakete",
                    items: [
                        { name: "Premium Colour", price: "ab 105 €", includes: "Waschen, Schneiden, Föhnen, Farbe komplett, Intensivkur" },
                        { name: "Premium Highlights", price: "ab 150 €", includes: "Waschen, Schneiden, Föhnen, Highlights komplett, Glossing, Intensivkur" },
                        { name: "Balayage/Ombre/Babylights | kurz", price: "ab 160 €", includes: "Waschen, Schneiden, Föhnen, Glossing, Intensivkur" },
                        { name: "Balayage/Ombre/Babylights | lang", price: "ab 180 €", includes: "Waschen, Schneiden, Föhnen, Glossing, Intensivkur" },
                    ]
                },
                {
                    title: "Haarverlängerung & Spezial",
                    items: [
                        { name: "Bondings je Strähne (50 cm)", price: "5 €" },
                        { name: "Bondings je Strähne (60 cm)", price: "6 €" },
                        { name: "Bondings entfernen je Strähne", price: "1 €" },
                        { name: "Keratin Glättung", price: "ab 150 €" },
                        { name: "Haarbotox", price: "100 €" },
                    ]
                },
                {
                    title: "Braut & Make-Up",
                    items: [
                        { name: "Brautfriseur & Make-up", price: "300 €" },
                        { name: "Haare hochstecken", price: "ab 60 €" },
                        { name: "Tages Make-Up", price: "40 €" },
                        { name: "Abend Make-Up", price: "60 €" },
                        { name: "Wimpern extra", price: "10 €" },
                    ]
                },
                {
                    title: "Kosmetik",
                    items: [
                        { name: "Augenbrauen zupfen", price: "8 €" },
                        { name: "Augenbrauen zupfen mit Farbe", price: "13 €" },
                        { name: "Gesicht komplett mit WAX", price: "30 €" },
                        { name: "Oberlippen", price: "5 €" },
                    ]
                },
                {
                    title: "Kinder",
                    items: [
                        { name: "Kinder bis 14 Jahre", price: "25 €" },
                        { name: "ab 14 Jahren", price: "35 €" },
                    ]
                }
            ],
            men: [
                {
                    title: "Haare & Bart",
                    items: [
                        { name: "Haare waschen", price: "5 €" },
                        { name: "Haare waschen & föhnen", price: "10 €" },
                        { name: "Bart", price: "15 €" },
                        { name: "Haare schneiden", price: "25 €" },
                        { name: "Gesichtshaar Entfernung mit Wax (Nase, Ohren)", price: "10 €" },
                        { name: "Gesichtspflege", price: "ab 10 €" },
                        { name: "Augenbrauen entfernen", price: "8 €" },
                        { name: "Kinder Haarschnitt (bis 12 Jahre)", price: "15 €" },
                        { name: "Kinder Haarschnitt (ab 12 bis 15 Jahre)", price: "20 €" },
                        { name: "Haare färben", price: "ab 20 €" },
                        { name: "Bart färben", price: "ab 15 €" },
                    ]
                },
                {
                    title: "Pakete (Sonderpreise)",
                    items: [
                        { name: "Paket 1", price: "44 €", includes: "Augenbrauen entfernen, Haare waschen, Föhnen, Haarschnitt, Bart" },
                        { name: "Paket 2", price: "ab 35 €", includes: "Haare färben, Bart färben" },
                        { name: "Paket 3", price: "35 €", includes: "Haare schneiden, Bart schneiden" },
                    ]
                }
            ]
        },
        contact: {
            title: 'Kontakt',
            subtitle: 'Finden Sie uns',
            open: 'Öffnungszeiten',
            mon_fri: 'Mo - Fr',
            sat: 'Sa',
            sun: 'So',
            closed: 'Geschlossen',
            form: {
                name: 'Ihr Name',
                email: 'Ihre Email',
                message: 'Ihre Nachricht',
                send: 'Nachricht senden',
                sending: 'Senden...',
                success: 'Nachricht gesendet!',
                error: 'Fehler beim Senden.',
            },
        },
        footer: {
            rights: 'Alle Rechte vorbehalten.',
            impressum: 'Impressum',
            datenschutz: 'Datenschutz',
        },
    },
    en: {
        nav: {
            services: 'Services',
            about: 'About',
            gallery: 'Gallery',
            team: 'Team',
            pricing: 'Pricing',
            book: 'Book Now',
        },
        hero: {
            welcome: 'Welcome to',
            title: 'Modern Cuts.',
            subtitle: 'Timeless Style.',
            book: 'Book Appointment',
            prices: 'View Prices',
            scroll: 'Scroll',
        },
        services: {
            title: 'Our Services',
            subtitle: 'Tailored Experiences',
            items: {
                cuts: { title: 'Precision Cuts', desc: 'Expert styling for men & women tailored to your face shape.', price: 'from €35' },
                color: { title: 'Creative Color', desc: 'Balayage, ombre, and full corrections using premium products.', price: 'from €65' },
                bridal: { title: 'Bridal & Events', desc: 'Elegant updos and styling for your special day.', price: 'on request' },
                care: { title: 'Hair Care', desc: 'Deep conditioning treatments for healthy, shiny hair.', price: 'from €25' },
                barber: { title: 'Barbering', desc: 'Traditional hot towel shaves and beard grooming.', price: 'from €25' },
                styling: { title: 'Styling & Finish', desc: 'Perfect blow-dry and styling for every occasion.', price: 'from €30' },
            }
        },
        stats: {
            experience: 'Years Experience',
            clients: 'Happy Clients',
            awards: 'Awards Won',
        },
        signature: {
            title: 'Our Signature',
            subtitle: 'Excellence in Detail',
            text: 'At Antik-Barber, we believe your hair is your most important accessory. Our master stylists combine traditional techniques with modern trends to create a look that is uniquely yours.',
            item1: 'Premium Products (Kerastase, Olaplex)',
            item2: 'Personalized Consultation',
            item3: 'Relaxing Scalp Massage included',
        },
        gallery: {
            title: 'Our Work',
            subtitle: 'Inspiration & Style',
            view: 'View',
            more: 'View More',
            less: 'View Less',
        },

        pricing: {
            title: 'Pricing',
            subtitle: 'Transparent Costs',
            women: 'Women',
            men: 'Men',
            from: 'from',
            studentDiscount: 'Students',
            studentNote: '20% DISCOUNT EVERY MONDAY - STUDENTS ONLY',
            studentGen: '10% discount on regular prices on other days',
        },
        pricingList: {
            women: [
                {
                    title: "Haircuts",
                    items: [
                        { name: "Wash, Cut", price: "29 €" },
                        { name: "Wash, Cut, Blow-dry | short", price: "44 €" },
                        { name: "Wash, Cut, Blow-dry | long", price: "54 €" },
                        { name: "Fringe Cut", price: "5 €" },
                        { name: "Blow-dry, Styling | short", price: "20 €" },
                        { name: "Blow-dry, Styling | long", price: "30 €" },
                    ]
                },
                {
                    title: "Color",
                    items: [
                        { name: "Full Color", price: "from 45 €" },
                        { name: "Roots Color", price: "35 €" },
                    ]
                },
                {
                    title: "Highlights",
                    items: [
                        { name: "Highlights & Color", price: "from 75 €" },
                        { name: "Roots Highlights Complete", price: "from 70 €" },
                        { name: "Highlights Complete", price: "from 95 €" },
                        { name: "Bleaching – Roots", price: "from 45 €" },
                        { name: "Glossing", price: "20 €" },
                        { name: "Intensive Treatment", price: "9 €" },
                    ]
                },
                {
                    title: "Packages",
                    items: [
                        { name: "Premium Colour", price: "from 105 €", includes: "Wash, Cut, Blow-dry, Full Color, Treatment" },
                        { name: "Premium Highlights", price: "from 150 €", includes: "Wash, Cut, Blow-dry, Full Highlights, Glossing, Treatment" },
                        { name: "Balayage/Ombre/Babylights | short", price: "from 160 €", includes: "Wash, Cut, Blow-dry, Glossing, Treatment" },
                        { name: "Balayage/Ombre/Babylights | long", price: "from 180 €", includes: "Wash, Cut, Blow-dry, Glossing, Treatment" },
                    ]
                },
                {
                    title: "Extensions & Specials",
                    items: [
                        { name: "Bondings per strand (50 cm)", price: "5 €" },
                        { name: "Bondings per strand (60 cm)", price: "6 €" },
                        { name: "Remove Bondings per strand", price: "1 €" },
                        { name: "Keratin Straightening", price: "from 150 €" },
                        { name: "Hair Botox", price: "100 €" },
                    ]
                },
                {
                    title: "Bridal & Make-Up",
                    items: [
                        { name: "Bridal Hair & Make-up", price: "300 €" },
                        { name: "Updo", price: "from 60 €" },
                        { name: "Day Make-Up", price: "40 €" },
                        { name: "Evening Make-Up", price: "60 €" },
                        { name: "Eyelashes extra", price: "10 €" },
                    ]
                },
                {
                    title: "Cosmetics",
                    items: [
                        { name: "Eyebrow Plucking", price: "8 €" },
                        { name: "Eyebrow Plucking with tint", price: "13 €" },
                        { name: "Full Face Wax", price: "30 €" },
                        { name: "Upper Lip", price: "5 €" },
                    ]
                },
                {
                    title: "Kids",
                    items: [
                        { name: "Kids up to 14 years", price: "25 €" },
                        { name: "From 14 years", price: "35 €" },
                    ]
                }
            ],
            men: [
                {
                    title: "Hair & Beard",
                    items: [
                        { name: "Wash Hair", price: "5 €" },
                        { name: "Wash & Blow-dry", price: "10 €" },
                        { name: "Beard", price: "15 €" },
                        { name: "Haircut", price: "25 €" },
                        { name: "Face Hair Removal Wax (Nose, Ears)", price: "10 €" },
                        { name: "Face Care", price: "from 10 €" },
                        { name: "Eyebrow Removal", price: "8 €" },
                        { name: "Kids Haircut (up to 12 years)", price: "15 €" },
                        { name: "Kids Haircut (12 to 15 years)", price: "20 €" },
                        { name: "Hair Color", price: "from 20 €" },
                        { name: "Beard Color", price: "from 15 €" },
                    ]
                },
                {
                    title: "Packages (Specials)",
                    items: [
                        { name: "Package 1", price: "44 €", includes: "Eyebrows, Wash, Blow-dry, Haircut, Beard" },
                        { name: "Package 2", price: "from 35 €", includes: "Hair Color, Beard Color" },
                        { name: "Package 3", price: "35 €", includes: "Haircut, Beard Trim" },
                    ]
                }
            ]
        },
        contact: {
            title: 'Contact',
            subtitle: 'Find Us',
            open: 'Opening Hours',
            mon_fri: 'Mon - Fri',
            sat: 'Sat',
            sun: 'Sun',
            closed: 'Closed',
            form: {
                name: 'Your Name',
                email: 'Your Email',
                message: 'Your Message',
                send: 'Send Message',
                sending: 'Sending...',
                success: 'Message Sent!',
                error: 'Error Sending.',
            },
        },
        footer: {
            rights: 'All rights reserved.',
            impressum: 'Imprint',
            datenschutz: 'Privacy Policy',
        },
    },
};
