<template>
  <div class=" banner goods slide-goods">
     <div class="slide">
        <div class="cor">
          <a href="">
            <img src="http://img1.ujipin.com/b393b4ad0d17d06d9e39be46019e3d87?UCloudPublicKey=ucloudjiawoyong@ujipin.cn14466281690001077321672&Expires=1524051644&Signature=XJrYTc6tmoY/aPV3mSJJICzHnT8=&iopcmd=thumbnail&type=5&height=600&format=JPEG" alt="">
          </a>

        </div>
      </div>
    <div class="swiper-wrapper">
      <!-- goods -->
      <div class="swiper-slide" v-for = " goods_id in goods_list " :key = "goods_id.id ">
         <a href="">
            <img width="100%" :src="goods_id.thumbnail" alt=""> 
            <span class="pro-title">{{goods_id.goods_name}}</span>
            <span class="pro-price">{{goods_id.goods_price}}
              <span class="pro-span">{{goods_id.market_price}}</span>
            </span>
           
         </a>  
      </div>
    </div>
    <!-- 轮播小按钮 -->
    <div class="swiper-paginationn paginationn"></div>
  </div>
</template>
<script>
// 引入swiper进行轮播,因为只有banner再用，所以就引导这里
import '../../../../node_modules/swiper/dist/css/swiper.min.css'
import Swiper from 'swiper'

// import axios from 'axios'

export default {
  name: 'AppGoods',
  props: ['goods_id'],
//   data用于循环图片数据
  data () {
      return {
          goods_list: []
      }
  },
  methods: {
    //   获取轮播
        getBanners () {
            this.$http.get('mz/api/v5/home').then( res=>{
                // console.log(res)
                this.goods_list = res.data.data.activity_list[1].goods_list
            })
        },
   },
    // 获取初始数据l
    created () {
            this.getBanners()
    },
    updated () {
        new Swiper('goods_id',{
            pagination :{
                el:'.swiper-pagination'
            }
        })
     }
}
</script>
<style lang="scss">
    .goods {
        height:398px;
        position:relative;
        overflow:hidden;
        margin-top:5px;
        .cor{
            height:187px;
            img{
              height:100%;
              width:100%;
            }
        }
       .swiper-wrapper{
         width:10rem;
         background:#fff;
       }

        .paginationn {
          background:#fff;
            position:absolute;
            bottom:10px;
            z-index:10;

        }
        .swiper-slide {
           width:1.45rem;
           margin-right:0.08rem;
            img{
                height:145px;
            }
          .pro-title{
              padding: 4px 3px;
              display: block;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              color: #4F494B;

          }
          .pro-price{
              font-size: 13px;
              color: #E74C3C;
              display: block;
              padding: 0 3px;
              .pro-span{
                color: #BEBDBB;
                text-decoration: line-through;
                margin-left: 5px;
              }
          }
        }
    }

</style>

