<template>
  <div class="page">
    <div class="nav">
      <ul>
        <li>
          <nuxt-link to="/settings">General</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/settings/deck">Deck</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/settings/schedule">Schedule</nuxt-link>
        </li>
      </ul>
    </div>
    <div class="general">
      <h3>General settings...</h3>
    </div>
  </div>
</template>

<style lang="scss">
.page {
  display: flex;
}
</style>
