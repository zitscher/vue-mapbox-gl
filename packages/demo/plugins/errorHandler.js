// eslint-disable-next-line import/no-unresolved
import { defineNuxtPlugin } from '#imports';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = console.error;
  nuxtApp.vueApp.config.warnHandler = console.warn;
});
