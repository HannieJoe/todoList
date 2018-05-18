<template>
    <div :class="['todo-item',todo.completed?'completed':'']">
        <input type="checkbox" class="toggle" v-model="todo.completed">
        <label>{{todo.content}}</label>
        <button class="destory" @click="deleteTodo(todo.id)"></button>
    </div>
</template>
<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteTodo(id) {
        this.$emit('delTodo',id);
    }
  }
};
</script>
<style scoped>
.todo-item {
  position: relative;
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  background-color: #fdfdfd;
  border-top: 1px solid #f5f5f5;
  padding-top: 5px;
}
.todo-item > label {
  display: inline-block;
  margin-left: 40px;
}
.toggle {
  position: absolute;
  width: 40px;
  height: 40px;
  text-align: center;
  border: none;
  outline: none;
  margin: 0;
  appearance: none;
}
.toggle:checked{
  background: url("../assets/select.png") no-repeat center center;
}
.completed>label{
  text-decoration: line-through;
  color: #aaa;
}
.destory {
  position: absolute;
  width:40px;
  height: 40px;
  right: 0;
  border: none;
  outline: none;
background-color: transparent;
}
.destory:hover{
background: url("../assets/delete.png") no-repeat center center;
}
</style>
