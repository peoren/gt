<template>
    <div class="buttonbox">
        <p class="clearShoppingCart">
            清空购物袋
        </p>
        <p class="backHome">
            继续购物
        </p>
        <p class="settleAccounts">
            下单结算
        </p>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.buttonbox{
    width: 100%;
    height: 94px;
    box-sizing: border-box;
    margin: 35px 0 25px 0;
    padding-right: 30px;
}
.buttonbox p{
    font-size: 14px;
    float: left;
    height: 42px;
    border: 1px solid #464646;
    width: 124px;
    color: #464646;
    cursor: pointer;
    text-align: center;
    line-height: 44px;
}
.buttonbox .clearShoppingCart{
    margin-right: 20px;
}
.buttonbox .settleAccounts{
    float: right;
    color: #fff;
    background: #000;
    width: 200px;
}
</style>
