<template>
    <div class="ex">
        <div class="way">
            配送方式
        </div>
        <div class="text">
            <p>快递</p>
            <p>￥12.00</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'ex'
}
</script>
<style scoped>
    .ex{
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
    .text p{
        margin-bottom: 20px;
    }
</style>

