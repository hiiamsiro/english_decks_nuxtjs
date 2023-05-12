import axios from 'axios'

import Vuex from 'vuex'

const createStore = () => {
  // eslint-disable-next-line import/no-named-as-default-member
  return new Vuex.Store({
    state: {
      decks: [],
    },
    mutations: {
      addDeck(state, newDeck) {
        state.decks.push(newDeck)
      },
      editDeck(state, editDeck) {
        const deckIndex = state.decks.findIndex((deck) => deck.id === editDeck.id);

        state.decks[deckIndex] = editDeck;
      },
      setDecks(state, decks) {
        state.decks = decks
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get(process.env.baseApiUrl + '/decks.json')
          .then((response) => {
            const decksArr = []
            for (const key in response.data) {
              decksArr.push({ ...response.data[key], id: key })
            }
            vuexContext.commit('setDecks', decksArr)
          }).catch((e) => {
            context.error(e);
          })
      },
      addDeck(vuexContext, deckData) {
        return axios
          .post(process.env.baseApiUrl + '/decks.json', deckData)
          .then((result) => {
            vuexContext.commit('addDeck', { ...deckData, id: result.data.name });
          })
          .catch((e) => {
            // eslint-disable-next-line no-console
            console.log(e)
          })
      },
      editDeck(vuexContext, deckData) {
        const deckId = deckData.id
        delete deckData.id

        return axios
          .put(process.env.baseApiUrl + '/decks/' + deckId + '.json', deckData)
          .then((result) => {
            vuexContext.commit('editDeck', { ...result.data, id: deckId });
          })
          .catch((e) => {
            // eslint-disable-next-line no-console
            console.log(e)
          })
      },
      setDecks(vuexContext, decks) {
        vuexContext.commit('setDecks', decks)
      },
    },
    getters: {
      decks(state) {
        return state.decks
      },
    },
  })
}

export default createStore
