<template>
  <section>
    <div class="r">
      <div class="ct text-center">
        <h3>Deck: {{ deck.name }}</h3>
        <div class="tools">
          <button class="btn btn_success">Start now</button>
          <button
            class="btn btn_primary"
            @click.prevent="openModal('CreateCardModal')"
          >
            Create a card
          </button>
          <button
            class="btn btn_warning"
            @click.prevent="openModal('DeckFormModal')"
          >
            Edit Deck
          </button>
        </div>
        <hr class="divide" />
        <div class="r">
          <card-list
            v-for="card in cards"
            :key="card._id"
            :keyword="card.keyword"
            :picture="card.picture"
          />
        </div>
      </div>
    </div>
    <!-- Modal -->
    <v-modal name="CreateCardModal">
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
  </section>
</template>

<script>
import axios from 'axios'
import CardList from '~/components/Cards/CardList.vue'
export default {
  components: {
    CardList,
  },
  asyncData(context) {
    return axios
      .get(
        `https://nuxt-learning-english-8bfd6-default-rtdb.asia-southeast1.firebasedatabase.app/decks/${context.params.id}.json`
      )
      .then((response) => {
        return {
          deck: response.data,
        }
      })
      .catch((e) => {
        context.error(e)
      })
  },
  data() {
    return {
      cards: [
        {
          _id: 1,
          picture:
            'https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2014/05/Apps-for-Learning-English-1024x683.jpg',
          keyword: 'English',
        },
        {
          _id: 2,
          picture:
            'https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2014/05/Apps-for-Learning-English-1024x683.jpg',
          keyword: 'English',
        },
        {
          _id: 3,
          picture:
            'https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2014/05/Apps-for-Learning-English-1024x683.jpg',
          keyword: 'English',
        },
        {
          _id: 4,
          picture:
            'https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2014/05/Apps-for-Learning-English-1024x683.jpg',
          keyword: 'English',
        },
        {
          _id: 5,
          picture:
            'https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2014/05/Apps-for-Learning-English-1024x683.jpg',
          keyword: 'English',
        },
      ],
    }
  },
  methods: {
    closeModal() {
      this.$modal.close({ name: 'CreateCardModal' })
    },
    openModal(name) {
      if (name === 'CreateCardModal') {
        this.$modal.open({ name: 'CreateCardModal' })
      } else if (name === 'DeckFormModal') {
        this.$modal.open({
          name: 'DeckFormModal',
          payload: { ...this.deck, id: this.$route.params.id },
        })
      }
    },
  },
}
</script>

<style lang="scss">
section {
  padding-top: 3rem;
  .card {
    padding: 1rem;
    img {
      width: 60%;
    }
  }
  .divide {
    margin: 2rem 0;
  }
  .modal_body {
    background-color: #fff;
    padding: 1rem;
  }
}
</style>
