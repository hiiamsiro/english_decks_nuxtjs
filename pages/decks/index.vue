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
        <li v-for="deck in decks" :key="deck._id">
          <nuxt-link class="deck" to="/decks/1">
            <div class="card deck-card">
              <img :src="deck.thumbnail" :alt="`Thumbnail of ${deck.name}`" />
              <div class="card_body">
                <h3>{{ deck.name }}</h3>
                <p>{{ deck.description }}</p>
              </div>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>

    <!-- Modal -->
    <v-modal name="CreateDeckModal">
      <div class="modal_body">
        <h2>Create a new deck</h2>
        <form action="">
          <div class="form_group">
            <label for="">Name:</label>
            <input
              class="form_control"
              type="text"
              placeholder="Please enter deck name"
            />
          </div>
          <div class="form_group">
            <label for="">Description:</label>
            <textarea
              class="form_control"
              placeholder="Please enter description"
            />
          </div>
          <div class="form_group">
            <label for="">Thumbnail:</label>
            <input type="file" />
            <div class="preview"></div>
          </div>
          <div class="form_group flex justify-end">
            <button class="btn btn_danger" @click.prevent="closeModal">
              Close
            </button>
            <button class="btn btn_success ml-3" @click.prevent="createDeck">
              Create
            </button>
          </div>
        </form>
      </div>
    </v-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      decks: [
        {
          _id: 1,
          name: 'Learn English',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          thumbnail:
            'https://tranduchuan.com/wp-content/uploads/2019/12/hardest-part-learning-english.jpg',
        },
        {
          _id: 2,
          name: 'Learn English',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          thumbnail:
            'https://tranduchuan.com/wp-content/uploads/2019/12/hardest-part-learning-english.jpg',
        },
        {
          _id: 3,
          name: 'Learn English',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          thumbnail:
            'https://tranduchuan.com/wp-content/uploads/2019/12/hardest-part-learning-english.jpg',
        },
      ],
    }
  },
  methods: {
    closeModal() {
      this.$modal.close({ name: 'CreateDeckModal' })
    },
    openModal() {
      this.$modal.open({ name: 'CreateDeckModal' })
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
