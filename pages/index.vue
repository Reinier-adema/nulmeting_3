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
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  mounted: function(){
    let table = document.getElementById("table");
      let todos = this.$store.state.todos;
      for(let j in todos){
        let tr = document.createElement("tr");
        for (let i in todos[j])
        {
          if(i != "id"){
            let td = document.createElement("td");
            if(i == "dueDateTime")
            {
              let time = todos[j][i].split("T");
              td.innerHTML = time[0] + " at " + time[1].split(":")[0] + ":" + time[1].split(":")[1]; 
            }      
            else
              td.innerHTML = todos[j][i];
            tr.appendChild(td);
          }
        }
        table.appendChild(tr);
      }
  },
  methods: {
    async todos() {
      let x = await this.$store.dispatch('get')
      .then(function (response) {
        return response;
      });
      var before = this.$store.state.todos.length;
      this.$store.commit('show', x);     
      var after = this.$store.state.todos.length;
      if(before < after){  
        let table = document.getElementById("table");
        let tr = document.createElement("tr");
        for (let i in x.todo)
        {
          if(i != "id"){
            let td = document.createElement("td");
            if(i == "dueDateTime")
            {
              let time = x.todo[i].split("T");
              td.innerHTML = time[0] + " at " + time[1].split(":")[0] + ":" + time[1].split(":")[1]; 
            }      
            else
              td.innerHTML = x.todo[i];
            tr.appendChild(td);
          }
        }
        table.appendChild(tr);
      }
    }
  }
}
</script>

<style scoped>
table, tr, td {
  border: 1px solid black;
}
</style>