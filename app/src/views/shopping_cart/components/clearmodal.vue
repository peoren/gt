<template>
    <div class="clearmodal">
        <div class="modal_content">
            <div class="modal_title">
                确认清空购物袋吗？
            </div>
            <div @click="!modal_state">
                确认
            </div>
            <div @click="modal_state">
                取消
            </div>  
        </div>
    </div>
</template>
<script>
export default {
    props:['modal_state'],
    watch:{
        'modal_state':function(newVal,oldVal){
            console.log(this.modal_state);
            this.curModal_state=newVal;
        },
        curModal_state:function(newVal,oldVal){
            this.$emit('update:modal_state',newVal)
        }
    }
}
</script>

<style scoped>
.clearmodal{
    position: fixed;
    left:0;
    top:0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
}
.modal_content{
    width: 350px;
    height: 254px;
    margin: 0 auto;
    background: #fff;
    color: #000;
}
</style>
