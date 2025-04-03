import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

i18n
    .use(HttpBackend) // tarjimalarni serverdan yuklash
    .use(initReactI18next) // React bilan bog‘lash
    .init({
        fallbackLng: "en", // tarjima topilmasa, shu tilga qaytadi
        lng: "uz", // default til (dinamik tanlash ham mumkin)

        backend: {
            // 🔥 Backend URL (dynamic by NODE_ENV)
            loadPath: "/locales/{{lng}}.json",
        },

        interpolation: {
            escapeValue: false, // React uchun escape kerak emas
        },
    });


export default i18n;
