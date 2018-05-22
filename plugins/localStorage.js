import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  createPersistedState({
    // key: 'my-vuex',
    // paths: [
    //
    //   ]
  })(store)
}