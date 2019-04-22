<template>
    <div class="buy" >
        <!-- 颜色选择框 -->
        <div class="colorchoose" :class="{collapse: isColl}" @click="isactive" >
            <!-- 默认选中的颜色 -->
            <div class="colorchoosed">
                <div class="colorpic" :style="'background:'+this.choosecolor"></div>
                <span class="colorname">#{{choosename}}</span>
                <span class="iconfont icon-xiala"></span>
            </div>
            <!-- 调用组件生成的可选颜色 -->
            <allcolor v-for="(allColor,index) in allColors" :key="index" :zz="allColor" :zindex="index" @changeChoosed="change"></allcolor>
        </div>
        <!-- 数量选择框 -->
        <div class="countchoose" :class="{countcollapse: iscountColl}" @click="iscountactive">
            <!-- 默认数量，值为1 -->
            <div class="countchoosed">
                <span class="countnum">数量:{{count}}</span>
                <span class="iconfont icon-xiala"></span>
            </div>
            <count v-for="index in 5" :key="index" :cindex="index" @changeCount="changeCount"></count>
        </div>
        <!-- 购买和添加购物车区域 -->
        <btn :stock="stock"/>
        <!-- 添加到心愿dan -->    
        <div class="like">
            <span>添加到心愿单</span>
        </div>
    </div>
</template>
<script>
import allcolor from '@/views/detail/Allcolor.vue';
import count from '@/views/detail/Count.vue';
import btn from '@/views/detail/Btn.vue';
export default {
    name:'buy',
    components:{
        allcolor,
        count,
        btn
    },
    data() {
        return {
            isColl: true,
            iscountColl:true,
            choosecolor:'',
            choosename:'',
            count:1,
            stock:2,
            allColors:[{
                color:'#FFFF00',
                colorname:'黄色'
                },
                { 
                color:'#00FFFF',
                colorname:'青色'},
                {
                color:'#FF00FF',
                colorname:'红色'}
                ],
              
        }
    },
    methods: {
        //通过点击来切换展开和收缩
        isactive() {
            this.isColl = !this.isColl; 
        },
        iscountactive() {
            this.iscountColl = !this.iscountColl; 
        },
        //触发时修改选中的色号
        change(index){
            this.choosecolor = this.allColors[index].color;
            this.choosename = this.allColors[index].colorname;
        },
        changeCount(cindex){
            this.count = cindex;
        }
    },
    //组件创建时，给选中的色号设置默认值
    created:function(){
        this.choosecolor=this.allColors[0].color
        this.choosename=this.allColors[0].colorname
    }
}
</script>
<style scoped>
   .buy{
       width: 280px;
       height: 210px;
       margin-top: 30px;
       position: relative;  
   }
   /* 颜色选择框的样式 */
   .colorchoose{
       width: 145px;
       box-sizing: border-box;
       border: solid 1px #999;
       cursor: pointer;
       position: absolute;
       top: 0;
       left: 0;
       background: #fff;
       z-index: 10;
       user-select:none;
   }
   .collapse {
       overflow: hidden;
       height: 44px;
   }
   .colorchoose .colorchoosed{
       width: 100%;
       height: 44px;
       box-sizing: border-box;
       padding: 12px;
   }
   .colorchoose .colorchoosed span{
       line-height: 20px;
       color: #999;
   }
   .colorpic{
       width: 20px;
       height: 20px;
       float: left;
       margin-right: 40px;
   }



   /* 数量选择框的样式 */
   .countchoose{
       position: absolute;
       top: 0;
       right: 0;
       width: 125px;
       /* height: 44px; */
       box-sizing: border-box;
       border: solid 1px #999;
       cursor: pointer;
       background: #fff;
       z-index: 10;
       user-select:none;
   }
   .countcollapse{
       overflow: hidden;
       height: 44px;
   }
   .countchoosed{
       width: 100%;
       height: 44px;
       box-sizing: border-box;
       padding: 12px;
       line-height: 20px;
       color: #999;
   }
   .countchoosed span:last-child{
       float: right;
   }
   .like{
       width: 100%;
       position: absolute;
       left: 0;
       top:152px;
       text-align: center;
       font-size: 14px;
       color: #666;
       line-height: 40px;
       user-select:none;
   }
   .like span{
       cursor: pointer;
       border-bottom: solid 1px #666;
   }
   .like span:hover{
       border-bottom: solid 1px #000;
       color: #000;
   }

</style>


