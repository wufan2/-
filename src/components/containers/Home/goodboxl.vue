<template>
  <div class="goodboxl goods_box">
      <div class="t">清洁全靠T</div>
      <div class="good_list">
          <ul class="list_ul">
              <li class="list_item" v-for = "goods_id in goods_list" :key="goods_id.id">
                  <a href="">
                      <img width="100%" :src="goods_id.thumbnail" alt="">
                      
                  </a>
                  <div class="goods_list_iofo">
                      <p class="selling_point">{{goods_id.selling_point}}</p>
                      <p class="g-name">{{goods_id.goods_name}}</p>
                      <p class="g-price">
                          ￥{{goods_id.goods_price}}
                          
                          <span class="g-market">￥{{goods_id.market_price}}</span>
                      </p>
                  </div>
              </li>
              <li class="list_item">
                <a href="/mz/v4/activity/aeb89f2bc61e4cce822e64d75437d449">
                    <div class="li_box">
                        <div class="box_t">
                            清洁全靠T
                        </div>
                        <div class="box_num">
                            还有10件生活好物
                        </div>
                    </div>
                    
                </a>
                
              </li>



          </ul>
      </div>
  </div>
</template>
<script>
export default {
  name:'AppGoodboxl',
  data () {
      return {
          goods_list: []
      }
  },
  methods: {
      getList () {
          this.$http.get('mz/api/v5/home').then(res=>{
            //  console.log(res)
             
             this.goods_list = res.data.data.tag_list[1].goods_list

          })
      }
  },
  created () {
      this.getList()
  }
}
</script>
<style lang="scss">
    .goodboxl{
        margin-top:0.1rem;
        // background:#ccc;
         height:623px;

        .t{
            display: block;
            text-align: center;
            color: #4F494B;
            font-size: 15px;
            line-height: 50px;
        }

        .good_list{
            padding:0 0.01rem;

            .list_item{
                width: 1.8rem;
                height:279px;
                background:#fff;
                overflow: hidden;
                float: left;
                position: relative;
                margin-top: 2%;
                border-radius: 5px;
                font-size: 13px;
                box-sizing: border-box;
                margin-left: 0.04rem;

                .selling_point{
                    padding: 5px 8px 0;
                    height: 15px;
                    line-height:15px;
                    text-overflow: ellipsis;
                    color:#000;
                }
                .g-name{
                    line-height: 16px;
                    height: 32px;
                    margin: 8px 0;
                    padding: 0 8px;
                    color:#000;
                    
                }
                .g-price{
                    padding: 0 8px 8px;
                    color: #E74C3C;
                    .g-market{
                        color:#ccc;
                        text-decoration: line-through
                    }

                }
                
                .li_box{
                    position:absolute;
                   
                    top:40%;
                    width:100%;
                    color:#828282;
                }
                .box_t{
                    width:80%;
                    margin:0 auto;
                    text-align:center;
                    
                    line-height:30px;
                    font-size:14px;
                    border-bottom:2px solid #ccc;
                }
                .box_num{
                     width:100%;
                     text-align: center;
                    margin:0 auto;
                }
            }
        }
    }

</style>


