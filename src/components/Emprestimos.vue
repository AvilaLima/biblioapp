<template>
    <div>
        <h3>Emprestimos</h3>        
        <ul class="emprestimos">
            <li                 
                v-for="livro in allEmprestimos" 
                :key="livro.bibid" 
                class="emprestimo">
                <p>Número de chamada:  {{livro.numeroDeChamada}}</p> 
                <p>Autor:  {{livro.autor}}</p> 
                <p>Editora: {{livro.editora}}</p> 
                <p>Tipo: {{livro.tipo}}</p> 
                <p>Categoria: {{livro.categoria}}</p> 
                <p>Data de Emprestimo: {{livro.emprestimo.dataDeEmprestimo}}</p> 
                <p>Data de Devolução: {{livro.emprestimo.dataDeDevolucao}}</p> 
                <span> Cópias: </span>
                <ul class="copias">
                    <li v-for="copias in livro.copias" 
                                            :key="copias.codigoDeBarras"
                                            class="copias">
                                            <p>Código de Barras: {{copias.codigoDeBarras}}</p> 
                                            <p>Status: {{copias.status}}</p> 
                    </li>
                </ul>
                
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: "Emprestimos",
    methods:{
        ...mapActions(["fetchEmprestimos","getEmprestimo"])
    },
    computed: mapGetters(["allEmprestimos"]),
    created(){
        this.fetchEmprestimos();
    }
};
</script>

<style>

</style>
