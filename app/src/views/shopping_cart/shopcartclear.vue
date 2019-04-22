<template>
    <div class="shopcartclear">
        <div class="shopcartclear_title">
            您的购物袋里还没有商品，您可以：
            <br>
            将心愿单中的商品添加进来，或者去首页看看
        </div>
        <div>
        <router-link to='/a' class="" tag='p'>
            继续购物
        </router-link>
        <router-link to='/' class="shopcartclear_myheart" tag='p'>
            我的心愿单
        </router-link>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.shopcartclear{
    width: 80%;
    height: 195px;
    padding:160px 0;
    margin: 0 auto;
}
.shopcartclear_title{
    width: 100%;
    text-align: center;
    font-size: 16px;
    color: #464646;
    line-height: 28px;
}
.shopcartclear p{
    margin: 30px auto 0;
    font-size: 14px;
    height: 47px;
    background: #0f0c1d;
    width: 183px;
    color: #fff;
    cursor: pointer;
    text-align: center;
    line-height: 47px;
}
.shopcartclear .shopcartclear_myheart{
    background: #fff;
    line-height: 45px;
    color: #464646;
    height: 45px;
    width: 181px;
    border: 1px solid #464646;
}
</style>
