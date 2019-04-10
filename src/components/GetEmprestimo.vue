<template>     
    <div>
        <h3>Busca Emprestimo</h3>
        <div class="add">
            <form @submit="onSubmit">
                <input type="text" v-model="id" placeholder="Digite o RG...">
                <input type="submit" value="Submit">
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
