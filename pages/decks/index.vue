<template>
  <div>
    <div class="ct">
      <div class="flex justify-between my-3">
        <h3>List of your decks:</h3>
        <button class="btn btn_success" @click.prevent="openModal">
          Create a deck
        </button>
      </div>
      <ul class="decks-list">
        <deck-list
          v-for="deck in decks"
          :id="deck.id"
          :key="deck.id"
          :name="deck.name"
          :description="deck.description"
          :thumbnail="deck.thumbnail"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import DeckList from '@/components/Decks/DeckList'
export default {
  components: {
    DeckList,
  },
  middleware: ['auth', 'check-auth'],
  head: {
    title: 'Decks | Learning English By Flash Card Online',
  },
  computed: {
    decks() {
      return this.$store.getters.decks
    },
  },
  methods: {
    openModal() {
      this.$modal.open({ name: 'DeckFormModal' })
    },
  },
}
</script>

<style lang="scss">
.decks-list {
  .deck {
    display: block;
  }
  li {
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .deck-card {
    display: flex;
    flex-direction: row;
    height: 250px;
    img {
      width: 250px;
      height: auto;
    }
  }
}
.modal_body {
  background-color: #fff;
  padding: 1rem;
}
</style>
