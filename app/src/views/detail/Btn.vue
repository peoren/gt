<template>
    <div class="btn">
        <div v-if="stock>0">
            <div class="shopnow">立即购买</div>
            <div class="shopbag">加入购物袋</div>
        </div>
        <div v-else>
            <div class="notenough">暂时缺货</div>
        </div>
    </div>
</template>
<script>
export default {
    name:'btn',
    props:["stock"]
}
</script>
<style scoped>
    .btn{
        width: 100%;
        height: 108px;
        position: absolute;
        top:44px;
        left: 0;
        user-select:none;
    }
    .shopnow{
        cursor: pointer;
        text-align: center;
        width: 100%;
        height: 44px;
        line-height: 44px;
        font-size: 16px;
        background: #000;
        color: #fff;
        margin-top: 10px;
    }
    .shopnow:hover{
        background: #333;
    }
    .shopbag{
        cursor: pointer;
        text-align: center;
         height: 44px;
        line-height: 44px;
        font-size: 16px;
        width: 100%;
        box-sizing: border-box;
        color: #000;
        border: solid 1px #000;
        margin-top: 10px;
    }
    .shopbag:hover{
        border: solid 1px #666;
        color: #666;
    }
    .notenough{
        cursor: pointer;
        text-align: center;
         height: 44px;
        line-height: 44px;
        font-size: 16px;
        width: 100%;
        box-sizing: border-box;
        color: #000;
        border: solid 1px #000;
        margin:32px 0;
    }
    .notenough:hover{
        border: solid 1px #666;
        color: #666;
    }
</style>


