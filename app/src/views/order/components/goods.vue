<template>
    <div class="goods">
        <div class="way clear">
            <div class="one">商品</div>
            <div class="two">价格</div>
            <div class="two">数量</div>
            <div class="two">总计</div>
        </div>
        <div class="text clear"  v-for="msg in msgs" :key="msg.id">
            <div class="one">
                <div class="goodsimg">
                    <img src="../../../assets/order/1.jpg" alt="">
                </div>
                <div class="goodsmsg">
                     <div class="goodsname" style="float:none">
                        {{msg.ename}}
                    </div>
                    <div class="goodsname" style="float:none">
                        {{msg.name}}
                    </div>
                    <div class="goodsSize" style="float:none">
                        {{msg.size}}
                    </div>
                </div>
            </div>
            <div class="two">
                ￥{{msg.price}}.00
            </div>
            <div class="two">
                <span style="padding-left:10px">{{msg.amount}}</span>
            </div>
            <div class="two">
                ￥{{msg.allPrice}}.00
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'goods',
    data(){
        return{
        msgs:[
          {
                id:1,
                img:'1.jpg',
                ename:'BRIGHTENING BODY SERUM',
                name:'烂七八糟',
                size:'100ml',
                price:100,
                amount:1,
                allPrice:100
            },
            {
                id:2,
                img:'1.jpg',
                ename:'BRIGHTENING BODY SERUM',
                name:'烂七八糟',
                size:'100ml',
                price:100,
                amount:1,
                allPrice:100
            }
        ]
      }
    }
}
</script>
<style scoped>
    .goods{
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
    .way div{
        float: left;
    }
    .text{
        text-align: left;
        padding: 15px 0;
        color: #464646;
        border-bottom:1px solid #a0a0a0;
    }
    .text div{
        float: left;
    }
    .one{
        width: 58%;
    }
    .two{
        width: 14%;
    }
    .goodsimg{
        width: 45%;
        float: none;
    }
    .goodsimg img{
        width: 200px;
        height: 200px;
    }
    .goodsmsg{
        float: none;
        width: 55%;
    }
    .goodsname{
        margin-bottom: 10px;
        float:none;
    }
    .goodsSize{
        font-size: 12px;
        float:none;
    }
</style>

