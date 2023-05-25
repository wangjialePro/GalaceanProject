import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import elementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)
// noinspection TypeScriptValidateTypes
app.use(elementPlus)
app.use(createPinia())
app.use(router)
app.mount('#app')
