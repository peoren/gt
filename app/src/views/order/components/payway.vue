<template>
    <div class="payway">
        <div class="way">
            支付方式
        </div>
        <div class="text">
            <div style="line-height:20px;float:left;margin-right:7px">
             <img src="../../../assets/order/alipay.png" alt="" >
            </div>
            <div>支付宝</div>
        </div>
    </div>
</template>
<script>
export default {
    name:'payway',
}
</script>
<style scoped>
    .payway{
        margin-top: 25px;
    }
    .way{
        text-align: left;
        color: #a0a0a0;
        font-size: 12px;
        padding: 15px 0 15px 23px;
        border-top:1px solid #a0a0a0;
        border-bottom:1px solid #a0a0a0;
    }
    .text{
        text-align: left;        
        color: #464646;
        font-size: 12px;
        padding: 20px 0 0 23px;
    }
</style>

