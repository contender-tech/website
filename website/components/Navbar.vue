<template>
  <nav
    class="flex flex-col sm:flex-row container lg:max-w-5xl absolute top-0 left-0 right-0 z-10 px-8 py-3 mx-auto"
  >
    <ul class="flex flex-grow items-center py-1 mx-auto">
      <li>
        <a href="#" class="flex items-center space-x-3">
          <img
            class="w-11"
            src="~/assets/logo-64px.png?webp"
            width="44"
            height="44"
            alt="The Contender Tech logo, a blue whale spinning in a circle"
          />
          <p class="text-2xl text-gray-50 font-semibold tracking-wide">
            Contender
          </p>
        </a>
      </li>
    </ul>
    <ul class="flex items-center space-x-2 md:space-x-2 py-2 mx-auto">
      <li>
        <a class="flex-none" href="#">
          <p
            class="text-gray-50 font-semibold tracking-wide bg-blue-100 bg-opacity-30 hover:bg-opacity-40 rounded px-4 py-1"
          >
            Home
          </p>
        </a>
      </li>
      <li>
        <a class="flex-none" href="#">
          <p
            class="text-gray-50 font-semibold tracking-wide bg-blue-100 bg-opacity-0 hover:bg-opacity-20 rounded px-4 py-1"
          >
            About
          </p>
        </a>
      </li>
      <li>
        <a class="flex-none" href="#">
          <p
            class="text-gray-50 font-semibold tracking-wide bg-blue-100 bg-opacity-0 hover:bg-opacity-20 rounded px-4 py-1"
          >
            Contact
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
