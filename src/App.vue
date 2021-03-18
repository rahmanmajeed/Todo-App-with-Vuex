<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >

      <v-spacer></v-spacer>

      <v-btn
      >
        <span class="mr-2">Todo-App</span>
        <!-- <v-icon>mdi-open-in-new</v-icon> -->
      </v-btn>
    </v-app-bar>

    <v-main>
      <TODO :item='updateItem' @resetUpdate="resetUpdate"/>
      <TODOLIST/>
      <TODOITEM @updateTodo="setUpdateForm" :resetEdit ="edit"/>
    </v-main>
  </v-app>
</template>

<script>
import TODO from './components/TodoForm'
import TODOLIST from './components/TodoList'
import TODOITEM from './components/TodoItem'

export default {
  name: 'App',

  components: {
    TODO, TODOLIST, TODOITEM
  },

  data: () => ({
    updateItem: [],
    edit: false
  }),
  methods: {
    setUpdateForm (item) {
      this.updateItem = item
    },
    resetUpdate () {
      this.edit = true
    }
  }
}
</script>
