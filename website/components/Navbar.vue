<template>
  <div class="fixed z-10 w-full bg-white shadow-md mx-auto">
    <nav class="flex container xl:max-w-6xl px-5 py-4 mx-auto">
      <ul class="flex flex-grow space-x-4">
        <li>
          <a href="#" class="flex items-center space-x-1 text-gray-700 md:mr-5">
            <img
              src="~/assets/logo-96x96.png?webp"
              class="w-12 filter saturate-150 transform transition duration-500 hover:scale-125 hover:rotate-360"
              height="48"
              width="48"
              alt="The Contender Tech logo, a blue whale spinning in a circle"
            />
            <span class="text-xl font-semibold">Contender</span>
          </a>
        </li>
        <li class="hidden sm:flex items-center">
          <a
            href="#"
            class="text-gray-700 font-light duration-200 hover:bg-gray-100 rounded px-3 py-1"
            >Product</a
          >
        </li>
        <li class="hidden sm:flex items-center">
          <a
            href="#"
            class="text-gray-700 font-light duration-200 hover:bg-gray-100 rounded px-3 py-1"
            >Pricing</a
          >
        </li>
        <li class="hidden sm:flex items-center">
          <a
            href="#"
            class="text-gray-700 font-light duration-200 hover:bg-gray-100 rounded px-3 py-1"
            >Contact us</a
          >
        </li>
      </ul>
      <ul class="hidden sm:flex flex-none items-center space-x-8">
        <li>
          <a
            href="#"
            class="text-lg text-white bg-primary duration-200 hover:bg-blue-400 rounded shadow-sm px-5 py-2.5"
          >
            Try for free
          </a>
        </li>
      </ul>
      <ul class="flex sm:hidden flex-none items-center space-x-8">
        <li>
          <a href="#" class="flex-none"
            ><p class="text-gray-800 hover:bg-gray-100 rounded px-2 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg></p
          ></a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
