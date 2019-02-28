<template>
  <ul class="todo-list">
    <li
      class="todo"
      v-bind:class="{ 'todo-completed': todo.completed }"
      v-for="(todo, index) in todos"
      :key="todo.id"
    >
      <todo-left-content
        v-bind:todo="todo"
        v-bind:index="index"
        v-bind:editTodo="editTodo"
        v-bind:toggleCompleteTodo="toggleCompleteTodo"
      />
      <todo-actions
        v-bind:todo="todo"
        v-bind:index="index"
        v-bind:editTodo="editTodo"
        v-bind:removeTodo="removeTodo"
      />
    </li>
  </ul>
</template>

<script>
import TodoActions from "./TodoActions.vue";
import TodoLeftContent from "./TodoLeftContent.vue";

export default {
  name: "TodosList",
  components: {
    TodoActions,
    TodoLeftContent
  },
  props: ["todos", "removeTodo", "editTodo", "toggleCompleteTodo"]
};
</script>

<style>
.todo-list {
  max-height: 390px;
  overflow: scroll;
}
.todo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 70px;
  position: relative;
}
.todo-completed {
  opacity: 0.7;
}
.todo-completed:after {
  position: absolute;
  height: 2px;
  background: #6a57f8;
  content: "";
  left: 0;
  right: 0;
  width: 95%;
  margin: auto;
}
</style>
