
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { translations, Language } from '@/config/translations';

type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (path: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('de'); // Default to German

    useEffect(() => {
        // Optional: Persist to local storage
        const storedLang = localStorage.getItem('language') as string;
        if (storedLang === 'de' || storedLang === 'en') {
            setLanguage(storedLang as Language);
        }
    }, []);

    const changeLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem('language', lang);
    };

    const t = (path: string) => {
        const keys = path.split('.');
        let value: any = translations[language];
        for (const key of keys) {
            if (value && value[key]) {
                value = value[key];
            } else {
                return path; // Fallback to key if not found
            }
        }
        return value as string;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
