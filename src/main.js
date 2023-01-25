import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

require('./assets/styles/main.scss')

const pinia = createPinia()

const vuetify = createVuetify({
  components,
  directives
})

createApp(App)
  .use(router)
  .use(pinia)
  .use(vuetify)
  .mount('#app')
