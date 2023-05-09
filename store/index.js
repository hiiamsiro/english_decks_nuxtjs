import axios from 'axios'

import Vuex from 'vuex'

const createStore = () => {
  // eslint-disable-next-line import/no-named-as-default-member
  return new Vuex.Store({
    state: {
      decks: [],
    },
    mutations: {
      setDecks(state, decks) {
        state.decks = decks
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get('https://nuxt-learning-english-8bfd6-default-rtdb.asia-southeast1.firebasedatabase.app/decks.json')
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
