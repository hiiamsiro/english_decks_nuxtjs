<template>
  <div class="bg-white">
    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div
        class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        ></div>
        <img src="" alt="">
      </div>
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="text-center">
          <h1>
            <p
              class="text-4xl font-bold tracking-tight mb-0 text-gray-900 sm:text-6xl text-gradient"
              >Better way</p
            >
            <span
              class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
              >to learn and memorize words</span
            >
          </h1>
          <p class="mt-6 text-lg leading-10 text-gray-600">
            <span class="flex justify-center">
              <img src="@/assets/images/ic_checked.svg" alt="">
              <span>AI-generated words made easy</span>
            </span>
            <span class="flex justify-center">
              <img src="@/assets/images/ic_checked.svg" alt="">
              <span>Get word insights with AI Assistant</span>
            </span>
            <span class="flex justify-center">
              <img src="@/assets/images/ic_checked.svg" alt="">
              <span>Gamify learning with word games</span>
            </span>
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              class="rounded-md bg-gradient-to-r from-cyan-600 to-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >Get started</a
            >
          </div>
        </div>
      </div>
      <div
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style lang="scss">
$tw-gradient-from: #71d16c;
$tw-gradient-to: #0ea5e9;
$tw-gradient-stops: $tw-gradient-from, $tw-gradient-to;
.banner {
  height: 220px;
  margin-top: 2rem;
  .thumbnail-banner {
    background: url('~assets/images/banner.jpg') center center;
    background-size: cover;
    height: inherit;
  }
}
.text-gradient {
  background-image: linear-gradient(to right, $tw-gradient-stops);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>
