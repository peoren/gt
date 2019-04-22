<template>
    <div class="imformation">
        <!-- slogan -->
        <p class="slogan">Eyebrow Pencil (Cartridge)</p>
        <!-- 商品名称 -->
        <p class="title">眉眼笔芯</p>
        <!-- 商品规格 -->
        <div class="spec">
            <span>¥200</span> / <span>0.1g</span>
        </div>
        <!-- 商品评价星级 -->
        <div class="review">
            <span ref="star">
                <i class="iconfont icon-wujiaoxing"></i>
                <i class="iconfont icon-wujiaoxing"></i>
                <i class="iconfont icon-wujiaoxing"></i>
                <i class="iconfont icon-wujiaoxing"></i>
                <i class="iconfont icon-wujiaoxing"></i>
            </span>
            <a href="javascript">共0人评价</a>
        </div>
        <!-- 商品简介 -->
        <div class="introduce">
            <p>给予睫毛光泽保湿印象的黑色，订制根根浓翘睫毛。</p>
        </div>
        <!-- 购买区域 -->
        <buy></buy>
        <!-- 产品详情使用说明 -->
        <suggest />
    </div>
</template>
<script>
import buy from '@/views/detail/Buy.vue';
import suggest from '@/views/detail/Suggest.vue';

export default {
    name:'imformation',
    data(){
        return{
            marks:''
        }
    },
    components:{
        buy,
        suggest
    },
    computed:{
    },
    methods:{
        setStar:function(i){
            const that = this;
            for(let j=0;j<i;j++){
                that.$refs.star.children[j].style.color="#333333"
            }
        }
    },
    created:function(){
        this.marks = 4;
    },
    mounted:function(){
        this.setStar(this.marks);
    }
}
</script>
<style scoped>
  .imformation{
      float: right;
      width: 50%;
      height: 600px;
      box-sizing: border-box;
      padding: 70px 0 0 150px;
  }
  .slogan{
      font-size: 20px;
      color: #000;
      line-height: 20px;
      font-weight: 500;
  }
  .title{
      font-size: 24px;
      color: #333;
      font-weight: 300;
      line-height: 24px;
      margin: 15px 0 20px;
  }
  .spec{
      color: #333;
      font-size: 20px;
      line-height: 20px;
      font-weight: 600;
  }
  .spec span{
      font-size: 16px;
  }
  .review{
      margin: 20px 0;
  }
  .review span{
      color: #bbb;
  } 
  .review a{
      margin-left: 10px;
      font-size: 14px;
      color: #333;
  }
  .introduce{
      width: 280px;
      font-size: 16px;
      color: #666;
      font-weight: 500;
      line-height: 18px;
  }
</style>


