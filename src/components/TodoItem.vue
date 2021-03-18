<template>
  <v-container fluid>
    <v-row class="d-flex justify-center">
      <v-col cols="12" sm="6" md="5">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  Todo Name
                </th>
                <th class="text-left">
                  Status
                </th>
                 <th class="text-left">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in allItems" :key="index">
                <td>
                    <span v-if="item.isComplete" class="text-decoration-line-through">{{ item.title }}</span>
                    <span v-else class="text-decoration-none">{{ item.title }}</span>
                </td>
                <td>
                    <div>
                        <span v-if="item.isComplete" class="green--text text--lighten-1"> Yes</span>
                        <span v-else class="red--text text--lighten-1"> NO </span>
                    </div>
                    </td>
                <td>
                    <div v-if="allItems.length > 0" v-show="!item.isComplete">
                    <v-btn class="ma-2" color="primary" dark small @click="setComplete(item)" data-toggle title="mark complete">
                  <v-icon dark>
                    mdi-checkbox-marked-circle
                  </v-icon>
                </v-btn>
                <v-btn class="ma-2" color="error" dark small @click="deleteItem(item)" data-toggle title="remove">
                  <v-icon dark>
                    mdi-cancel
                  </v-icon>
                </v-btn>
                <v-btn class="ma-2" color="purple" dark small @click="updateTodo(item)" data-toggle title="edit">
                  <v-icon dark>
                    mdi-wrench
                  </v-icon>
                </v-btn>
                    </div>
                </td>
              </tr>

            </tbody>
          </template>
        </v-simple-table>

      </v-col>
    </v-row>
     <v-row class="d-flex justify-center">

      <v-col cols="6" sm="6" md="5">
            <span class="ml-5"></span>
           <span class="red--text text--lighten-1">Total: {{itemCount}}</span>
            <span class="ml-12"></span>
            <span class="ml-12"></span>
            <span class="ml-12"></span>
            <span class="ml-12"></span>
            <span class="ml-12"></span>
           <span text class="red--text text--lighten-1">Completed: {{completedItemCount}}</span>
      </v-col>
     </v-row>
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  props: ['resetEdit'],
  data () {
    return {
      edit: false,
      itemUpdateText: ''
    }
  },
  computed: {
    ...mapGetters(['allItems', 'allCompleted']),
    itemCount () {
      return this.allItems.length
    },
    completedItemCount () {
      return this.allCompleted.length
    }
  },
  watch: {
    resetEdit () {
      if (this.resetEdit) {
        this.edit = false
        this.itemUpdateText = ''
      }
    }
  },
  methods: {

    setComplete (item) {
      this.$store.commit('setTodoComplete', item)
    },
    updateTodo (item) {
      this.itemUpdateText = ''
      this.edit = this.edit !== true
      this.itemUpdateText = item
      this.$emit('updateTodo', this.itemUpdateText)
    },

    deleteItem (item) {
      this.$store.commit('deleteTodo', item.id)
    }
  }
}
</script>
