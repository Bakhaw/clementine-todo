<template>
  <ul class="Todos__list">
    <li
      class="Todos__list__item"
      v-bind:class="{ Todo__completed: todo.completed }"
      v-for="(todo, index) in todos"
      :key="todo.id"
    >
      <div class="Todos__list__item__left">
        <img src="../../static/clementine.png" @click="toggleCompleteTodo(index)">
        <span>{{ todo.title }}</span>
      </div>

      <div class="Todos__list__item__actions">
        <img src="../../static/edit-icon.svg" @click="editTodo(index)">
        <img src="../../static/remove-icon.svg" @click="removeTodo(index)">
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TodosList",
  props: ["todos", "toggleCompleteTodo", "removeTodo", "editTodo"]
};
</script>

<style>
.Todos__list {
  max-height: 390px;
  overflow: scroll;
}
.Todos__list__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 70px;
  position: relative;
}
.Todos__list__item__left {
  display: flex;
  align-items: center;
  width: 200px;
}
.Todos__list__item__left img {
  height: 22px;
  width: 22px;
  margin-right: 10px;
}
.Todos__list__item__left span {
  text-transform: capitalize;
  color: #212121;
  font-size: 20px;
  width: 150px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.Todos__list__item__actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.Todos__list__item__actions img {
  cursor: pointer;
  height: 17px;
  width: 17px;
  margin-left: 20px;
}
.Todo__completed {
  opacity: 0.7;
}
.Todo__completed:after {
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
