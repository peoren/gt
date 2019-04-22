<template>
    <div class="shopGuess">
        <h3>推荐商品</h3>
        <goods v-for="(item,index) in shopGuesss" :key="index" :id="index"></goods>
    </div>
    
</template>
<script>
import goods from '@/views/detail/Goods.vue';
export default {
    name:'shopGuess',
    components:{
       goods, 
    },
    computed: {
        shopGuesss () {
        return this.$store.state.detail.shopGuess
        }
    },
    created(){
        console.log(this.$store.state.detail.num)
    }
}
</script>

<style scoped>
  .shopGuess{
      float: left;
      width: 100%;
      margin-top: 85px;
      height: 400px;
  }
  h3{
      width: 100%;
      font-size: 28px;
      font-weight: 300;
      color: #333;
      line-height: 40px;
      text-align: center;
      margin-bottom: 55px;
  }
</style>


