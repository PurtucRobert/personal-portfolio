<template>
  <!-- <img src="../assets/Wave-10s-1536px.svg" /> -->
  <div>
    <div class="mr-40 mt-16 flex flex-row flex-wrap justify-around">
      <img
        class="card mt-20 ml-12 max-h-48 rounded-full border shadow-md drop-shadow-md"
        src="../assets/profile_picture.png"
        data-aos="fade-right"
      />
      <div class="ml-52 flex flex-col" data-aos="fade-left">
        <h1 class="text-shadow-lg text-5xl font-semibold">
          <span class="underline decoration-indigo-600 decoration-solid">
            About</span
          >
          me
        </h1>
        <p class="mt-5 max-w-3xl font-semibold text-slate-400">
          I am an engineer based in Romania, my main areas of interests are web
          applications, microservices, python automation and AI solutions
          involved in eHealth and healthcare systems. I like spending my free
          time doing 🐍 coding challenges on leetcode and learning new
          technologies. I am currently working as a web developer.
        </p>
        <div class="tabs mt-2 basis-4">
          <a
            :class="getActiveTabClass('skills')"
            @click="setActiveTab('skills')"
            >Skills</a
          >
          <a
            :class="getActiveTabClass('education')"
            @click="setActiveTab('education')"
            >Education</a
          >
        </div>
        <component :is="activeTab" data-aos="fade-up"></component>
      </div>
    </div>
  </div>
</template>

<script>
import Skills from "../components/Skills.vue";
import Education from "../components/Education.vue";

export default {
  components: {
    Skills,
    Education,
  },
  data() {
    return {
      activeTab: "skills",
      tabActive: "tab tab-active tab-bordered",
      tabInactive: "tab tab-bordered",
    };
  },

  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
      console.log(tab);
    },
    getActiveTabClass(tab) {
      return this.activeTab === tab
        ? "tab tab-active tab-bordered"
        : "tab tab-bordered";
    },
  },
};
</script>
