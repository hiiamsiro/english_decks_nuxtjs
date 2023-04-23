<template>
  <div>
    <h1>Please enter number of decks to show:</h1>
    <input
      class="form_control"
      v-model="deckID"
      type="text"
      placeholder="Please enter deckID"
    />
    <button class="btn btn_success" @click="showDeck">Go to deck</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deckID: '1',
    }
  },
  methods: {
    showDeck() {
      this.$router.push(`/decks/${this.deckID}`)
    },
  },
}
</script>
