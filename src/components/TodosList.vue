<template>
  <ul class="todo-list">
    <li
      class="todo"
      v-bind:class="{ 'todo-completed': todo.completed }"
      v-for="(todo, index) in todos"
      :key="todo.id"
    >
      <div class="todo-left-content">
        <img
          class="todo-toggle-complete"
          src="../../static/clementine.png"
          @click="toggleCompleteTodo(index)"
        >
        <div class="todo-title">
          <span v-if="!todo.editing">{{ todo.title }}</span>
          <v-text-field
            solo
            class="edit-todo-input"
            color="#0c1e29"
            label="Type here and press Enter"
            v-else
            v-model="todo.title"
            @keyup.enter="editTodo(index)"
          ></v-text-field>
          <!-- <input class="todo-edit-input" type="text" v-else v-model="todo.title"> -->
        </div>
      </div>

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
        <img
          class="todo-actions-icon"
          src="../../static/remove-icon.svg"
          @click="removeTodo(index)"
        >
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TodosList",
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
  width: 150px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.edit-todo-input {
  margin-top: 25px !important;
}
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
