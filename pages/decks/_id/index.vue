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
          <button
            class="btn btn_danger"
            @click.prevent="openModal('DeleteCardModal')"
          >
            Delete Deck
          </button>
        </div>
        <hr class="divide" />
        <div class="r">
          <card-list
            v-for="card in cards"
            :id="card.id"
            :key="card.id"
            :keyword="card.keyword"
            :picture="card.picture"
          />
        </div>
      </div>
    </div>
    <!-- Modal -->
    <create-card-modal :card="deck" />
    <delete-card-modal />
  </section>
</template>

<script>
import CardList from '~/components/Cards/CardList.vue'
import CreateCardModal from '~/components/Modal/CreateCardModal.vue'
import DeleteCardModal from '~/components/Modal/DeleteCardModal.vue'
export default {
  components: {
    CardList,
    CreateCardModal,
    DeleteCardModal,
  },
  asyncData(context) {
    return context.app.$axios
      .$get(`${process.env.baseApiUrl}/decks/${context.params.id}/cards.json`)
      .then((data) => {
        const cardsArr = []
        for (const key in data) {
          cardsArr.push({ ...data[key], id: key })
        }
        return {
          cardsArr,
        }
      })
      .catch((e) => {
        context.error(e)
      })
  },
  data() {
    return {
      deck: {
        name: '',
        description: '',
        id: '',
        thumbnail: '',
      },
      cardsArr: [],
    }
  },
  fetch(context) {
    return context.app.$axios
      .$get(`${process.env.baseApiUrl}/decks/${context.params.id}.json`)
      .then((data) => {
        const response = { ...data }
        this.deck = response
      })
      .catch((e) => {
        context.error(e)
      })
  },
  head() {
    return {
      title: `Deck: ${this.deck.name} | Learning English By Flash Card Online`,
    }
  },
  computed: {
    cards() {
      return this.$store.getters.cards
    },
  },
  mounted() {
    this.$store.dispatch('setCards', this.cardsArr)
  },
  created() {
    if (this.$route.params.id && this.$route.params.id !== undefined)
      this.$store.dispatch('setCardId', this.$route.params.id)
  },
  methods: {
    openModal(name) {
      if (name === 'CreateCardModal') {
        this.$modal.open({
          name: 'CreateCardModal',
        })
      } else if (name === 'DeleteCardModal') {
        this.$modal.open({
          name: 'DeleteCardModal',
        })
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
}
</style>
