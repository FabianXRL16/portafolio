import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueWriter from "vue-writer";
import App from './App.vue'

library.add(fas, fab)

createApp(App)
    .use(VueWriter)
    .component('fa', FontAwesomeIcon)
    .mount('#app')
