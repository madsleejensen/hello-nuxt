import Vuex from 'vuex';

const createStore = function() {
  return new Vuex.Store({
    state: {
      counter: 0
    },
    mutations: {
      increment (state) {
        state.counter++
      }
    }
  });
};

export default createStore;
