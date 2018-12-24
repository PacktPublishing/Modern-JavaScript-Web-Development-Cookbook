import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import EN_TEXTS from "./translations.en.json";
import ES_TEXTS from "./translations.es.json";

i18n.use(LanguageDetector).init({
    resources: {
        en: { translations: EN_TEXTS },
        es: { translations: ES_TEXTS }
    },
    fallbackLng: "en",
    ns: ["translations"],
    defaultNS: "translations",
    debug: true,
    interpolation: {
        escapeValue: false,
        format: function(value, format, lang = i18n.language) {
            if (format === "AS_DATE") {
                try {
                    const dd = new Date(value);
                    return new Intl.DateTimeFormat(lang).format(
                        new Date(
                            dd.getTime() + dd.getTimezoneOffset() * 60000
                        )
                    );
                } catch (e) {
                    return "???";
                }
            } else {
                return value;
            }
        }
    }
});

const t = i18n.t.bind(i18n); // to allow using t(...) instead of i18n.t(...)

export { i18n, t };
