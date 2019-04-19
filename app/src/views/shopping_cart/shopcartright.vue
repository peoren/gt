<template>
    <div class="shopcartright">
        <helpbox />
        <billbox />
    </div>
</template>
<script>
import helpbox from '@/views/shopping_cart/components/helpbox.vue'
import billbox from '@/views/shopping_cart/components/billbox.vue'
export default {
    components:{
        helpbox,
        billbox
    }
}
</script>
<style scoped>
    .shopcartright{
        width: 25%;
        min-height: 769px;
        float: right;
        background: #fafafa;

    }
</style>
