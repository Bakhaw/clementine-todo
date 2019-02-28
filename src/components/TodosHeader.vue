<template>
  <div class="todos-header">
    <v-text-field
      solo
      class="add-todo-input"
      color="#0c1e29"
      label="Type here and press Enter"
      v-model="inputValue"
      @keyup.enter="handleInputSubmit(inputValue)"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: "TodosHeader",
  data() {
    return {
      inputValue: ""
    };
  },
  methods: {
    handleInputSubmit(newTodo) {
      this.addTodo(newTodo);
      this.inputValue = "";
    }
  },
  props: ["addTodo"]
};
</script>


<style>
.todos-header {
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0c1e29;
  font-size: 33px;
  padding: 40px 0 10px 0;
  background: #00e7a8;
  border-radius: 2px 2px 0 0;
}
.add-todo-input {
  align-self: center;
  width: 300px;
}
.v-input {
  flex: unset !important;
}
</style>
