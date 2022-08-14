import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router/auto";

import VueSmoothScroll from "v-smooth-scroll";
import TheHeader from "./components/TheHeader.vue";
import "aos/dist/aos.css";
import "./tailwind.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faTwitter,
  faFacebook,
  faStackOverflow,
  faGithub,
  faVuejs,
  faHtml5,
  faCss3,
  faLinkedinIn,
  faPython,
  faJava,
  faJenkins,
  faJs,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";

library.add([
  faTwitter,
  faFacebook,
  faStackOverflow,
  faGithub,
  faVuejs,
  faHtml5,
  faCss3,
  faLinkedinIn,
  faPython,
  faJava,
  faJs,
  faDocker,
  faJenkins,
]);
const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
});

app.component(TheHeader);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.use(VueSmoothScroll);
app.mount("#app");
