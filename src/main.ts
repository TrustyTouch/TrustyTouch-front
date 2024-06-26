import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
  theme:{
    defaultTheme:"default",
    themes: {
      default: {
        colors: {
          background: "#f2ebe5"
        }
      }
    }
  },
})

import router from "./plugins/router";
import Vue3Toastify from 'vue3-toastify'
import options from './plugins/toastify'
import VueApexCharts from 'vue3-apexcharts'

createApp(App).use(vuetify).use(router).use(Vue3Toastify, options).use(VueApexCharts).mount('#app')