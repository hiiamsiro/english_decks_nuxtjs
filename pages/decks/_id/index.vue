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
            :id="deck.id"
            :key="deck.id"
            :keyword="deck.keyword"
            :picture="deck.picture"
          />
        </div>
      </div>
    </div>
    <!-- Modal -->
    <create-card-modal :card="deck" :cardId="this.$route.params.id" />
  </section>
</template>

<script>
import CardList from '~/components/Cards/CardList.vue'
import CreateCardModal from '~/components/Modal/CreateCardModal.vue'
export default {
  components: {
    CardList,
    CreateCardModal,
  },
  asyncData(context) {
    return context.app.$axios
      .$get(`${process.env.baseApiUrl}/decks/${context.params.id}.json`)
      .then((data) => {
        return {
          deck: data,
        }
      })
      .catch((e) => {
        context.error(e)
      })
  },
  data() {
    return {}
  },
  head() {
    return {
      title: `Deck: ${this.deck.name} | Learning English By Flash Card Online`,
    }
  },
  methods: {
    openModal(name) {
      if (name === 'CreateCardModal') {
        this.$modal.open({
          name: 'CreateCardModal',
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
