<template>
  <div id="hero" class="hero-bg overflow-hidden">
    <div
      id="content"
      class="flex flex-col sm:flex-row items-center container xl:max-w-6xl relative top-0 left-0 right-0 px-4 sm:px-6 py-8 mx-auto"
    >
      <div class="flex flex-col mt-16 sm:mt-36 sm:mb-32 relative">
        <p class="hidden sm:flex text-xl text-gray-50 tracking-wide">
          Contender Tech Ltd.
        </p>
        <p
          class="text-3xl sm:text-4xl text-gray-50 font-semibold tracking-wide mt-3 sm:w-2/3 md:w-1/2"
        >
          Bringing AI to Supply Chain
          <span class="hidden sm:inline">and Logistics</span>
        </p>
        <p
          class="text-xl text-gray-100 tracking-wide mt-5 w-full sm:w-1/2 lg:w-3/5"
        >
          We’re transforming the way that retail, logistics and supply chain
          does business.
        </p>
        <div class="flex-col">
          <a href="#">
            <button
              class="flex text-xl text-gray-50 font-bold tracking-wide bg-blue-500 hover:bg-blue-400 rounded shadow-sm px-7 py-4 mt-12 mb-8 justify-center"
            >
              Learn more
            </button>
          </a>
        </div>
      </div>
      <div
        class="hidden sm:flex flex-1 sm:mt-48 mb-4 sm:mb-40 sm:absolute items-center left-64 sm:ml-8 md:ml-16 lg:ml-48"
      >
        <img
          src="~/assets/deliveries.svg"
          width="540"
          height="400"
          alt="A delivered stack of boxes"
          style="max-width: none; width: 540px"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.hero-bg {
  background-color: #475c99;
  background-size: cover;
}
</style>
