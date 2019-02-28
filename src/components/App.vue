<template>
  <div id="app">
    <v-text-field
      autofocus
      color="#918CFC"
      label="What needs to be done"
      v-model="newTodo"
      @keyup.enter="addTodo"
    ></v-text-field>

    <ul>
      <li v-for="(todo, index) in todos" :key="todo.id">
        <span>{{ todo.name }}</span>
        <span @click="removeTodo(index)">Remove</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      newTodo: "",
      todos: []
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo === "") return;

      this.todos.push({
        id: this.todos.length,
        name: this.newTodo,
        completed: false
      });
      this.newTodo = "";
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    }
  }
};
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>
