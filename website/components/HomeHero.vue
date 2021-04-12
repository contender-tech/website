<template>
  <div id="hero" class="hero-bg">
    <div
      id="content"
      class="flex flex-col sm:flex-row items-center container lg:max-w-5xl relative top-0 left-0 right-0 px-8 py-4 mx-auto"
    >
      <div class="flex flex-col mt-40 sm:mb-32 w-full sm:w-1/2 relative">
        <p class="text-2xl text-gray-50 font-semibold tracking-wide">
          Contender Tech Ltd.
        </p>
        <p class="text-4xl text-gray-50 font-semibold tracking-wide mt-4">
          AI-Driven Logistics and Supply Chain
        </p>
        <div class="flex-col">
          <a href="#">
            <button
              class="flex text-xl text-gray-50 font-bold tracking-wide bg-blue-500 hover:bg-blue-400 rounded shadow-sm px-7 py-3 mt-4 justify-center"
            >
              Learn more
            </button>
          </a>
        </div>
      </div>
      <div
        class="flex flex-1 sm:mt-40 mb-4 sm:mb-40 sm:absolute items-center left-64 sm:ml-8 md:ml-16 lg:ml-48"
      >
        <img
          src="~/assets/deliveries.svg"
          width="600"
          height="445"
          alt="A delivered stack of boxes"
          style="max-width: none; width: 600px"
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
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%23475c99' width='11' height='11'/%3E%3Crect fill='%23475d9a' x='10' width='11' height='11'/%3E%3Crect fill='%23475d9b' y='10' width='11' height='11'/%3E%3Crect fill='%23485e9c' x='20' width='11' height='11'/%3E%3Crect fill='%23485e9d' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%23485f9e' y='20' width='11' height='11'/%3E%3Crect fill='%2348609f' x='30' width='11' height='11'/%3E%3Crect fill='%234860a0' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%234861a1' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%234961a2' y='30' width='11' height='11'/%3E%3Crect fill='%234962a2' x='40' width='11' height='11'/%3E%3Crect fill='%234963a3' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%234963a4' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%234964a5' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%234964a6' y='40' width='11' height='11'/%3E%3Crect fill='%234a65a7' x='50' width='11' height='11'/%3E%3Crect fill='%234a65a8' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%234a66a9' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%234a67aa' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%234a67ab' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%234a68ac' y='50' width='11' height='11'/%3E%3Crect fill='%234b68ad' x='60' width='11' height='11'/%3E%3Crect fill='%234b69ae' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%234b6aaf' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%234b6ab0' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%234b6bb1' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%234b6bb2' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%234c6cb3' x='70' width='11' height='11'/%3E%3Crect fill='%234c6db4' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%234c6db5' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%234c6eb5' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%234c6eb6' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%234c6fb7' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%234d70b8' x='80' width='11' height='11'/%3E%3Crect fill='%234d70b9' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%234d71ba' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%234d71bb' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%234d72bc' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%234d73bd' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%234e73be' x='90' width='11' height='11'/%3E%3Crect fill='%234e74bf' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%234e74c0' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%234e75c1' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%234e76c2' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%234e76c3' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%234f77c4' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%234f77c5' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%234f78c6' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%234f78c7' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%234f79c8' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%234f7ac8' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%23507ac9' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%23507bca' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%23507bcb' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%23507ccc' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%23507dcd' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%23507dce' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%23517ecf' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%23517ed0' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23517fd1' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E");
  background-size: cover;
}
</style>
