<template>
  <div class="mt-16 ml-20 flex flex-col items-center">
    <h1 class="text-shadow-lg text-5xl font-semibold" data-aos="zoom-in">
      <span
        class="underline decoration-indigo-600 decoration-solid"
        data-aos="fade-right"
      >
        Featured</span
      >
      projects
    </h1>
    <project-component class="mt-10 items-center"></project-component>
  </div>
</template>

<script>
import ProjectComponent from "../components/ProjectComponent.vue";
export default {
  component: { ProjectComponent },
};
</script>
