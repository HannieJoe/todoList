<template>
  <section class="real-app">
    <input v-model="inputValue" type="text" class="add-input" autofocus='autofocus' placeholder="接下来要做什么?" @keyup.enter="addTodo">
    <div class="itemList">
      <item v-for="todo in filteredTodos" :key="todo.id" :todo="todo" @delTodo='delTodo'></item>
    </div>
    <tabs :filter="filter" :todos='todos' @toggle='toggle' @clearAll='clearAll'></tabs>
  </section>
</template>
<script>
import Item from "./item.vue";
import Tabs from "./tabs.vue";
export default {
  data() {
    return {
      //   todo: {
      //     id: 0,
      //     content: "this is todo",
      //     completed: false
      //   },
      id: 0,
      inputValue: "",
      todos: [],
      filter: "all"
    };
  },
  components: { Item, Tabs },
  computed: {
    filteredTodos() {
      if (this.filter === "all") {
        return this.todos;
      }
      let completed = this.filter === "completed";
      return this.todos.filter(todo => todo.completed === completed);
    }
  },
  methods: {
    addTodo(e) {
      if (!this.inputValue) return;
      this.todos.unshift({
        id: this.id,
        content: this.inputValue.trim(),
        // content: e.target.value.trim(),
        completed: false
      });
      this.id++;
      this.inputValue = "";
      // e.target.value='';
    },
    delTodo(id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id === id));
    },
    toggle(state) {
      this.filter = state;
    },
    clearAll() {
     this.todos= this.todos.filter(todo => todo.completed == false);
    },
  }
};
</script>

<style scoped>
.real-app {
  position: absolute;
  top: 200px;
  left: 50%;
  bottom: 100px;
  max-height: 660px;
  margin-left: -300px;
  overflow-y: auto;
}
.add-input {
  width: 560px;
  padding-left: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  border: none;
}
.itemList {
  position: relative;
  top: 0;
  bottom: 40px;
  width: 100%;
}
</style>
