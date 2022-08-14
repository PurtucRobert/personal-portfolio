<template>
  <div class="mt-16 flex flex-col items-center justify-center">
    <h1 class="text-shadow-lg text-5xl font-semibold" data-aos="fade-left">
      <span
        class="underline decoration-indigo-600 decoration-solid"
        data-aos="fade-right"
      >
        Experi</span
      >ence
    </h1>
    <div class="mt-10 flex flex-row gap-36">
      <div class="flex flex-col justify-around">
        <experience-button
          text="3PillarGlobal"
          @click="setActiveTab('3pg-junior')"
          data-aos="fade-right"
          data-aos-duration="1000"
        ></experience-button>
        <experience-button
          text="3PillarGlobal"
          @click="setActiveTab('3pg-middle')"
          data-aos="fade-right"
          data-aos-duration="1200"
        ></experience-button>
        <experience-button
          text="Pentalog"
          @click="setActiveTab('pentalog')"
          data-aos="fade-right"
          data-aos-duration="1400"
        ></experience-button>
      </div>
      <experience-component v-bind="selectedCompany"></experience-component>
    </div>
  </div>
</template>

<script>
import ExperienceComponent from "../components/ExperienceComponent.vue";
import ExperienceButton from "../components/ExperienceButton.vue";

export default {
  components: { ExperienceComponent, ExperienceButton },
  data() {
    return {
      selectedTab: "3pg-junior",
      companies: {
        "3pg-junior": {
          title: "Junior Software Engineer",
          period: "2020-2021",
          descriptions: [
            "implementing new small unit testing scenarios using pyATS",
            "Fixing bugs and doing enhancements to the existing code",
            "Creating new Groovy based Jenkins pipelines for automation testing",
            "Creating new setups for Jenkins pipelines",
            "Manual CISCO devices configuration",
            "Baselines for CISCO Devices",
            "Building Testbeds for automation",
            "Mastering the Perforce Helix versioning system",
          ],
        },
        "3pg-middle": {
          title: "Middle Software Engineer",
          period: "2021-2022",
          descriptions: [
            "Being part of Community of Practice as a facilitator focused on internal product trainings",
            "Discussing the requirements with the stakeholder",
            "Being a Mentor for 14 weeks as part of an internal program that is focused on training university students on following subjects: Python, Scripting, Linux",
            "Implementing an API from scratch",
            "Implementing new complex features into the existing framework and adding support for a new Cloud platform into the framework",
            "Integrating a Cloud platform into the existing testing scenarios and building the automation pipelines",
            "Holding presentations for multiple teams on the newly added features of the framework.",
          ],
          logo: "src/assets/3pg-logo.png",
        },
        pentalog: {
          title: "Web Developer",
          period: "2022-Present",
          descriptions: [
            "Developed test driven backend components using Django as framework for skillvalue.com",
            "Maintained the existing code base",
            "Improved the application and data security and protection by working closely with the SecOps on security related issues and managed to reach the ASVS L1 security standard.",
          ],
          logo: "/src/assets/pentalog-logo.png",
        },
      },
    };
  },
  computed: {
    selectedCompany() {
      return this.companies[this.selectedTab];
    },
  },
  methods: {
    setActiveTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>
