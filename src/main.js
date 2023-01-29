import { createApp } from 'vue';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/display.css';

import router from './router';
import App from './App.vue';
import About from './views/About.vue';

const app = createApp(App);

app.use(router);
app.use(ElementPlus);
app.component('about', About);

app.mount('#app');
