<template>
  <div>
    <default-header></default-header>
    <Nuxt class="nuxt-content" />
    <!-- Modal -->
    <v-modal v-slot="payload" name="DeckFormModal">
      <div class="modal_body">
        <h2>
          {{ payload && payload.payload ? 'Edit a Deck' : 'Create a new Deck' }}
        </h2>
        <deck-form :deck="payload.payload" @submit="onSubmit" />
      </div>
    </v-modal>
    <default-footer></default-footer>
  </div>
</template>

<script>
import DeckForm from '@/components/Decks/DeckForm'
import DefaultHeader from '@/components/Header/DefaultHeader'
import DefaultFooter from '@/components/Footer/DefaultFooter'
export default {
  components: {
    DefaultHeader,
    DefaultFooter,
    DeckForm,
  },
  methods: {
    onSubmit(deckData) {
      if (deckData && !deckData.id) {
        this.$store
          .dispatch('addDeck', deckData)
          .then(() => this.$modal.close({ name: 'DeckFormModal' }))
      } else {
        this.$store.dispatch('editDeck', deckData).then(() => {
          this.$modal.close({ name: 'DeckFormModal' })
          this.$router.push('/decks')
        })
      }
    },
  },
}
</script>

<style lang="scss">
.nuxt-content {
  padding-top: 3.5rem;
  // 100vh - header - footer
  min-height: calc(100vh - 60px - 132px);
}
</style>
