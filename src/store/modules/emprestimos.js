import axios from 'axios';
import { async } from 'q';
import { stat } from 'fs';

const state = {
    emprestimos: []
  };

const getters = {
    allEmprestimos: (state) => state.emprestimos
};

const actions = {
    async getEmprestimo({commit},id){
        const response = await axios.get(`http://localhost:57978/api/Emprestimo/${id}`);        
        commit('setEmprestimos', response.data);
        console.log(response.data);
    },
    async fetchEmprestimos({commit}){
        commit('setEmprestimos');
    }
};

const mutations = {
    setEmprestimos: (state, emprestimos) => (state.emprestimos = emprestimos),       
};

export default {
    state,
    getters,
    actions,
    mutations
};