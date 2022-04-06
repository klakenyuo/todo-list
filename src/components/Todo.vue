 

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
        <li v-for="todo in filteredTodos" v-bind:key="todo.id" class="w-full flex bg-white p-2 border border-rounded  rounded-[5px]"  >
          <div class="w-3/5">
            <input  type="checkbox" name="{{todo.name}} " v-model="todo.completed"  class="mr-2">
            <label :class="todo.completed?'line-through text-gray-400' : '' " for="{{todo.name}}">{{todo.name}}</label>
          </div>
          <button class="w-2/5 text-red-500 hover:text-gray-300" @click.prevent="deleteTodo(todo)">supprimer</button>
          </li>
      </ul>
    </main>
    <footer class="lg:px-9 mt-3 flex w-full" v-show="toDolength > 0">
      <span class="lg:w-1/2 phone:w-1/2"> <strong>{{notdo}}</strong>  {{notdo>1?'taches' : 'tache' }} à faire</span>
      <!-- <div class="lg:w-1/3 phone:hideen"></div> -->
      <div class="lg:w-1/2 phone:w-1/2  ">
        <ul class="flex w-full">
          <li class="w-1/3 lg:mr-4 " :class="filter=='all'?'text-blue-900':''" @click.prevent="filter='all'"><a href="#">Toutes</a></li>
          <li class="w-1/3 lg:mr-4" :class="filter=='todo'?'text-blue-900':''" @click.prevent="filter='todo'"><a href="#">Afaire</a></li>
          <li class="w-1/3 lg:mr-4" :class="filter=='done'?'text-blue-900':''" @click.prevent="filter='done'"><a href="#">Faites</a></li>
        </ul>
      </div>
    </footer>
    <div class="px-9 mt-5  text-center w-full ">
      <span class=" w-full text-center ">

      Made with ❤️ by <a href="http://www.github.com/klakenyuo" class="text-blue-900"> Gilles</a>
      </span>
    </div>
  </div>
  <!-- <div class="w-1/3"></div> -->
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
          },
           {
            name : 'Tache 3',
            completed : false
          },
           {
            name : 'Tache 4',
            completed : false
          },
           {
            name : 'Tache 5',
            completed : false
          },
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
