import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 公共 css 文件
import '@/assets/css/public.css'
import '@/assets/css/iconfont.css'
import '@/assets/css/common.css'
// 手機板自適應js
import 'lib-flexible'

// fun-lab插件
import FunTab from 'fun-tab'
import 'fun-tab/dist/index.css'

const app = createApp(App);
app.use(store).use(router).use(FunTab).mount("#app");
