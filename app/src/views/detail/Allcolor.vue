<template>
    <div class="allcolor" @click="changeColor(zindex)" >
        <div class="colorpic" :style="'background:'+zz.color"></div>
        <span class="colorname">#{{zz.colorname}}</span>
        <span class="iconfont icon-xiala"></span>
    </div>
</template>
<script>
export default {
    name:'allcolor',
    props:["zz","zindex"],
    methods:{
        //点击时通过触发父组件的方法，修改选中的颜色
        changeColor:function(index){
            // this.$emit('changechoosed',index)
            this.$emit('changeChoosed',index);
            console.log(index);
        }
    }
}
</script>
<style scoped>
   .allcolor{
       width: 100%;
       height: 44px;
       box-sizing: border-box;
       padding: 12px;
   }
   .allcolor:hover{
       background: #eee;
   }
   .allcolor .colorpic{
       width: 20px;
       height: 20px;
       background: rgb(65, 52, 52);
       float: left;
       margin-right: 40px;
   }
   .allcolor span{
       line-height: 20px;
       color: #999;
   }
</style>


