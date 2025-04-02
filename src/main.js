
import App from './App.vue'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import i18n from './i18n'
import Home from '@/components/Home.vue'

import './assets/main.css'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home }
  ]
})

const app = createApp(App)

app.use(i18n)
app.use(router)
app.mount('#app')
