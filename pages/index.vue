<template>
  <div class="ct">
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
    background: url('https://images.twinkl.co.uk/tw1n/image/private/t_630/image_repo/65/34/AU-T2-E-001-English-Display-Banner.jpg')
      center center;
    background-size: cover;
    height: inherit;
  }
}
</style>
