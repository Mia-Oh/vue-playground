import Vue from "vue";
import VueI18n from "vue-i18n";
import en from "@/lang/i18n/en";
import ko from "../lang/i18n/ko.json";

// Vue 한테 해당 플러그인 쓴다고 알려줌
Vue.use(VueI18n);

// VueI18n 인스턴스 생성
export const i18n = new VueI18n({
  locale: "en", // 기본 설정 언어
  fallbackLocale: "ko", // 기본 설정 언어가 불가능 할 때 대체 언어
  messages: { en, ko }, // 작성해 놓은 json 파일 추가
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
