import 'element-plus/dist/index.css'

import {createApp} from "vue";
import ElementPlus from 'element-plus'
import SidePanel from "./SidePanel.vue";

createApp(SidePanel).use(ElementPlus).mount('#app')