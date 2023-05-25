<template>
  <div class="ct">
    <h1>Profile is here...</h1>
    <button class="btn btn_danger" @click="onLogout">Logout</button>
  </div>
</template>

<script>
export default {
  middleware: ['auth','check-auth'],
  methods: {
    onLogout() {
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  },
}
</script>
