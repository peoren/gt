<template>
    <div class="left1">
        <p class="paycheck">订单付款</p>
        <div class="text">
            <img src="../../../assets/order/yes.png" alt="">
            <p style="padding:20px 0">感谢光临，您的订单已生成，请尽快完成付款</p>
            <p style="font-size:12px;padding-bottom:20px">支付方式： 支付宝</p>
            <button>立即支付</button>
        </div>
        <div class="msg">
            <div class="leftall">
                <p>订单号：<span>1233344</span></p>
                <p>订单商品数量：<span>2</span></p>
                <p>收货信息：收货人：<span>电脑</span></p>
                <p class="back">地区：<span>威威</span></p>
                <p class="back">手机：<span>123354345545</span></p>
                <p class="back">邮编：<span>1233344</span></p>
                <a href="">查看订单</a>
            </div>
            <div class="right">
                 <p>应付金额：￥<span>2300</span>.00</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.left1{
    width: 75%;
    float: left;
}
.paycheck{
    font-size: 24px;
    text-align: left;
    color: #000000;
    margin: 30px 0;
}
.text{
    text-align: center;
    color: #000000;
    padding: 100px 0 80px;
    font-size: 14px;
    border-top: 1px solid #a0a0a0;
    border-bottom: 1px solid #a0a0a0;
}
button{
    font-size: 16px;
    cursor: pointer;
    border: none;
    background-color: black;
    color: aliceblue;
    padding: 14px 40px;
}
.msg{
    margin: 20px;
}
.leftall{
    width: 50%;
    font-size: 12px;
    text-align: left;
}
.back{
    margin-left: 60px;
}
.leftall p{
    margin-bottom: 10px;
}
.right{
    /* width: 30%; */
    float: right;
    text-align: right;
}
</style>
