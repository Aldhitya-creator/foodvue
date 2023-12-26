import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/style.css'
import ToastPlugin from 'vue-toast-notification';
// Import one of the available themes
import 'vue-toast-notification/dist/theme-bootstrap.css';


createApp(App).use(router).use(router).use(router).use(ToastPlugin).mount('#app')
