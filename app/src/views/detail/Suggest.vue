<template>
    <div class="suggest">
        <div class="todetail"  :class="{onpase:isOn}" @click="detailchange">
            <p class="detitle">产品详情<span v-if="isOn">+</span><span v-else>-</span></p>
            <p>添加3D粉末，透过光学技术和颜色效果的双重渐层所塑造的浓淡，利用从正面侧面不同光源反射与红亮绿暗的不同3D色度来表现色差，创造眉部的立体感。</p>
        </div>
        <div class="touse"  :class="{usepase:useOn}" @click="usechange">
            <p class="usetitle">如何使用<span v-if="useOn">+</span><span v-else>-</span></p>
            <p>·将笔芯插入笔杆（另行购买）中转出2-3毫米笔芯，并勾画眉型。<br> 
·更换笔芯时，请拨出旧笔芯并插入新笔芯。</p>
        </div>
    </div>
    
</template>
<script>
export default {
    name:'suggest',
    data(){
        return{
            isOn:true,
            useOn:true
        }
    },
    methods:{
       detailchange:function(){
           this.isOn = !this.isOn; 
           console.log(this.isOn);
       },
       usechange:function(){
           this.useOn = !this.useOn;
       } 
    }
}
</script>
<style scoped>
   .suggest{
       width: 280px;
       /* height: 100px; */
   }
   .todetail,.touse{
       cursor: pointer;
       line-height: 29px;
       color: #666;
       user-select:none;
   }
   .todetail p span,.touse p span{
       float: right;
   }
   .todetail p,.touse p{
        padding-top: 10px;
   }
   .todetail .detitle,.touse .usetitle{
       border-bottom: solid 1px #999;
       padding-top: 10px;
       font-weight: 300;
       /* margin-top: 20px; */
   }
   .onpase,.usepase{
       height: 40px;
       overflow: hidden;
   }
</style>


