<template>
  <div id="app">
    <div class="todos-container">
      <todos-header v-bind:addTodo="addTodo"/>
      <todos-list
        v-bind:todos="todos"
        v-bind:removeTodo="removeTodo"
        v-bind:editTodo="editTodo"
        v-bind:toggleCompleteTodo="toggleCompleteTodo"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TodosHeader from "./TodosHeader.vue";
import TodosList from "./TodosList.vue";

export default {
  beforeMount() {
    this.fetchTodos();
  },
  name: "app",
  components: {
    TodosHeader,
    TodosList
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    async fetchTodos() {
      const API_URL = "https://jsonplaceholder.typicode.com/todos";
      let { data } = await axios.get(API_URL);
      data.forEach(element => {
        element.editing = false;
      });
      this.todos = data;
    },
    addTodo(newTodo) {
      if (newTodo === "") return;

      this.todos.unshift({
        id: this.todos.length,
        title: newTodo,
        completed: false,
        editing: false
      });
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    editTodo(index) {
      const selectedTodo = this.todos[index];
      if (selectedTodo.completed) return;
      selectedTodo.editing = !selectedTodo.editing;
    },
    toggleCompleteTodo(index) {
      const selectedTodo = this.todos[index];
      selectedTodo.editing = false;
      selectedTodo.completed = !selectedTodo.completed;
    }
  }
};
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>

<style>
* {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
}
ul {
  padding: 0;
  margin: 0;
}
li {
  list-style-type: none;
}
#app {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to right bottom,
    #7641f8,
    #6f4df9,
    #6a57f8,
    #6560f7,
    #6268f6
  );
}
.todos-container {
  display: flex;
  flex-direction: column;
  min-height: 500px;
  width: 400px;
  border-radius: 2px;
  background: #fff;
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.3), 0 5px 15px rgba(0, 0, 0, 0.06);
  position: relative;
}
</style>
