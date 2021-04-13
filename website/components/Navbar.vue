<template>
  <nav
    class="flex flex-row container xl:max-w-6xl absolute top-0 left-0 right-0 z-10 px-4 sm:px-6 py-4 sm:py-6 mx-auto"
  >
    <ul class="flex flex-grow items-center py-1 mx-auto">
      <li>
        <a href="#" class="flex items-center space-x-3">
          <img
            class="w-10 filter brightness-125"
            src="~/assets/logo-80x96.png?webp"
            width="40"
            height="48"
            alt="The Contender Tech logo, a blue whale spinning in a circle"
          />
          <p class="text-2xl text-gray-50 font-semibold tracking-wide">
            Contender
          </p>
        </a>
      </li>
    </ul>
    <ul class="hidden sm:flex items-center space-x-2 md:space-x-2 py-2 mx-auto">
      <li>
        <a class="flex-none" href="#">
          <p
            class="text-gray-50 font-semibold tracking-wide bg-blue-100 bg-opacity-30 hover:bg-opacity-40 rounded px-5 py-2"
          >
            Home
          </p>
        </a>
      </li>
    </ul>
    <ul class="flex sm:hidden items-center space-x-2 md:space-x-2 py-2 mx-auto">
      <li>
        <a class="flex-none" href="#">
          <p
            class="text-gray-200 font-semibold tracking-wide hover:text-gray-50 px-2 py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </p>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style></style>
