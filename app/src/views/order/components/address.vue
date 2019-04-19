<template>
    <div class="address">
       <div class="way">收货信息</div>
       <div class="content">
           <div class="fl">
               <input type="radio" name="" id="">
            </div>
           <div class="clear text">
               <div class="fl">收货人：</div>
               <div class="fl">123</div>
           </div>
           <div class="clear text">
               <div class="fl">联系电话：</div>
               <div class="fl">123</div>
           </div>
          <div class="clear text">
               <div class="fl">收货地址：</div>
               <div class="fl">123</div>
           </div>
           <div class="clear text">
               <div class="fl">邮编：</div>
               <div class="fl">123</div>
           </div>
           <div class="change" >
               <a href="" >修改</a>
           </div>
       </div>
    </div>
</template>
<script>
export default {
    name: 'site',
}
</script>
<style scoped>
.address{
    margin-top: 25px;
}
.way{
    color: #a0a0a0;
    font-size: 12px;
    text-align: left;
    padding: 15px 0 15px 23px;
    border-top:1px solid #a0a0a0;
    border-bottom:1px solid #a0a0a0;
}
.content{
    color: #464646;
    font-size: 12px;
    padding: 20px 0 0 23px;
}
.text{
    margin: 0 0 15px;
}
.text :nth-child(1){
    text-align: left;
    width: 105px;
}
.fl{
    float: left;
}
.change{
    text-align: left;
    margin-left: 105px;
}
.change a{
    border-bottom: 1px solid #dbdbdb;
    padding-bottom: 5px;
}
</style>

