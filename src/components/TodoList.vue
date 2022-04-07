<template>
      <li  class="w-full flex bg-white p-2 border border-rounded  rounded-[5px]"  >
          <div class="w-3/5">
            <input  type="checkbox" name="{{todo.name}} " :checked="todo.completed"  @change="setCompleted({ todo: todo })"    class="mr-2">
            <label :class="todo.completed?'line-through text-gray-400' : '' " for="{{todo.name}}">{{todo.name}}</label>
          </div>
          <button class="w-2/5 text-red-500 hover:text-gray-300" @click.prevent="deleteTodo(todo)">supprimer</button>
          </li>
</template>
<script>
import store from "../store/index"
export default {
  store: store,
  props: ['todo'],
   methods: {
        
      deleteTodo (thetodo) {
         store.commit('del_Todo',thetodo)
      },
      setCompleted({todo}){
         store.commit('set_completed',{todo})
      }

    },
    computed : { 
       toDolength () { 
         return this.todos.length
       }

    }
}
</script>