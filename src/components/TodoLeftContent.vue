<template>
  <div class="todo-left-content">
    <img
      class="todo-toggle-complete"
      src="../../static/clementine.png"
      @click="toggleCompleteTodo(index)"
    >
    <div class="todo-title">
      <span v-if="!todo.editing">{{ todo.title }}</span>
      <v-text-field
        autofocus
        solo
        class="edit-todo-input"
        color="#0c1e29"
        label="Type here and press Enter"
        v-else
        v-model="todo.title"
        @keyup.enter="editTodo(index)"
      ></v-text-field>
    </div>
  </div>
</template>


<script>
export default {
  name: "TodoLeftContent",
  props: ["todo", "index", "editTodo", "toggleCompleteTodo"]
};
</script>

<style>
.todo-left-content {
  display: flex;
  align-items: center;
  width: 200px;
}
.todo-toggle-complete {
  cursor: pointer;
  height: 22px;
  width: 22px;
  margin-right: 10px;
}
.todo-title {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.todo-title span {
  text-transform: capitalize;
  color: #212121;
  font-size: 20px;
  width: 230px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.edit-todo-input {
  margin-top: 25px !important;
  width: 230px;
}
</style>
