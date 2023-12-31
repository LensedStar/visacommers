import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from "i18next-http-backend";
import en from './locales/en.json';
import ru from './locales/ru.json';
import ua from './locales/ua.json';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
              translation: en,
                },
            ru: {
              translation: ru,
            },
            ua: {
               translation: ua,
            }
    }});
    export default i18n;