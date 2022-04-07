<template>
<div class="flex w-full text-center" > Il vous reste {{remainingTodosCount}}  taches à faire </div>
    
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