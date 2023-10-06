import 'element-plus/dist/index.css'

import {createApp} from 'vue'
import App from './NewTab.vue'
import {createPinia} from 'pinia'
import ElementPlus from 'element-plus'
import {router} from './route'

const store = createPinia()

createApp(App)
    .use(store)
    .use(router)
    .use(ElementPlus)
    .mount('#app')
