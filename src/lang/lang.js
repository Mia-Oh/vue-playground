import Vue from "vue";
import VueI18n from "vue-i18n";
import en from "@/lang/i18n/en";
import ko from "../lang/i18n/ko.json";

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: "en",
  fallbackLocale: "ko",
  messages: { en, ko },
});

const loadedLanguages = ["en"];

export function loadedLanguagesAsync(lang) {
  if (i18n.locale === lang) {
    return Promise.resolve(lang);
  }
  if (loadedLanguages.includes(lang)) {
    return Promise.resolve();
  }
}
