import Vuex from 'vuex';

const createStore = () => {
    // eslint-disable-next-line import/no-named-as-default-member
    return new Vuex.Store({
        state: {
            decks: []
        },
        mutations: {
            setDecks(state, decks) {
                state.decks = decks;
            }
        },
        actions: {
            setDecks(vuexContext, decks) {
                vuexContext.commit('setDecks', decks)
            }
        },
        getters: {
            decks(state) {
                return state.decks;
            }
        },
    })
}

export default createStore