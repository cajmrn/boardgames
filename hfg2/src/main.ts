import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createAuth0 } from '@auth0/auth0-vue'

import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'


/*import 'bootstrap/dist/css/bootstrap.min.css'*/
import './assets/main.css'




createApp(App)
  .use(router)
  .use(vuetify)
  .use(createPinia())
  .use(
    createAuth0({
      domain: "dev-edro4ye5wuegr8ej.us.auth0.com",
      client_id: "oCb8qFAzKVmQEShmzgwXwVydenD2OUa1",
      redirect_uri: window.location.origin
    })
  )
  .mount('#app')
