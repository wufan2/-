<template>
  <div class="banner swiper-banner">
    <div class="swiper-wrapper" >
        <!-- 循环div -->
      <div class="swiper-slide" v-for = " banner in splash_list " :key = "banner.id ">
         <img width="100%" :src="banner.cover" alt="">   
      </div>
    </div>
    <!-- 轮播小按钮 -->
  
    <div class="swiper-pagination pagination"></div>
  </div>
</template>

<script>
// 引入swiper进行轮播
import '../../../../node_modules/swiper/dist/css/swiper.min.css'
import Swiper from 'swiper'

// import axios from 'axios'



export default {
  name:'AppBanner',
  props: ['banner'],
//   data用于循环图片数据
  data () {
      return {
          swiperOption: {
            loop: true,
            autoplay: 1000,
            autoplayDisableOnInteraction: false,
            pagination: '.swiper-pagination',
            
          },
          splash_list: []
      }
  },
  methods: {
    //   获取轮播图
        getBanners () {
            // http://m.ujipin.com/api/v5/home
            this.$http.get('mz/api/v5/home').then( res=>{
                // console.log(res)
                this.splash_list = res.data.data.splash_list
            })
        },
   },
    // 获取初始数据l
    created () {
            this.getBanners()
    },
    updated () {
        new Swiper('.banner',{
            pagination :{
                el:'.swiper-pagination'
            }
        })
     }
}
</script>
<style lang="scss">
    .banner {
        height:187px;
        position:relative;
        overflow:hidden;
        .pagination {
            position:absolute;
            bottom:10px;
            // z-index:10;
        }
    }
</style>

