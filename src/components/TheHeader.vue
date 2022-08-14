<template>
  <div id="scroll-progress"></div>
  <nav class="flex items-center justify-end py-8">
    <ul class="flex items-center justify-around gap-16 pr-20">
      <li data-aos="fade-down">
        <a
          class="font-bold text-purple-800 hover:text-purple-500"
          href="#hello-page"
          v-smooth-scroll
          >Home</a
        >
      </li>
      <li data-aos="fade-down" data-aos-duration="1200">
        <a
          class="font-bold text-purple-800 hover:text-purple-500"
          href="#about-page"
          v-smooth-scroll
          >About</a
        >
      </li>
      <li data-aos="fade-down" data-aos-duration="1400">
        <a
          class="font-bold text-purple-800 hover:text-purple-500"
          href="#projects-page"
          v-smooth-scroll
          >Projects</a
        >
      </li>
      <li data-aos="fade-down" data-aos-duration="1600">
        <a
          class="font-bold text-purple-800 hover:text-purple-500"
          href="#experience-page"
          v-smooth-scroll
          >Experience</a
        >
      </li>
      <div data-aos="fade-down" data-aos-duration="1800">
        <a class="btn btn-outline" href="#contact-page" v-smooth-scroll
          ><p>Get in touch</p></a
        >
      </div>
    </ul>
  </nav>
</template>

<script>
export default {
  mounted() {
    const scrollProgress = document.getElementById("scroll-progress");
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    window.addEventListener("scroll", () => {
      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
    });
  },
};
</script>

<style>
/* body {
  min-height: 200vh;
} */

#scroll-progress {
  position: fixed;
  top: 0;
  width: 0%;
  height: 4px;
  background: rgb(138, 46, 214);
  z-index: 10000;
}
</style>
