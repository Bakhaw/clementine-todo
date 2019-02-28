<template>
  <div id="app">
    <div>
      <v-text-field
        autofocus
        color="#918CFC"
        label="What needs to be done"
        v-model="newTodo"
        @keyup.enter="addTodo"
      ></v-text-field>
    </div>
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
    }
  }
};
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>
