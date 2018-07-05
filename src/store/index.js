import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    query: '',
    licences: []
  },
  getters: {
    filteredLicences: state => {
      return state.licences.filter(item => { return item.title.toLowerCase().match(state.query.toLowerCase()) })
    }
  },
  mutations: {
    setLicences (state, payload) {
      state.licences = Object.values(payload)
    },
    query (state, payload) {
      state.query = payload
    }
  },
  actions: {
    fetchLicences (context) {
      fetch('https://licenses.opendefinition.org/licenses/groups/all.json')
        .then(response => response.json())
        .then(res => { context.commit('setLicences', res) })
    }
  }
})

export default store
