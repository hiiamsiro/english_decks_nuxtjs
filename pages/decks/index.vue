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
        <li>
          <nuxt-link class="deck" to="/decks/1">
            <div class="card deck-card">
              <img
                src="https://tranduchuan.com/wp-content/uploads/2019/12/hardest-part-learning-english.jpg"
                alt="Thumbnail card"
              />
              <div class="card_body">
                <h3>Title card</h3>
                <p>Description card</p>
              </div>
            </div>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link class="deck" to="/decks/2">
            <div class="card deck-card">
              <img
                src="https://tranduchuan.com/wp-content/uploads/2019/12/hardest-part-learning-english.jpg"
                alt="Thumbnail card"
              />
              <div class="card_body">
                <h3>Title card</h3>
                <p>Description card</p>
              </div>
            </div>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link class="deck" to="/decks/3">
            <div class="card deck-card">
              <img
                src="https://tranduchuan.com/wp-content/uploads/2019/12/hardest-part-learning-english.jpg"
                alt="Thumbnail card"
              />
              <div class="card_body">
                <h3>Title card</h3>
                <p>Description card</p>
              </div>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <v-modal name="test">
      <div class="test_body">
        <h1>Hello test modal</h1>
        <button class="btn btn_danger" @click.prevent="closeModal">
          Close Modal
        </button>
      </div>
    </v-modal>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$modal.close({ name: 'test' })
    },
    openModal() {
      this.$modal.open({ name: 'test' })
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
.test_body {
  background-color: #fff;
  padding: 1rem;
}
</style>
