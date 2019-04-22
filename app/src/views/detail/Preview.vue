<template>
    <div class="preview">
        <div class="preview-one">
            <img src="https://www.cledepeau-beaute.com.cn/public/images/bf/b6/70/4315f10f8830795421e71b24fc42e921dbfedadb.png?1468488644#w" alt="">
        </div>
        <div class="preview-two" v-if="previewTwo">
            <img :src="this.previewSrc.two.src" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name: 'preview',
    data(){
        return{
            //第二个预览图的src，如果有，就显示第二个预览图，如果没有，就不限时
            previewTwo:true
        }
    },
    props:["previewSrc"],
    computed:{
        getpreviewTwo:function(){
            if(previewSrc.two.src){
                return true;
            }else{
                return false;
            }
        }
    },
}
</script>
<style scoped>
    .preview{
        width: 50%;
        float: left;
    }
    .preview-one{
        position: relative;
        width: 100%;
        height: 0;
        padding: 100% 0 0;
        box-sizing: content-box;
    }
    .preview-one img{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
    .preview-two{
        width: 100%;
    }
    .preview-two img{
        width: 100%;
    }
</style>


