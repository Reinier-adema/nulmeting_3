<template>
  <div>
    <nuxt-link to="test">test</nuxt-link>
    <form>
      <input type="button" value="Submit" @click="todos()">
    </form>
    <table id="table">
      <thead>
        <tr>
          <td>
            Assignee
          </td>
          <td>
            Due date
          </td>
          <td>
            Description
          </td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todos in items">
          <td>{{todos.assignee}}</td>
          <td>{{
            todos.dueDateTime.split("T")[0] + " at " + 
            todos.dueDateTime.split("T")[1].split(":")[0] + ":" + 
            todos.dueDateTime.split("T")[1].split(":")[1]}}
          </td>
          <td>{{todos.description}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data(){
    return {
      items: this.$store.state.todos
    }
  },
  methods: {
    async todos() {
      let x = await this.$store.dispatch('get')
      .then(function (response) {
        return response;
      });
      this.$store.commit('show', x);
    }
  }
}
</script>

<style scoped>
table, tr, td {
  border: 1px solid black;
}
</style>