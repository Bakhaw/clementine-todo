<template>
  <ul class="Todos__list">
    <li class="Todos__list__item" v-for="(todo, index) in todos" :key="todo.id">
      <span>{{ todo.title }}</span>
      <!-- <span @click="toggleCompleteTodo(index)">Complete</span> -->
      <img src="../icons/delete-icon.svg" @click="removeTodo(index)">
    </li>
  </ul>
</template>

<script>
export default {
  name: "TodosList",
  props: ["todos", "removeTodo"]
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
}
.Todos__list__item span {
  text-transform: capitalize;
  color: #212121;
  font-size: 20px;
}
.Todos__list__item img {
  cursor: pointer;
  height: 12px;
  width: 12px;
}
</style>
