import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/main.css'

createApp(App)
  .use(router)
  .use(vuetify)
  .use(createPinia())
  .mount('#app')
