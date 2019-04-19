<template>
    <div class="shopcartleft">
        <maplist />
        <tablecontain />
        <buttonbox />
    </div>
</template>
<script>
import maplist from '@/views/shopping_cart/components/maplist.vue'
import tablecontain from '@/views/shopping_cart/tablecontain.vue'
import buttonbox from '@/views/shopping_cart/components/buttonbox.vue'
export default {
    components:{
        maplist,
        tablecontain,
        buttonbox
    }
}
</script>

<style scoped>
.shopcartleft{
    width: 75%;
    float: left;
    /* background: yellowgreen; */
}
</style>
