<template>
  <div class="mt-48 flex flex-col items-center">
    <h1
      class="text-shadow-lg text-5xl font-semibold underline decoration-indigo-600"
      data-aos="zoom-in"
    >
      Projects
    </h1>
    <div class="mt-14 flex flex-row flex-wrap justify-around gap-10">
      <project-component
        v-for="project in projects"
        :key="project"
        data-aos="fade-right"
        data-aos-duration="1200"
        :title="project.title"
        :description="project.description"
        :github="project.github"
        :logo="project.logo"
        :technologies="project.technologies"
      ></project-component>
    </div>
  </div>
</template>

<script>
import ProjectComponent from "../components/ProjectComponent.vue";
export default {
  component: { ProjectComponent },

  data() {
    return {
      projects: {
        "Humans+": {
          title: "Humans+",
          description:
            "The purpose of this project was creating a low budget, 3D Printed, prosthetic hand which is controled by 2 EMG sensors placed on the forearm using a neural network for pattern recognition.",
          technologies: [
            "Keras",
            "Android",
            "MicroControllers",
            "Serial Comunnication",
            "Pandas",
            "Numpy",
          ],
        },
        cinemy: {
          title: "Cinemy",
          description:
            "Cinemy is a modern ticket booking appplication for movies. Cinemy provides a system for managing multiple cinemas, notification system, two step registration and Public API for both customers and employees. ",
          github: "https://github.com/PurtucRobert/cinemy",
          logo: "https://test.com",
          technologies: ["Django", "Django Rest Framework", "Bootstrap"],
        },
        buggy: {
          title: "Buggy",
          description:
            "Buggy represents a modern, minimalist, open-source kanban application designed to help small agile teams to track issues.",
          github: "https://github.com/PurtucRobert/buggy-backend",
          technologies: [
            "Tailwind",
            "Django",
            "VueJS",
            "Django Rest Framework",
          ],
        },
        blog: {
          title: "Blog",
          description:
            "Blog is a 'Medium' contender written from scratch using Django and Bootstrap. Whilist being minimalistic, it's packing features like: subscription, category based posting, newsletter, secure authentication and registration as well as rich text editing",
          technologies: ["Bootstrap", "Django"],
        },
        portfolio: {
          title: "Personal portfolio",
          github: "https://github.com/PurtucRobert/personal-portfolio",
          description: "This is the portfolio that you are currently browsing",
          technologies: ["VueJS", "Vite", "Tailwind"],
        },
      },
    };
  },
};
</script>
