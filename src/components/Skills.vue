<template>
  <div class="mt-2 flex flex-col flex-wrap">
    <h2 class="text-shadow-lg text-xl font-semibold text-black">Frontend</h2>
    <div class="divider"></div>
    <ul class="flex flex-row gap-5">
      <li class="tooltip" data-tip="VueJS">
        <font-awesome-icon class="h-10" icon="fa-brands fa-vuejs" />
      </li>
      <li class="tooltip" data-tip="HTML5">
        <font-awesome-icon class="h-10" icon="fa-brands fa-html5" />
      </li>
      <li class="tooltip" data-tip="CSS">
        <font-awesome-icon class="h-10" icon="fa-brands fa-css3" />
      </li>
      <li class="tooltip" data-tip="Tailwind">
        <svg
          viewBox="0 0 1000 1000"
          class="h-10 fill-black"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M489.5 226.499C328 231.632 280 346.999 269 409.499C283.333 386.332 328.5 335.5 395 335.5C472.5 335.5 531.5 422 567.5 449C611.237 481.803 699.123 525.115 814.5 490C906.5 462 949.167 364.332 958.5 317.999C914 378.499 846.5 414.838 763 371.999C705.5 342.499 662.5 221 489.5 226.499Z"
          />
          <path
            d="M261 500.999C99.5 506.132 51.5 621.499 40.5 683.999C54.8333 660.832 100 610 166.5 610C244 610 303 696.5 339 723.5C382.737 756.303 470.623 799.615 586 764.5C678 736.5 720.667 638.832 730 592.499C685.5 652.999 618 689.338 534.5 646.499C477 616.999 434 495.5 261 500.999Z"
          />
        </svg>
      </li>
    </ul>
    <h2 class="text-shadow-lg mt-4 text-xl font-semibold text-white">
      Backend
    </h2>
    <div class="divider"></div>
    <ul class="flex flex-row gap-5">
      <li class="tooltip" data-tip="Django">
        <img src="../assets/Django_logo.svg" class="w-18 h-8" />
      </li>
      <li class="tooltip" data-tip="PostgreSQL">
        <img src="../assets/postgres.svg" class="h-10" />
      </li>
      <li class="tooltip" data-tip="MongoDB">
        <img src="../assets/mongodb.svg" class="h-10" />
      </li>
    </ul>
    <h2 class="text-shadow-lg mt-4 text-xl font-semibold text-black">Other</h2>
    <div class="divider"></div>
    <ul class="flex flex-row gap-5">
      <li class="tooltip" data-tip="Python">
        <font-awesome-icon icon="fa-brands fa-python" class="h-10" />
      </li>
      <li class="tooltip" data-tip="Java">
        <font-awesome-icon icon="fa-brands fa-java" class="h-10" />
      </li>
      <li class="tooltip" data-tip="Javascript">
        <font-awesome-icon icon="fab fa-js" class="h-10" />
      </li>
      <li class="tooltip" data-tip="Jenkins">
        <font-awesome-icon icon="fab fa-jenkins" class="h-10" />
      </li>
      <li class="tooltip" data-tip="Docker">
        <font-awesome-icon icon="fa-brands fa-docker" class="h-10" />
      </li>
    </ul>
  </div>
</template>
