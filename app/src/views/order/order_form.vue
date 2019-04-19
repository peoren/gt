<template>
    <div class="order">
        <left />
        <right />
    </div>
</template>
<script>
import left from '@/views/order/components/left.vue'
import right from '@/views/order/components/right.vue'
export default {
    name:'order',
    components:{
        left,
        right
    }
}
</script>
<style scoped>
    .order{
        margin: 0 auto;
        width: 80%;
        max-width: 1440px;
        min-width: 1024px;
    }
</style>
