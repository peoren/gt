<template>
    <div class="goods">
        <div class="way">
            <table>
                <thead>
                    <td>商品</td>
                    <td>价格</td>
                    <td>数量</td>
                    <td>总计</td>
                </thead>
                <tbody>
                    <detail />
                </tbody>
            </table>
        </div>
       
    </div>
</template>
<script>
export default {
    name:goods,
    component:{
        detail
    }
}
</script>
<style scoped>
    .way{
        color: #a0a0a0;
        font-size: 12px;
        padding: 15px 0 15px 23px;
        border-top:1px solid #a0a0a0;
        border-bottom:1px solid #a0a0a0;
    }
    
</style>

