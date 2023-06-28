<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <a
        href="#"
        class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img
          class="w-8 h-8 mr-2"
          src="@/assets/images/logo_website.png"
          alt="logo"
        />
        Siro
      </a>
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Sign in to your account
          </h1>
          <form class="space-y-4 md:space-y-6" @submit.prevent="onSubmit">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Your email</label
              >
              <input
                id="email"
                v-model="email"
                type="email"
                name="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@gmail.com"
              />
              <p class="m-0 text-red-600">{{ emailErr }}</p>
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Password</label
              >
              <input
                id="password"
                v-model="password"
                type="password"
                name="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <p class="m-0 text-red-600">{{ passwordErr }}</p>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="remember" class="text-gray-500 dark:text-gray-300"
                    >Remember me</label
                  >
                </div>
              </div>
              <a
                href="#"
                class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >Forgot password?</a
              >
            </div>
            <button
              type="submit"
              class="w-full text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Sign in
            </button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Don't have an account yet?
              <nuxt-link
                to="/register"
                tag="a"
                class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >Sign up</nuxt-link
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'auth',
  data() {
    return {
      email: '',
      isLogin: true,
      password: '',
      emailErr: '',
      passwordErr: '',
    }
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch('authenticateUser', {
          email: this.email,
          password: this.password,
          isLogin: this.isLogin,
        })
        .then((result) => {
          if (result.success) this.$router.push('/decks')
        })
        .catch((error) => {
          switch (error?.data?.error?.message) {
            case 'INVALID_EMAIL':
              this.emailErr = 'Please enter a valid email'
              break
            case 'MISSING_PASSWORD':
              this.passwordErr = 'Please enter your password'
              break
            case 'INVALID_PASSWORD':
              this.passwordErr = 'Wrong password, please try again!'
              break
            default:
              break
          }
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  justify-content: center;
  padding-top: 100px;
  .card-form {
    width: 500px;
  }
  .btn-submit {
    width: 100%;
  }
}
</style>
