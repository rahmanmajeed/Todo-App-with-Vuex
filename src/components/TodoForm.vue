<template>
  <v-container fluid>
      <span class="pa-5 d-flex justify-center mb-10 headline">{{title}}</span>
      <v-form @submit.prevent="todoItemAdd">
    <v-container>
      <v-row class="d-flex justify-center">

        <v-col
          cols="12"
          sm="6"
          md="5"
        >
          <v-text-field
           v-model="todoItem"
            label="TODO"
            placeholder="Enter Todo  Name"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
      </v-form>
  </v-container>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import { v4 } from 'uuid'
export default {
  props: ['item'],
  data () {
    return {
      title: 'TODO APP',
      todoItem: '',
      updateItem: ''
    }
  },
  computed: {
    ...mapGetters(['allItems'])
  },
  watch: {
    item () {
      this.todoItem = this.item.title
      this.updateItem = this.item
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    todoItemAdd () {
      if (this.updateItem) {
        this.updateItem.title = this.todoItem ? this.todoItem : this.updateItem.title
        console.log(this.updateItem)
        this.$store.commit('setUpdateTodo', this.updateItem)
        this.updateItem = ''
        this.$emit('resetUpdate')
      } else {
        this.addTodo({
          id: v4(),
          title: this.todoItem,
          isComplete: false
        })
      }
      this.todoItem = ''
      console.log(this.allItems)
    }
  }
}
</script>
