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
        return new Promise((resolve, reject) => {
          // eslint-disable-next-line nuxt/no-timing-in-fetch-data
          setTimeout(() => {
            resolve({
              decks: [
                {
                  _id: 1,
                  name: 'Learn English',
                  description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  thumbnail:
                    'https://tranduchuan.com/wp-content/uploads/2019/12/hardest-part-learning-english.jpg',
                },
                {
                  _id: 2,
                  name: 'Learn English',
                  description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  thumbnail:
                    'https://tranduchuan.com/wp-content/uploads/2019/12/hardest-part-learning-english.jpg',
                },
                {
                  _id: 3,
                  name: 'Learn English',
                  description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  thumbnail:
                    'https://tranduchuan.com/wp-content/uploads/2019/12/hardest-part-learning-english.jpg',
                },
              ],
            })
          }, 1500)
        }).then((data) => {
          vuexContext.commit('setDecks', data.decks)
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
