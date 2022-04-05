 

<template >
<div class="w-full flex items-center">
  <div class="w-1/3"></div>
  <div class="w-1/3 border-rounded rounded-[10px] mt-10 p-9  items-center  ">
    <header>
      <h1 class="   text-3xl font-bold ">
        Todo 
      </h1>
      <input type="text" @keyup.enter="addTodo" v-model="newTodo" class="w-full  mt-7 p-2 border-gray-300 border-rounded rounded-[5px]" placeholder="Ajouter une tache">
    </header>
    <main class="mt-2 ">
      <div class="flex "  v-show="toDolength > 0">
        <input class="mt-2 mr-2" type="checkbox" name="allDone" v-model="allDone">
        <label for="allDone">tout selectionner</label>
      </div>
      <ul>
        <li v-for="todo in filteredTodos" v-bind:key="todo.id" class="bg-white p-2 border border-rounded  rounded-[5px]" :class="todo.completed?'line-through text-gray-400' : '' " >
          <input  type="checkbox" name="{{todo.name}} " v-model="todo.completed"  class="mr-2">
          <label for="{{todo.name}}">{{todo.name}}</label>
          <button class="ml-[30%] text-red-500 hover:text-gray-300" @click.prevent="deleteTodo(todo)">supprimer</button>
          </li>
      </ul>
    </main>
    <footer class="mt-3 flex" v-show="toDolength > 0">
      <span> <strong>{{notdo}}</strong>  {{notdo>1?'taches' : 'tache' }} à faire</span>
      <div class="ml-[35px]">
        <ul class="flex">
          <li class="mr-4 " :class="filter=='all'?'text-blue-900':''" @click.prevent="filter='all'"><a href="#">Toutes</a></li>
          <li class="mr-4" :class="filter=='todo'?'text-blue-900':''" @click.prevent="filter='todo'"><a href="#">A faire</a></li>
          <li class="mr-4" :class="filter=='done'?'text-blue-900':''" @click.prevent="filter='done'"><a href="#">Faites</a></li>
        </ul>
      </div>
    </footer>
  </div>
  <div class="w-1/3"></div>
</div>
</template>
<script>
  export default {
    data() {
      return {
        todos : [
          {
            name : 'Tache 1',
            completed : false
          },
           {
            name : 'Tache 2',
            completed : true
          }
        ],
        newTodo : '',
        allDone : false,
        filter : 'all'
      }
    },
    methods : {
      addTodo () {
        if(this.newTodo != ''){

          this.todos.push({
            completed : false,
            name : this.newTodo
          })
          this.newTodo = ''
        }
      },
      deleteTodo (thetodo) {
        this.todos = this.todos.filter(todo => todo != thetodo)
      }
     
     

    },
    computed : {
      allDone : {
        get() {
          return this.notdo == 0
        },
        set(value) {
          this.todos.forEach(todo => {
            todo.completed = value
          })
        }
      },
       notdo() {
        return  this.todos.filter(todo => !todo.completed).length
       },
       filteredTodos () {
         if(this.filter == 'todo') {
           return this.todos.filter(todo => !todo.completed)
         }else if(this.filter == 'done'){
            return this.todos.filter(todo => todo.completed)
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
