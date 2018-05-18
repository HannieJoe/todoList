import './assets/gloabl.css'
<template>
  <div id="app">
    <div class="container"></div>
    <Header></Header>
    <todo></todo>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.jsx'
import Todo from './components/todo.vue'

export default {
  name: 'App',
  components:{Header,Footer,Todo},
}
</script>

<style scoped>
#app{
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.container{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color:#d7d7d7;
  opacity: 0.6; 
  z-index: -1;
}
</style>
