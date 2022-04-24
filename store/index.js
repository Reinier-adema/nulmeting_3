require("dotenv").config();
var axios = require('axios');

export const state = () => ({
    todos: []
})

export const mutations = {
    show(state, todo){
        let todos = state.todos;
        if(todos.filter(function(todoo){return todoo.id == todo.todo.id}).length == 0){
            todos.push(todo.todo);
        }
    }
}

export const actions = {
    async get (){
        var config = {
            method: 'get',
            url: 'https://86a4h9y007.execute-api.eu-west-1.amazonaws.com/development/nulmeting/todo',
            headers: { 
              'x-api-key': process.env.apikey
            }
        }
        let result = await axios(config)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
        return result;
    }
}   

