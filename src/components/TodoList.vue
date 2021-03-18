<template>
  <v-container fluid>
    <v-row class="d-flex justify-center">
      <v-col cols="12" sm="10" md="5" class="d-flex pl-12 ml-12">
        <v-btn color="success" class="mr-4" @click="all()">
          All
        </v-btn>

        <v-btn color="error" class="mr-4" @click="clearAll()">
          Clear
        </v-btn>

        <v-btn color="info" @click="completed()">
          Completed
        </v-btn>
        <span class="ml-3"></span>
        <v-btn color="warning" @click="clearCompleted()">
          Clear Completed
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    setUpdate (item) {
      this.$emit('setUpdateForm', item)
    },
    completed () {
      this.$store.commit('filterCompleted')
    },
    all () {
      this.$store.commit('all')
    },
    clearAll () {
      this.$store.commit('clearAll')
    },
    clearCompleted () {
      this.$store.commit('clearCompleted')
    }
  }
}
</script>
