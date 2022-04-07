 

<template >
<div class="w-full flex ">
  <div class=" phone:hidden lg:w-1/3"></div>
  <div class=" phone:w-full  lg:w-1/3 border-rounded rounded-[10px] mt-10   items-center  ">
    <header class="px-9">
      <h1 class="w-full text-center   text-3xl  text-red-700  font-bold ">
        Todo 
      </h1>
      <input type="text" @keyup.enter="addTodo" v-model="newTodo" class="w-full  mt-7 p-2 border-gray-300 border-rounded rounded-[5px]" placeholder="Ajouter une tache">
    </header>
    <main class="mt-2 lg:px-9 phone:w-full  ">
      <div class="flex "  v-show="toDolength > 0">
        <input class=" m-2" type="checkbox" name="allDone" v-model="allDone">
      </div>
      <ul class="w-full ">
         <todolist v-for="todo in filteredTodos" v-bind:key="todo.id" :todo="todo"/>
      </ul>
    </main>
    <div class="lg:px-9 mt-3 flex w-full text-center" v-show="toDolength > 0">
      <ul class="flex w-full">
          <li class="w-1/3 mr-1   " :class="filter=='all'?'text-blue-900':''" @click.prevent="filter='all'"><a href="#">Toutes</a></li>
          <li class="w-1/3 mr-1  " :class="filter=='todo'?'text-blue-900':''" @click.prevent="filter='todo'"><a href="#">Afaire</a></li>
          <li class="w-1/3 mr-1  " :class="filter=='done'?'text-blue-900':''" @click.prevent="filter='done'"><a href="#">Faites</a></li>
        </ul>
    </div>

    <footerVue/>

    </div>
  <!-- <div class="w-1/3"></div> -->
</div>
</template>
<script>
import store from '../store/index'
import footerVue from './Thefooter.vue'
import todolist from './TodoList.vue'
// import vuex from 'vuex'
  export default {
    store : store,
    components : {
      footerVue,
      todolist
    },
    data() {
      return {
        newTodo : '',
        filter : 'all'
      }
    },
    methods: {
       
       addTodo(){
         store.commit('add_Todo',this.newTodo)
         this.newTodo = ''
       },
      deleteAll () {
         store.commit('del_AllTodo')
      },
    },
    computed : { 
      todos () {
          return store.getters.todos
      },
      completedTodos () {
        return store.getters.completedTodos
      },
      remainingTodos () {
        return store.getters.remainingTodos
      },
      remainingTodosCount() {
        return store.getters.remainingTodosCount
       },
      allDone : {
        get() {
          return this.remainingTodosCount == 0
        },
        set(value) {
         store.commit('set_Done',value)
        }
      },
       
       filteredTodos () {
         if(this.filter == 'todo') {
           return this.remainingTodos
         }else if(this.filter == 'done'){
            return this.completedTodos 
         }else{
           return this.todos
         }
       },
       toDolength () { 
         return this.todos.length
       }

    }
  }
</script>

<style >
  
</style>
