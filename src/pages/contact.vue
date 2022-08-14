<template>
  <div
    class="ml-16 flex min-h-screen flex-row items-center justify-around gap-5"
  >
    <lottie-player
      src="https://assets3.lottiefiles.com/packages/lf20_i7xriqc6.json"
      background="transparent"
      speed="1"
      style="width: 500px; height: 500px"
      loop
      autoplay
      class="mt-24"
    ></lottie-player>
    <div class="flex flex-col gap-5">
      <h1
        class="text-shadow-lg text-6xl font-semibold"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <span
          class="ml-16 underline decoration-indigo-600 decoration-solid"
          data-aos="fade-right"
        >
          Contact</span
        >
        me
      </h1>
      <p
        class="ml-16 max-w-2xl text-xl font-semibold text-slate-400"
        data-aos="fade-left"
        data-aos-duration="1400"
      >
        I am passionate about transforming ideeas to clean code, if this is the
        right approach to you, feel free to contact me.
      </p>
      <div data-aos="fade-up" data-aos-duration="1800" class="ml-16">
        <a class="btn btn-outline" href="mailto:purtuc.robert@gmail.com"
          ><p class="d">Mail me</p></a
        >
      </div>
    </div>
  </div>
</template>
