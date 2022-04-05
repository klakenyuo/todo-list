 

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
    <main class="mt-6 ">
      <ul>
        <li v-for="todo in todos" v-bind:key="todo.id" class="bg-white p-2 border border-rounded  rounded-[5px]" :class="todo.completed?'line-through' : '' " >
          <input  type="checkbox" name="{{todo.name}} " v-model="todo.completed"  class="mr-2">
          <label for="{{todo.name}}">{{todo.name}}</label>
          </li>
      </ul>
    </main>
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
        newTodo : ''
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
     
     

    },
    computed : {
       
    }
  }
</script>

<style >
 
</style>
