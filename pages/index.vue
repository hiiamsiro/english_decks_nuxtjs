<template>
  <div class="ct">
    <event-alert class="mt-3" />
    <div class="banner">
      <div class="thumbnail-banner"></div>
    </div>
    <div class="popular-decks">
      <h3 class="text-center my-3">3 Popular Decks For You</h3>
      <div class="r">
        <div class="c_4">
          <div class="card">Deck 1</div>
        </div>
        <div class="c_4">
          <div class="card">Deck 1</div>
        </div>
        <div class="c_4">
          <div class="card">Deck 1</div>
        </div>
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
.banner {
  height: 220px;
  margin-top: 2rem;
  .thumbnail-banner {
    background: url('~assets/images/banner.jpg') center center;
    background-size: cover;
    height: inherit;
  }
}
</style>
