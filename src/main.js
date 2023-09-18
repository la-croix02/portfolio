import { createApp } from 'vue'
import { createPinia } from "pinia";
import { routers } from "@/router";
import './assets/style/main.scss'
import App from './App.vue'

import ProjectItem from '@/components/ProjectItem.vue'

const app = createApp(App)
const pinia = createPinia()

app.component('ProjectItem', ProjectItem)
app.use(pinia)
app.use(routers)
app.mount('#app')
