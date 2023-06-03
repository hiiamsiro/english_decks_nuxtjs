<template>
  <section class="page">
    <div class="card card-form">
      <div class="card_body">
        <h3 class="text_center">Login</h3>
        <form @submit.prevent="onSubmit">
          <div class="form_group" style="margin-bottom: 0 !important">
            <label for="email"></label>
            <input
              id="email"
              v-model="email"
              class="form_control"
              type="text"
              placeholder="example@gmail.com"
            />
            <p class="m-0 text-red-600">{{ emailErr }}</p>
          </div>
          <div class="form_group">
            <label for="password"></label>
            <input
              id="password"
              v-model="password"
              class="form_control"
              type="password"
              placeholder="Please enter password"
            />
            <p class="m-0 text-red-600">{{ passwordErr }}</p>
          </div>
          <div class="form_group">
            <button type="submit" class="btn btn_success btn-submit">
              Login
            </button>
          </div>
        </form>
        <div class="other texT_center">
          <span
            >Have not your account?
            <nuxt-link to="/register" tag="a">Register here</nuxt-link></span
          >
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
              this.emailErr = 'Please enter a valid email';
              break;
            case 'MISSING_PASSWORD':
              this.passwordErr = 'Please enter your password';
              break;
            case 'INVALID_PASSWORD':
              this.passwordErr = 'Wrong password, please try again!'
              break;
            default:
              break;
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
