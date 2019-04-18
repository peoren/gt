<template>
    <div id="shopcart">
        <shopcartleft />
    </div>
</template>
<script>
import shopcartleft from '@/views/shopping_cart/shopcartleft.vue'
export default {
    components:{
        shopcartleft
    }
}
</script>
<style scoped>
#shopcart{
    width: 80%;
    max-width: 1440px;
    min-width: 1024px;
    background: rgb(70, 67, 73);
    margin: 0 auto;
    /* height: 50px; */
}
</style>
