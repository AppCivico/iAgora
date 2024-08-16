import { createApp } from 'vue'
import { markRaw } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import '@styles/main.scss';
import router from './router'
import * as Sentry from "@sentry/vue";
import { i18n } from "@/i18n";

const pinia = createPinia()
const app = createApp(App);

Sentry.init({
  app,
  dsn: "https://58f4516cf77c8c38e98a611a9b5eedc3@o75154.ingest.us.sentry.io/4507784128430080",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  // Tracing
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

pinia.use(({ store }) => {
  store.router = markRaw(router)
});
pinia.use(piniaPluginPersistedstate);

app.use(pinia);
app.use(i18n);
app.use(router);

app.mount('#app');

myUndefinedFunction();
