import { createApp } from 'vue';
import App from './App.vue'
import router from './route/index';
import '@/assets/css/index.css'
import '@/assets/css/iconfont.css'


// 2. 引入组件样式
import 'vant/lib/index.css';

createApp(App)
    .use(router)
    .mount("#app");
