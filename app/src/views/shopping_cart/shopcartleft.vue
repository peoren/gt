<template>
    <div class="shopcartleft">
        <maplist />
        <tablecontain />
    </div>
</template>
<script>
import maplist from '@/views/shopping_cart/components/maplist.vue'
import tablecontain from '@/views/shopping_cart/tablecontain.vue'
export default {
    components:{
        maplist,
        tablecontain
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
