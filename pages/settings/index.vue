<template>
  <main class="general">
    <h3>General settings...</h3>
  </main>
</template>

<script>
export default {
  middleware: ['auth','check-auth'],
}
</script>

<style lang="scss">
.main {
  margin-left: 3rem;
}
</style>
