import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import '@styles/main.scss';
import router from './router'

import ptBR from '@/locales/pt-BR.json';
import en from '@/locales/en.json';

const i18n = createI18n({
  locale: "ptBR",
  fallbackLocale: "en",
  messages: { ptBR, en },
});

const app = createApp(App);

app.use(i18n)
app.use(router);
app.mount('#app');
