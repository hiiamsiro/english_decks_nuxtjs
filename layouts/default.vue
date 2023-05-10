<template>
  <div>
    <default-header></default-header>
    <Nuxt />
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
import axios from 'axios'
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
        axios
          .post(
            'https://nuxt-learning-english-8bfd6-default-rtdb.asia-southeast1.firebasedatabase.app/decks.json',
            deckData
          )
          .then((data) => {
            // eslint-disable-next-line no-console
            console.log(data)
          })
          .catch((e) => {
            // eslint-disable-next-line no-console
            console.log(e)
          })
      } else {
        const deckId = deckData.id
        delete deckData.id

        axios
          .put(
            'https://nuxt-learning-english-8bfd6-default-rtdb.asia-southeast1.firebasedatabase.app/decks/' +
              deckId +
              '.json',
            deckData
          )
          .then((data) => {
            // eslint-disable-next-line no-console
            console.log(data)
          })
          .catch((e) => {
            // eslint-disable-next-line no-console
            console.log(e)
          })
      }
    },
  },
}
</script>
