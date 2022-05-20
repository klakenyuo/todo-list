<template>
<div class="flex w-full text-center" >  {{remainingTodosCount}}  tasks left to do </div>
    
</template>
<script  >
import store from "../store/index"
export default {
  store: store,
  computed : {
    remainingTodosCount() {
        return store.getters.remainingTodosCount
       },
  },
  methods: {
       
    deleteAll () {
        store.commit('del_AllTodo')
    },
 },
}
</script>