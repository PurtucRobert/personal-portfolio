<template>
  <div class="pl-18 flex flex-row flex-wrap items-center justify-around">
    <div
      class="flex min-h-screen items-center justify-center px-16"
      data-aos="zoom-out-right"
    >
      <div class="relative w-full max-w-lg">
        <div
          class="absolute top-0 left-96 h-72 w-72 animate-blob rounded-full bg-purple-300 opacity-70 mix-blend-multiply blur-xl filter"
        ></div>
        <div
          class="animation-delay-2000 absolute top-8 left-14 h-72 w-72 animate-blob rounded-full bg-yellow-300 opacity-70 mix-blend-multiply blur-xl filter"
        ></div>
        <div
          class="animation-delay-4000 absolute left-64 -bottom-8 h-72 w-72 animate-blob rounded-full bg-pink-300 opacity-70 mix-blend-multiply blur-xl filter"
        ></div>
      </div>
    </div>
    <div
      class="flex flex-col justify-around gap-5 pl-12"
      data-aos="zoom-out-right"
    >
      <div>
        <p class="text-shadow-lg text-6xl">
          Hey, I'm
          <span class="text-shadow-lg font-semibold text-indigo-600">
            Robert</span
          >
          👋
        </p>
      </div>

      <div class="max-w-lg">
        <p class="text-xl text-slate-500">
          I am a passionate software engineer based in Romania. During the last
          years I have been working on projects involing Machine Learning,
          automation and web development. Right now I am working as a web
          developer.
        </p>
      </div>
      <ul class="flex flex-row items-center gap-3">
        <li>
          <a
            class="btn btn-outline btn-primary"
            href="#about-page"
            v-smooth-scroll
            >Learn more</a
          >
        </li>

        <li>
          <a
            class="btn"
            href="/files/CV_PURTUC_ROBERT.pdf"
            download="robert_purtuc_resume.pdf"
            >Download resume</a
          >
        </li>
      </ul>
    </div>
    <lottie-player
      src="https://assets10.lottiefiles.com/packages/lf20_sk5h1kfn.json"
      background="transparent"
      speed="1"
      style="width: 500px; height: 500px"
      loop
      autoplay
    ></lottie-player>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
@layer utilities {
  @variants responsive {
    .text-shadow-lg {
      text-shadow: 3px 3px 6px rgb(0 0 0 / 26%), 0 0 5px rgb(15 3 86 / 22%);
    }
  }
}
</style>
