<template>
  <form @submit.prevent="onSave">
    <div class="form_group">
      <label for="">Name:</label>
      <input
        v-model="editedDeck.name"
        class="form_control"
        type="text"
        placeholder="Please enter deck name"
      />
    </div>
    <div class="form_group">
      <label for="">Description:</label>
      <textarea
        v-model="editedDeck.description"
        class="form_control"
        placeholder="Please enter description"
      />
    </div>
    <div class="form_group">
      <label for="">Thumbnail:</label>
      <input
        v-model="editedDeck.thumbnail"
        class="form_control"
        type="text"
        placeholder="https://example.com/deck.png"
      />
      <div class="preview"></div>
    </div>
    <div class="form_group flex justify-end">
      <button class="btn btn_danger" type="button" @click.prevent="closeModal">
        Close
      </button>
      <button class="btn btn_success ml-3" type="submit">
        {{ editedDeck && editedDeck.id ? 'Edit' : 'Create' }}
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    deck: {
      type: Object,
      required: false,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: () => ({
        name: '',
        description: '',
        thumbnail: '',
      }),
    },
  },
  data() {
    return {
      editedDeck: this.deck
        ? { ...this.deck }
        : { name: '', description: '', thumbnail: '' },
    }
  },
  methods: {
    closeModal() {
      this.$modal.close({ name: 'DeckFormModal' })
    },
    onSave() {
      this.$emit('submit', this.editedDeck)
    },
  },
}
</script>
