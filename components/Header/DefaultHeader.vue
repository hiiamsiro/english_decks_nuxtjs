<template>
  <header class="absolute inset-x-0 top-0 z-50">
    <nav
      class="flex items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <nuxt-link to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img
            class="h-8 w-auto"
            src="@/assets/images/logo_Website.png"
            alt=""
          />
        </nuxt-link>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          style="outline: none"
          @click="handleToggleMenu('open')"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <nuxt-link class="text-sm font-semibold leading-6 text-gray-900" to="/"
          >Home</nuxt-link
        >
        <nuxt-link
          class="text-sm font-semibold leading-6 text-gray-900"
          to="/decks"
          >Decks</nuxt-link
        >
        <nuxt-link
          class="text-sm font-semibold leading-6 text-gray-900"
          to="/profile"
          >Profile</nuxt-link
        >
        <nuxt-link
          class="text-sm font-semibold leading-6 text-gray-900"
          to="/settings"
          >Settings</nuxt-link
        >
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <nuxt-link
          class="text-sm font-semibold leading-6 text-gray-900"
          to="/login"
          >Log in <span aria-hidden="true">&rarr;</span></nuxt-link
        >
      </div>
    </nav>
    <!-- Mobile menu, show/hide based on menu open state. -->
    <div class="lg:hidden" role="dialog" aria-modal="true">
      <!-- Background backdrop, show/hide based on slide-over state. -->
      <div
        ref="hamburgerMenu"
        class="hamburger-menu fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" style="outline: none" @click="handleToggleMenu('close')">
            <span class="sr-only">Close menu</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <nuxt-link
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                to="/"
                >Home</nuxt-link
              >
              <nuxt-link
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                to="/decks"
                >Decks</nuxt-link
              >
              <nuxt-link
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                to="/profile"
                >Profile</nuxt-link
              >
              <nuxt-link
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                to="/settings"
                >Settings</nuxt-link
              >
            </div>
            <div class="py-6">
              <nuxt-link
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                to="/login"
                >Log in</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    handleToggleMenu(action) {
      if (action === 'open') {
        this.$refs.hamburgerMenu.style.transform = "translateY(0)"
      } else if (action === 'close') {
        this.$refs.hamburgerMenu.style.transform = "translateY(-100%)"
      }
    }
  },
}
</script>

<style lang="scss">
header {
  height: 60px;
  nav,
  ul {
    height: inherit;
  }
  ul {
    align-items: center;
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      margin: 0 1.5rem;
      a {
        color: #fff;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
        &.nuxt-link-exact-active {
          color: rgb(158, 158, 158);
        }
      }
    }
  }
}
.hamburger-menu {
  transform: translateY(-100%);
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}
</style>
