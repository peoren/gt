<template>
    <div class="order_pay">
        <left1 />
        <right1 />
    </div>
</template>
<script>
import left1 from '@/views/order/components/left1.vue'
import right1 from '@/views/order/components/right1.vue'
export default {
    components:{
        left1,
        right1
    }
    
}
</script>
<style scoped>
    .order_pay{
        width: 80%;
        max-width: 1440px;
        min-width: 1024px;
        margin: 0 auto;
    }
</style>


