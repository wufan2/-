<template>
  <div class="home">
    <app-banner></app-banner>
    <app-rew></app-rew>
    <app-goods></app-goods>
    <app-goodl></app-goodl>
    <app-goodbox></app-goodbox>
    <app-goodboxl></app-goodboxl>
     <app-l></app-l>
   
  </div>
</template>

<script>
// 引入banner
import AppBanner from './Banner'
// 引入rew
import AppRew from './Rew'
// 
import AppGoods from './goods'
// 
import AppGoodl from './goodl'

import AppGoodbox from './goodbox'

import AppGoodboxl from './goodboxl'

//网格轮播练习
 import AppL from './l'
export default {
  name: "home",
  // 注册banner
  components: {
    AppBanner,AppRew,AppGoods,AppGoodl,AppGoodbox,AppGoodboxl,
    AppL
  }
};
</script>
<style lang="scss">
  
</style>


