<template>
  <div class="bg-gray-50 mx-auto overflow-x-hidden">
    <main
      class="flex flex-col sm:flex-row container xl:max-w-6xl px-5 mt-8 mx-auto"
    >
      <div class="flex flex-col sm:flex-row items-center sm:mt-8">
        <div
          id="hero-text"
          class="flex sm:w-3/4 md:w-3/5 sm:-mr-8 md:mr-0 lg:mr-8 xl:mr-24"
        >
          <div class="flex flex-col">
            <p class="text-2xl text-gray-800">Contender Tech Ltd.</p>
            <p class="text-4xl sm:text-5xl text-gray-900 font-semibold mt-5">
              Bringing AI to Supply Chain
              <span class="hidden lg:inline">and Logistics</span>
            </p>
            <p
              class="text-xl text-gray-700 font-semibold mt-10 lg:mr-20 xl:mr-24"
            >
              We’re transforming the way that retail, logistics and supply chain
              does business.
            </p>
            <div class="mt-5">
              <button
                class="text-xl text-white bg-blue-500 font-semibold rounded shadow-sm px-8 py-3"
              >
                Try for free
              </button>
            </div>
          </div>
        </div>
        <div id="hero-image" class="hidden sm:flex">
          <div class="relative">
            <img
              class="absolute max-w-none"
              src="https://svgshare.com/i/WAJ.svg"
              alt="A delivered stack of boxes"
              style="height: 60vh"
            />
          </div>
          <div id="hero-image-spacing" class="hidden sm:flex">
            <div class="max-w-none" style="height: 60vh"></div>
          </div>
        </div>
        <div class="flex sm:hidden w-full mt-8">
          <img
            src="https://svgshare.com/i/WAJ.svg"
            alt="A delivered stack of boxes"
          />
        </div>
      </div>
    </main>
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
