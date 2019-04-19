<template>
    <div class="tablehead">
        <div>
            <span>商品</span>
            <span>价格</span>
            <span>数量</span>
            <span>总计</span>
        </div>

    </div>
</template>
<script>

export default {
    
}
</script>
<style scoped>
.tablehead{
    box-sizing: border-box;
    height: 50px;
    width: 100%;
    /* background: rgb(60, 50, 205); */
    border-top: 1px solid #a0a0a0;
    border-bottom: 1px solid #a0a0a0;
    padding: 15px 0;
    text-align: left;
}
span{
    display: inline-block;
    width: 14%;
    height: 18px;
    color: #a0a0a0;
    font-size: 12px;
}
span:nth-of-type(1){
    width: 58%;
}
</style>

