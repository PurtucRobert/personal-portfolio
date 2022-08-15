<script setup>
import TheHeader from "./components/TheHeader.vue";
import about from "./pages/about.vue";
import HelloPage from "./pages/hello-page.vue";
import AOS from "aos";
import TheFooter from "./components/TheFooter.vue";
import contact from "./pages/contact.vue";
import experience from "./pages/experience.vue";
import projects from "./pages/projects.vue";
import Projects from "./pages/projects.vue";

AOS.init({
  duration: 1000,
  mirror: true,
});
</script>

<template>
  <div>
    <the-header></the-header>
    <main>
      <hello-page id="hello-page"></hello-page>
      <about id="about-page"></about>
      <projects id="projects-page"></projects>
      <experience id="experience-page"></experience>
      <contact id="contact-page"></contact>
    </main>
    <the-footer></the-footer>
  </div>
</template>
