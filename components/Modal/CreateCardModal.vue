<template>
  <v-modal name="CreateCardModal">
    <div class="modal_body">
      <h2>Create a new card</h2>
      <form @submit.prevent="saveCard(editedCard)">
        <div class="form_group">
          <label for="">Keyword:</label>
          <input
            v-model="editedCard.keyword"
            class="form_control"
            type="text"
            placeholder="Please enter keyword"
          />
        </div>
        <div class="form_group">
          <label for="">Picture:</label>
          <input
            v-model="editedCard.picture"
            class="form_control"
            type="text"
            placeholder="https://example.com/deck.png"
          />
          <div class="preview"></div>
        </div>
        <div class="form_group flex justify-end">
          <button class="btn btn_danger" @click.prevent="closeModal">
            Close
          </button>
          <button class="btn btn_success ml-3" type="submit">Create</button>
        </div>
      </form>
    </div>
  </v-modal>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: false,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: () => ({
        id: '',
        keyword: '',
        picture: '',
      }),
    },
  },
  data() {
    return {
      editedCard: this.card
        ? { id: this.$store.getters.cardId, ...this.card }
        : { keyword: '', picture: '' },
    }
  },
  methods: {
    closeModal() {
      this.$modal.close({ name: 'CreateCardModal' })
    },
    saveCard(cardData) {
      this.$store.dispatch('addCard', cardData).then(() => this.closeModal())
    },
  },
}
</script>

<style lang="scss">
.modal_body {
  background-color: #fff;
  padding: 1rem;
}
</style>
