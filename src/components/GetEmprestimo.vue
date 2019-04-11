<template>     
    <div class="container w-full max-w-xs">
        <h3>Busca Emprestimo</h3>
        <div class="w-full max-w-xs">
            <form @submit="onSubmit" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <label for="" class="block text-grey-darker text-sm font-bold mb-2">RG</label>
                    <input type="text" v-model="id" placeholder="Digite o RG..." 
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker">
                    
                </div>
                <div class="flex-end">
                    <button type="submit" class="bg-blue hover:bg-blue-dark 
                                text-white font-bold py-2 px-4 rounded-full">
                    Buscar
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "GetEmprestimo",
    data(){
        return{
            id: ''
        }
    },
    methods:{
        ...mapActions(["getEmprestimo"]),
        onSubmit(e){
            e.preventDefault();
            this.getEmprestimo(this.id);
        }
    }
}
</script>

<style>

</style>
