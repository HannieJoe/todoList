<template>
  <div class="helper">
    <span class="left">{{unFinishedTodoLength}} items left</span>
    <span class="tabs">
      <span v-for="state in states" :key="state" :class="['state',filter===state?'actived':'']" @click="toggleFilter(state)">{{state}}</span>
    </span>
    <span class="clearAll" @click="clearAllCompleted"> Clear Completed</span>
  </div>
</template>
<script>
export default {
  props: {
    filter: {
      type: String,
      required: true
    },
    todos: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      states: ["all", "active", "completed"]
    };
  },
  computed: {
    unFinishedTodoLength() {
      return this.todos.filter(todo => !todo.computed).length;
    }
  },
  methods: {
    toggleFilter(state) {
      this.$emit("toggle", state);
    },
    clearAllCompleted() {
      this.$emit("clearAll");
    }
  }
};
</script>
<style scoped>
.helper {
  position: relative;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-top: 1px solid #f5f5f5;
  background: #fdfdfd;
}
.left {
  float: left;
  margin-left: 10px;
}
.clearAll {
  float: right;
  margin-right: 10px;
  cursor: pointer;
}
.tabs {
  margin-left: 120px;
  cursor: pointer;
}
.state {
  margin-left: 5px;
  padding: 2px 5px;
}
.actived {
  border: 1px solid #f88;
  border-radius: 4px;
}
</style>

