<template>
    <div class="settlement clear">
        <div>
        <ul>
            <li><span>商品总金额：￥</span><span>1000.00</span></li>
            <li><span>运费：￥</span><span>12.00</span></li>
            <li><span>订单优惠：￥</span><span>0.00</span></li>
            <li><span>总金额：￥</span><span>1000.00</span></li>
        </ul>
        </div>
        <div>
            <div class="bu"><button>返回购物袋</button></div>
            <div class="bu"><button>确认订单</button></div>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
    .settlement{
        color: #000000;
        font-size: 14px;
        padding: 25px 0;
        border-bottom:1px solid #a0a0a0;
        text-align: right;
    }
    button{
        cursor: pointer;
        border: none;
        background-color: black;
        color: aliceblue;
        padding: 14px 40px;
    }
    .bu{
        margin-top: 10px;
    }
</style>

