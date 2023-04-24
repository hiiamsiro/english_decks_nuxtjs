<template>
  <div>
    <div class="ct">
      <h3>List of your decks:</h3>
      <ul class="decks-list">
        <li>
          <div class="card deck-card">
            <img
              src="https://tranduchuan.com/wp-content/uploads/2019/12/hardest-part-learning-english.jpg"
              alt="Thumbail card"
            />
            <div class="card_body">
              <h3>Title card</h3>
              <p>Description card</p>
            </div>
          </div>
        </li>
        <li>
          <div class="card deck-card">
            <img
              src="https://tranduchuan.com/wp-content/uploads/2019/12/hardest-part-learning-english.jpg"
              alt="Thumbail card"
            />
            <div class="card_body">
              <h3>Title card</h3>
              <p>Description card</p>
            </div>
          </div>
        </li>
        <li>
          <div class="card deck-card">
            <img
              src="https://tranduchuan.com/wp-content/uploads/2019/12/hardest-part-learning-english.jpg"
              alt="Thumbail card"
            />
            <div class="card_body">
              <h3>Title card</h3>
              <p>Description card</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
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

<style lang="scss">
.decks-list {
  list-style: none;
  margin: 0;
  padding: 0;
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
</style>
