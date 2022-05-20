<template>
     <footer class="lg:pl-9 mt-3 flex w-full justify-between" v-show="toDolength > 0">
      <span class="lg:w-1/3 phone:w-1/2"> <strong>{{remainingTodosCount}}</strong>  {{remainingTodosCount>1?'tasks' : 'task' }} left to do</span>
      <div class="lg:w-1/3 phone:hidden"></div>
      <div class="lg:w-1/3 phone:w-1/2 flex justify-center ">
          <button class=" text-red-500 hover:text-gray-300" @click.prevent="deleteAll()">delete</button>
      </div>
    </footer>
    <div class="px-9 mt-5  text-center w-full ">
      <span class=" w-full text-center ">

      Made with ❤️ by <a href="http://www.github.com/klakenyuo" class="text-blue-900"> Gilles</a>
      </span>
    </div>
</template>
<script>
import store from "../store/index"
export default {
  store: store,
  computed : {
    remainingTodosCount() {
        return store.getters.remainingTodosCount
       },
       toDolength () { 
         return store.getters.todos.length
       }
  },
  methods: {
    deleteAll () {
        store.commit('del_AllTodo')
    },
 },
}
</script>