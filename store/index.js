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
      setToken(state, token) {
        state.token = token
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return context.app.$axios
          .$get(process.env.baseApiUrl + '/decks.json')
          .then((data) => {
            const decksArr = []
            for (const key in data) {
              decksArr.push({ ...data[key], id: key })
            }
            vuexContext.commit('setDecks', decksArr)
          }).catch((e) => {
            context.error(e);
          })
      },
      authenticateUser(vuexContext, credenticals) {
        return new Promise((resolve, reject) => {
          // check login  or register
          let authUrlApi = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.fbApiKey}`;

          if (!credenticals.isLogin) {
            authUrlApi = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.fbApiKey}`;
          }

          // call api to firebase
          this.$axios
            .$post(
              authUrlApi,
              {
                email: credenticals.email,
                password: credenticals.password,
                returnSecureToken: true,
              }
            )
            .then((result) => {
              vuexContext.commit('setToken', result.idToken)
              resolve({ success: true })
            })
            .catch((err) => {
              console.log(err.response);
              reject(err.response);
            })

        })
      },
      addDeck(vuexContext, deckData) {
        return this.$axios
          .$post(process.env.baseApiUrl + '/decks.json', deckData)
          .then((data) => {
            vuexContext.commit('addDeck', { ...deckData, id: data.name });
          })
          .catch((e) => {
            // eslint-disable-next-line no-console
            console.log(e)
          })
      },
      editDeck(vuexContext, deckData) {
        const deckId = deckData.id
        delete deckData.id

        return this.$axios
          .$put(process.env.baseApiUrl + '/decks/' + deckId + '.json', deckData)
          .then((data) => {
            vuexContext.commit('editDeck', { ...data, id: deckId });
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
