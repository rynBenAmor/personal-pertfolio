import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// fab
import {
  faVuejs,
  faBootstrap,
  faJs,
  faHtml5,
  faCss3Alt,
  faPython,
  faDocker,
  faGitAlt,
  faLinux,
  faReact,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
// fas
import {
  faDatabase,
  faServer,
  faCloud,
  faCodeBranch,
  faD,
  faN,
  faEnvelope,
  faPhoneAlt,
  faMapMarkerAlt,
  faFilePdf,
  faHeartBroken,
  faArrowUpRightFromSquare,
  faLeftRight,
  faArrowRightArrowLeft,
} from '@fortawesome/free-solid-svg-icons'

// Add to the library
library.add(
  faVuejs,
  faBootstrap,
  faJs,
  faHtml5,
  faCss3Alt,
  faPython,
  faDocker,
  faGitAlt,
  faLinux,
  faReact,
  faDatabase,
  faServer,
  faCloud,
  faCodeBranch,
  faGithub,
  faLinkedin,
  faD,
  faN,
  faEnvelope,
  faPhoneAlt,
  faMapMarkerAlt,
  faFilePdf,
  faHeartBroken,
  faArrowUpRightFromSquare,
  faLeftRight,
  faArrowRightArrowLeft,
)

const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
