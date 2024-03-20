import { createApp } from 'vue'
import './assets/style/reset.css'


import router from './router/index';

import App from './App.vue'
const app = createApp(App)

app.use(router)
app.mount('#app')
