<template>
  <div id="app">
    <comhead/>
    <router-link to="/"></router-link>
    <router-view/>
  </div>
</template>

<script>
import comhead from '@/components/header/header.vue'
export default {
  components:{
    comhead
  }
}
</script>


<style>
/* 这是测试字段 */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
 
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
