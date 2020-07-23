import Vue from 'vue';
import Vuex from 'vuex';
import decode from 'jwt-decode';

import router from '../router/index';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: null,
        user: null
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        setUser(state, user) {
            state.user = user;
        }
    },
    actions: {
        saveToken({ commit }, token) {
            // Save token to LocalStorage
            commit('setToken', token);
            commit('setUser', decode(token));
            localStorage.setItem("token-booking-agent", token);
        },
        autoLogin({ commit }) {
            let token = localStorage.getItem("token-booking-agent");
            if (token) {
                commit('setToken', token);
                commit('setUser', decode(token));
            }
            router.push({ name: 'dashboard' });
        },
        logout({ commit }) {
            // Delete token from LocalStorage
            commit('setToken', null);
            commit('setUser', null);
            localStorage.removeItem("token-booking-agent");
            router.push({ name: 'login' });
        }
    },
    modules: {}
});