<template>
    <div class="left">
        <site />
        <ex />
        <payway />
        <invoive />
        <goods />
        <settlement />
    </div>
</template>
<script>
import site from '@/views/order/components/address.vue'
import ex from '@/views/order/components/ex.vue'
import payway from '@/views/order/components/payway.vue'
import invoive from '@/views/order/components/invoive.vue'
import goods from '@/views/order/components/goods.vue'
import settlement from '@/views/order/components/settlement.vue'
export default {
    name: 'left',
    components:{
        site,
        ex,
        payway,
        invoive,
        goods,
        settlement
    }
}
</script>
<style scoped>
.left{
    width: 75%;
    float: left;
}
</style>

