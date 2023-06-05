import Vuex from 'vuex'
import Cookies from 'js-cookie'

const createStore = () => {
  // eslint-disable-next-line import/no-named-as-default-member
  return new Vuex.Store({
    state: {
      decks: [],
      token: '',
      cards: [],
      cardId: '',
    },
    mutations: {
      addDeck(state, newDeck) {
        state.decks.push(newDeck)
      },
      editDeck(state, editDeck) {
        const deckIndex = state.decks.findIndex(
          (deck) => deck.id === editDeck.id
        )

        state.decks[deckIndex] = editDeck
      },
      setDecks(state, decks) {
        state.decks = decks
      },
      addCard(state, newCard) {
        state.cards.push(newCard)
      },
      setCardId(state, cardId) {
        state.cardId = cardId
      },
      clearToken(state) {
        state.token = null
      },
      setToken(state, token) {
        state.token = token
      },
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
          })
          .catch((e) => {
            context.error(e)
          })
      },
      authenticateUser(vuexContext, credenticals) {
        return new Promise((resolve, reject) => {
          // check login  or register
          let authUrlApi = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.fbApiKey}`

          if (!credenticals.isLogin) {
            authUrlApi = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.fbApiKey}`
          }

          // call api to firebase
          this.$axios
            .$post(authUrlApi, {
              email: credenticals.email,
              password: credenticals.password,
              returnSecureToken: true,
            })
            .then((result) => {
              vuexContext.commit('setToken', result.idToken)
              localStorage.setItem('token', result.idToken)
              localStorage.setItem(
                'tokenExpiration',
                new Date().getTime() + result.expiresIn * 60000
              )

              Cookies.set('token', result.idToken)
              Cookies.set(
                'tokenExpiration',
                new Date().getTime() + result.expiresIn * 60000
              )
              vuexContext.dispatch('setLogoutTimer', result.expiresIn * 60000)
              resolve({ success: true })
            })
            .catch((err) => {
              console.log(err.response)
              reject(err.response)
            })
        })
      },
      addDeck(vuexContext, deckData) {
        return this.$axios
          .$post(
            process.env.baseApiUrl +
              '/decks.json?auth=' +
              vuexContext.state.token,
            deckData
          )
          .then((data) => {
            vuexContext.commit('addDeck', { ...deckData, id: data.name })
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
          .$put(
            process.env.baseApiUrl +
              '/decks/' +
              deckId +
              '.json?auth=' +
              vuexContext.state.token,
            deckData
          )
          .then((data) => {
            vuexContext.commit('editDeck', { ...data, id: deckId })
          })
          .catch((e) => {
            // eslint-disable-next-line no-console
            console.log(e)
          })
      },
      setDecks(vuexContext, decks) {
        vuexContext.commit('setDecks', decks)
      },
      addCard(vuexContext, cardData) {
        const cardId = cardData.id

        return this.$axios
          .$post(
            process.env.baseApiUrl +
              '/decks/' +
              cardId +
              '/cards.json?auth=' +
              vuexContext.state.token,
            cardData
          )
          .then((data) => {
            vuexContext.commit('addCard', { ...data, id: data.keyword })
          })
          .catch((e) => {
            // eslint-disable-next-line no-console
            console.log(e)
          })
      },
      setCardId(vuexContext, cardId) {
        vuexContext.commit('setCardId', cardId)
      },
      setLogoutTimer(vuexContext, duration) {
        setTimeout(() => {
          vuexContext.commit('clearToken')
        }, duration)
      },
      initAuth(vuexContext, req) {
        let token, tokenExpiration
        if (req) {
          // Handle first time go to page
          if (!req.headers.cookie) return false

          const tokenKey = req.headers.cookie
            .split(';')
            .find((c) => c.trim().startsWith('token='))
          const tokenExpirationKey = req.headers.cookie
            .split(';')
            .find((c) => c.trim().startsWith('tokenExpiration='))

          if (!tokenKey || !tokenExpirationKey) {
            vuexContext.dispatch('logout')
            return false
          }

          token = tokenKey.split('=')[1]
          tokenExpiration = tokenExpirationKey.split('=')[1]
        } else {
          token = localStorage.getItem('token')
          tokenExpiration = localStorage.getItem('tokenExpiration')

          if (new Date().getTime() > tokenExpiration || !token) {
            vuexContext.dispatch('logout')
            return false
          }
        }

        vuexContext.dispatch(
          'setLogoutTimer',
          tokenExpiration - new Date().getTime()
        )
        vuexContext.commit('setToken', token)
      },
      logout(vuexContext) {
        vuexContext.commit('clearToken')
        Cookies.remove('token')
        Cookies.remove('tokenExpiration')
        localStorage.removeItem('token')
        localStorage.removeItem('tokenExpiration')
      },
    },
    getters: {
      decks(state) {
        return state.decks
      },
      cards(state) {
        return state.cards
      },
      cardId(state) {
        return state.cardId
      },
      isAuthenticated(state) {
        return state.token
      },
    },
  })
}

export default createStore
