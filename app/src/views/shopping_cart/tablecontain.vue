<template>
    <div class="tablecontain">
        <tablehead />
        <tablebody />
    </div>
</template>
<script>
import tablehead from '@/views/shopping_cart/components/tablehead.vue'
import tablebody from '@/views/shopping_cart/components/tablebody.vue'
export default {
    components:{
        tablehead,
        tablebody
    }
}
</script>

<style scoped>

.tablecontain{
    box-sizing: border-box;
    padding-right: 30px;

}
</style>
