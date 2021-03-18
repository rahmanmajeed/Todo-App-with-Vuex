import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    completeItems: [],
    backup_items: [],
    backup_citems: []
  },
  getters: {
    allItems: (state) => state.items,
    allCompleted: (state) => state.completeItems
  },
  mutations: {
    addTodoItem (state, payload) {
      state.items.push(payload)
    },
    setTodoComplete (state, payload) {
      state.items.forEach((element) => {
        if (element.id === payload.id) {
          element.isComplete = true
        }
      })

      const fitems = state.items.filter((element) => element.isComplete === true)
      state.completeItems = fitems
    },
    setUpdateTodo (state, payload) {
      state.items.forEach((element) => {
        if (element.id === payload.id) {
          element.title = payload.title
        }
      })
    },
    deleteTodo (state, id) {
      state.items = state.items.filter(item => item.id !== id)
    },
    filterCompleted (state) {
      state.backup_items = state.items
      const fitems = state.items.filter((element) => element.isComplete === true)
      state.items = fitems
      state.completeItems = fitems
    },
    all (state) {
      state.items = state.backup_items
    },
    clearAll (state) {
      state.items = []
      state.completeItems = []
      state.backup_items = []
      state.backup_citems = []
    },
    clearCompleted (state) {
      state.completeItems = []
      state.items = state.backup_items
      const filtered = state.items.filter((element, index, array) => {
        return element.isComplete !== true
      })
      state.items = filtered
      state.backup_items = filtered
    }
  },
  actions: {
    addTodo ({ commit }, payload) {
      commit('addTodoItem', payload)
    }
  },
  modules: {
  }
})
