import { createApp } from 'vue'
import App from './App.vue'

//tailwind
import './assets/css/style.css'

//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBookOpen, faUsers, faBoltLightning, faClock, faChalkboardUser, faGlobe, faStar, faArrowRight, faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faLine, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
library.add(faBookOpen, faUsers, faBoltLightning, faClock, faChalkboardUser, faGlobe, faStar, faArrowRight, faPhone, faEnvelope, faLine, faFacebook, faLocationDot, faYoutube)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
