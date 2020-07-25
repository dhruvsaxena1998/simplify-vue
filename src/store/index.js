import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"
import constants from '../env'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    links: ""
  },
  getters: {
    getState(state) {
      return state.links
    }
  },
  mutations: {
    setStateSync(state, payload) {
      state.links = payload
    },
    addLinkSync(state, payload) {
      state.links.unshift(payload);
    }
  },
  actions: {
    async setState ({ commit }, payload) {
      commit('setStateSync', payload)
    },
    async addLink ({ commit }, payload) {
      await axios.post(constants.api,{
        url: payload
      }).then((res) => {
        commit('addLinkSync', res.data);
        console.log(res.data);
      });
      
    }
  },
});
