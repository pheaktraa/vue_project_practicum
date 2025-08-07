import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import Router from './Router';
import piniaPersistedstate from 'pinia-plugin-persistedstate'
import 'aos/dist/aos.css';


const pinia = createPinia()
pinia.use(piniaPersistedstate)
const app = createApp(App)

app.use(Router)
app.use(pinia)
app.mount('#app');
