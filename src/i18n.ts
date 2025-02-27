import { createI18n } from "vue-i18n";

// Mensagens de tradução
const messages = {
  en: {
    greeting: "Hello",
    farewell: "Goodbye",
    menu: {
      home: "Home",
      about: "About",
    },
  },
  pt: {
    greeting: "Olá",
    farewell: "Adeus",
    menu: {
      home: "Início",
      about: "Sobre",
    },
  },
};

// Configuração do i18n
const i18n = createI18n({
  locale: "en", // Idioma padrão
  fallbackLocale: "en", // Idioma de fallback
  messages, // Adiciona as mensagens de tradução
});

export default i18n;
