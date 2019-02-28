<template>
  <div class="todo-actions">
    <img
      class="todo-actions-icon"
      src="../../static/edit-icon.svg"
      v-if="!todo.editing"
      @click="editTodo(index)"
    >
    <img
      class="todo-actions-icon"
      src="../../static/validate-icon.svg"
      v-else
      @click="editTodo(index)"
    >
    <img class="todo-actions-icon" src="../../static/remove-icon.svg" @click="removeTodo(index)">
  </div>
</template>

<script>
export default {
  name: "TodoActions",
  props: ["todo", "index", "editTodo", "removeTodo"]
};
</script>

<style>
.todo-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.todo-actions-icon {
  cursor: pointer;
  height: 17px;
  width: 17px;
  margin-left: 20px;
}
</style>
