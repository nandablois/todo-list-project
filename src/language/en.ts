
// Mensagens de tradução
const resources = {
  en: {
    translation: {
      greeting: "Hello",
      farewell: "Goodbye",
      menu: {
        home: "Home",
        about: "About",
      },
    },
  },
  pt: {
    translation: {
      greeting: "Olá",
      farewell: "Adeus",
      menu: {
        home: "Início",
        about: "Sobre",
      },
    },
  },
};

// Inicializar o i18next
i18n.use(initReactI18next) // ou initVueI18n para Vue
  .init({
    resources,
    lng: "en", // Idioma inicial
    fallbackLng: "en", // Idioma de fallback caso a tradução não seja encontrada
    interpolation: {
      escapeValue: false, // Escapa valores por segurança
    },
  });

export default i18n;
