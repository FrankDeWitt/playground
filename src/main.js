import { createApp } from 'vue'
import router from "./router/index"
import store from "./store"
import App from './App.vue'
import './index.css'

router.beforeEach((to, from, next) => {
  next();
});

router.afterEach((to, from) => {
  if (to.path !== from.path) {
    // store?.dispatch('cancelPendingRequests');
  }
});


export const app = createApp(App)
  .use(store)
  .use(router);

router.isReady().then(() => app.mount('#app'));