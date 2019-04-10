import Vuex from 'vuex';
import Vue from 'vue';
import emprestimos from './modules/emprestimos.js';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
    modules:
    {
        emprestimos
    }
});