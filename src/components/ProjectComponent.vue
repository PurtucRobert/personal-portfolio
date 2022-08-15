<template>
  <div class="flex max-w-sm flex-row">
    <div class="indicator max-w-xs">
      <span class="indicator-item indicator-bottom">
        <a :href="github">
          <font-awesome-icon icon="fab fa-github" class="h-10" /> </a
      ></span>
      <div
        class="flex max-w-sm flex-col justify-around overflow-hidden rounded-xl shadow-lg"
      >
        <div class="max-w-sm px-6 py-4">
          <div class="text-shadow-lg mb-2 text-xl font-semibold">
            {{ title }}
          </div>
          <p class="text-base font-semibold text-slate-400">
            {{ description }}
          </p>
        </div>
        <div class="flex flex-row flex-wrap justify-items-start p-6">
          <span
            v-for="(technology, index) in technologies"
            :key="index"
            class="m-1 rounded-3xl bg-purple-600 px-2.5 py-0.5 text-sm font-medium text-indigo-100 dark:bg-indigo-200 dark:text-indigo-900"
            >{{ technology }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "description", "logo", "github", "technologies"],
};
</script>
