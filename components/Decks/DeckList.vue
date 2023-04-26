<template>
  <li>
    <nuxt-link class="deck" to="/decks/1">
      <div class="card deck-card">
        <img :src="thumbnail" :alt="`Thumbnail of ${deck.name}`" />
        <div class="card_body">
          <h3>{{ name }}</h3>
          <p>{{ description }}</p>
        </div>
      </div>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    thumbnail: {
      type: String,
      required: true,
    },
  },
}
</script>
