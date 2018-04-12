<template>
  <div id="app">
   
    <app-header></app-header>
    <home></home>
    
   
  </div>
</template>

<script>

// 引入Home组件
 import Home from './components/containers/Home/Home'
//  引入Header组件
  import AppHeader from './components/commons/Header/Header'
export default {
  name: 'App',
  // 注册组件
  components: {
    // HelloWorld
     Home,AppHeader
  }
}
</script>

<style>

</style>
