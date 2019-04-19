<template>
    <div class="count" @click="changeCount(cindex)" >
        <span class="countnum">数量:{{cindex}}</span>
    </div>
</template>
<script>
export default {
    name:'count',
    props:["cindex"],
    methods:{
        //点击时通过触发父组件的方法，修改选中的颜色
        changeCount:function(index){
            this.$emit('changeCount',index);
        }
    }
}
</script>
<style scoped>
   .count{
       width: 100%;
       height: 44px;
       box-sizing: border-box;
       padding: 12px;

   }
   .count:hover{
       background: #eee;
   }
   .count span{
       line-height: 20px;
       color: #999;
   }
</style>


