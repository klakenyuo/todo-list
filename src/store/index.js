import vuex from 'vuex'
// import global from 'vue'
const state = {
    todos : [{
        name: 'First task',
        completed : false
    }]
}
    
const mutations = {
    add_Todo (state,name) {
        state.todos.push({
            name :name,
            completed : false
        })
    },
    del_Todo (state,thetodo) {
        state.todos = state.todos.filter(todo => todo != thetodo)
    },
    del_AllTodo (state) {
        state.todos = []
    },
    set_Done (state,value) {
        state.todos.forEach(todo => {
            todo.completed = value
          })
    },
    set_completed (state,{todo}) {
        todo.completed = !todo.completed
    },
}

const getters = {
    todos : state =>state.todos,
    completedTodos : state =>state.todos.filter(todo => todo.completed),
    remainingTodos : state =>state.todos.filter(todo => !todo.completed),
    remainingTodosCount : state =>getters.remainingTodos(state).length,
}

const actions = {
    addTodo (store,name){
        store.commit('add_todo',name)
    },
    setDone(store,value){
        store.commit('set_Done',value)
    }
}

let store = new vuex.Store({
    state : state,
    mutations : mutations,
    getters : getters,
    actions : actions,
    strict : true
})

// global.store = store

export default store