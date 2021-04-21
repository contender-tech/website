<template>
  <div class="bg-gray-50 mx-auto overflow-x-hidden">
    <div
      class="flex flex-col sm:flex-row container xl:max-w-6xl px-5 mt-5 mx-auto"
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
            <p class="text-xl text-gray-700 mt-8 lg:mr-20 xl:mr-24">
              We’re transforming the way that retail, logistics and supply chain
              does business.
            </p>
            <div class="mt-8">
              <a
                href="#"
                class="text-xl text-white bg-primary duration-200 hover:bg-blue-400 rounded shadow-sm px-8 py-3"
              >
                Try for free
              </a>
            </div>
          </div>
        </div>
        <div id="hero-image" class="hidden sm:flex">
          <div class="relative">
            <img
              class="absolute max-w-none"
              src="~/assets/storage-blue.svg"
              width="671"
              height="766"
              alt="An isometric drawing of a server room"
              style="height: 60vh"
            />
          </div>
          <div id="hero-image-spacing" class="hidden sm:flex">
            <div class="max-w-none" style="height: 60vh"></div>
          </div>
        </div>
        <div class="flex sm:hidden w-full mt-8">
          <img
            src="~/assets/storage-blue.svg"
            width="335"
            height="382"
            alt="An isometric drawing of a server room"
            class="mx-auto"
          />
        </div>
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
