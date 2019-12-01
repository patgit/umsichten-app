/* eslint-disable no-param-reassign */
import Vue from 'vue'
import Vuex from 'vuex'

import Axios from 'axios';
// import _ from 'lodash';

Vue.use(Vuex)


const URL_STATS = './data/f-index.csv';

export default new Vuex.Store({

  state: {
    ready: false,
    isLoading: false,
  },

  mutations: {
    SET_READY: (state, payload) => {
      state.ready = payload;
    },
    SET_RAW_DATA: (state, payload) => {
      state.rawdata = payload;
    },
    SET_PLZ_DATA: (state, payload) => {
      state.plz = payload;
    },
    SET_COMPANIES_DATA: (state, payload) => {
      state.companiesdata = payload;
    },
  },

  actions: {
    LOAD_APP_DATA: async (context) => {
      const response = await Axios.get(URL_STATS);
      // const data = dsv.parse(response.data);
console.log(response)
      // context.commit('SET_RAW_DATA', data);
      context.commit('SET_READY', true);

    },
  },

  getters: {
    getNavigation: (state) => {
      return () => {
        return state.navigation;
      }
    },
  },
});
