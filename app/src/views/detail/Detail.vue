<template>
<div class="detail clear">
    <!-- 头部层级导航 -->
    <div class="bread-crumbs">
        <span><a href="/">首页</a></span>
        <span>»</span>
        <span><a href="/">首页</a></span>
        <span>»</span>
        <span><a href="/">首页</a></span>
        <span>»</span>
        <span><a href="/">首页</a></span>
    </div>
    <!-- 上方商品详情区域 -->
    <div class="top">
        <preview :previewSrc="Src"></preview>
        <imformation></imformation>
    </div>
    <!-- 中间推荐商品区域 -->
    <shopGuess />
    <router-view></router-view>
</div>
    
</template>
<script>
import preview from '@/views/detail/Preview.vue';
import imformation from '@/views/detail/Imformation.vue';
import shopGuess from '@/views/detail/ShopGuess.vue';
export default {
    name:'detail',
    components:{
        preview,
        imformation,
        shopGuess
    },
    data() {
        return{
            Src:{
                two:{
                    src:"https://www.cledepeau-beaute.com.cn/public/images/dd/01/9e/327ff5aa48ecfeeff40e53c22343137626e14970.png?1468488644#w",
                }
            }
        }
    },
    computed:{
        
    }
    
}
</script>
<style scoped>
  .detail{
     margin: 0;
     padding: 0; 
     width: 80%;
     margin: 0 auto;
     min-width: 1024px;
     max-width: 1440px;
     text-align: left;
     line-height: 16px;
     
     box-sizing: border-box;
     vertical-align: middle;
  }
  .bread-crumbs{
      font-size: 14px;
      color: #111;
      padding: 10px 0;
  }
  .bread-crumbs a{
      font-size: 12px;
      text-decoration: none;
      color: #111;
  }
  .top{
      width: 100%;
  }
</style>


