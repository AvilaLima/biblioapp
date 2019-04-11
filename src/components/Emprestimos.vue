<template>
    <div class="rounded overflow-hidden shadow-lg">  
        <div class="flex items-start py-4">
        <ul class="emprestimos">
            <li                 
                v-for="livro in allEmprestimos" 
                :key="livro.bibid" 
                class="emprestimo list-reset">
                <div class="flex content-end" v-if="livro.tipo==='Livro'">
                    <font-awesome-icon icon="book" /></div>                 
                <p class="font-bold text-teal-dark text-xl leading-none">Título: 
                    <span class="italic text-teal-darker">{{livro.titulo}}</span></p>
                <p class="font-bold text-teal-dark  leading-none">Autor: 
                    <span class="italic text-teal-darker">{{livro.autor}}</span></p>             
                <p class="font-bold text-teal-dark  leading-none">Nº chamada:  
                    <span class="italic text-teal-darker">{{livro.numeroDeChamada}}</span></p>
                 <p class="font-bold text-teal-dark  leading-none">Editora: 
                     <span class="italic text-teal-darker">{{livro.editora}}</span></p>  
                <span class="font-bold text-teal-dark  leading-none">Tipo: </span>
                <label class="block text-grey-darkest text-sm font-bold mb-2">Categorias</label>
                
                <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
                    {{livro.categoria}}</span> 
                <p>Data de Emprestimo: {{livro.emprestimo.dataDeEmprestimo}}</p> 
                <p>Data de Devolução: {{livro.emprestimo.dataDeDevolucao}}</p> 
                <span> Cópias: </span>
                <ul class="copias">
                    <li v-for="copias in livro.copias" 
                                            :key="copias.codigoDeBarras"
                                            class="copias list-reset">
                                            <p>Código de Barras: {{copias.codigoDeBarras}}</p> 
                                            <p>Status: {{copias.status}}</p> 
                    </li>
                </ul>
                
            </li>
        </ul>
    </div>
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
