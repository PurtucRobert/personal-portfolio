<template>
  <div class="flex max-h-screen flex-col flex-wrap">
    <div class="flex flex-row flex-wrap">
      <p
        class="text-xl font-semibold"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        {{ period }}
      </p>
    </div>
    <h1
      class="text-shadow-lg text-xl font-semibold text-indigo-600"
      data-aos="fade-left"
      data-aos-duration="1400"
    >
      <span class="decoration-indigo-600 decoration-solid"> {{ title }}</span>
    </h1>
    <div class="mt-10 flex max-w-lg flex-col">
      <div
        v-for="description in descriptions"
        :key="description"
        class="mt-3 flex flex-row items-center"
        data-aos="fade-right"
        :data-aos-duration="this.duration"
      >
        <img src="../assets/bullet-point.svg" class="max-h-5" />
        <p class="max-w-lg text-lg font-semibold text-slate-400">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "period", "descriptions"],
  data() {
    return {
      duration: 1000,
    };
  },
};
</script>
