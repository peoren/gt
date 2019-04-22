<template>
    <div class="tablebody">
        <div class="tablebody_contain" v-for="(gd,index) in goodsdata" :key="index">
            <img :src="gd.imgsrc" alt="">
            <div class="goodsname">
                <p id="goodsclassify">{{gd.goodsclassify}}</p>
                <p id="goodsname">{{gd.goodsname}}</p>
                <p id="goodssize">{{gd.goodsize}}</p>
                <span id="shopremove" @click="goodsdata.splice(index,1)" >移出</span>
                <span id="heartadd">加入心愿单</span>
            </div>
            <div class="goodsprice">
                <p>￥{{gd.goodsprice}}</p>
            </div>
            <transition name="fade">
                <selectorlist :goodsdata='goodsdata[index]' :index='index' @chchangeGoodNum='changeGoodNum'  :key='index' />
            </transition>
            <div class="goodsallprice">
                ￥{{gd.goodsprice*gd.goodsnum}}
            </div>
        </div>
        
        <p class="allprice">
            总金额:￥{{allprice}}
        </p>

    </div>
</template>
<script>
import selectorlist from '@/views/shopping_cart/components/selectorlist.vue'

export default {
    name:'tablebody',
    components:{
        selectorlist,
        
    },
    data:function(){
        return {
            imgsrc:'',
            goodsdata:'',
           
        }
    },
    methods:{
        /**
         * 设置ajax返回的数据，并且将数据转换出来
         */
        getData:function(){
            let localdata=[{
                goodsid:1,
                goodsnum:10,
                goodsname:'肌肤之钥立体紧颜精华乳',
                goodsprice:2380,
                goodsize:'40ml',
                goodsclassify:'the serum',
                imgsrc:'https://www.cledepeau-beaute.com.cn/public/images/f7/46/b2/e337d87ec2c984660b6ab97d0147006cd89a33f8.png?1545374980#h'
                
            },
            {
                goodsid:2,
                goodsnum:1,
                goodsname:'晶致肌活精华露',
                goodsprice:1100,
                goodsize:'40ml',
                goodsclassify:'the serum',
                imgsrc:'https://www.cledepeau-beaute.com.cn/public/images/f7/46/b2/e337d87ec2c984660b6ab97d0147006cd89a33f8.png?1545374980#h'
            },
                {
                goodsid:3,
                goodsnum:1,
                goodsname:'光采保湿露(湿润型) 12mL',
                goodsprice:50,
                goodsize:'40ml',
                goodsclassify:'the serum',
                imgsrc:'https://www.cledepeau-beaute.com.cn/public/images/f7/46/b2/e337d87ec2c984660b6ab97d0147006cd89a33f8.png?1545374980#h'
            },
            
            ]
            localdata=JSON.stringify(localdata);
            localStorage.setItem('showpagedata',localdata)
            this.goodsdata=JSON.parse(localStorage.getItem('showpagedata'));//存入goodsdata  
        },
        /**
         * 监听selectorlist传来index,和n，修改goodsdata对应的数量
         * n:是selectorlist中选中的vlaue
         * index:因为不能同时监听，所以将点击的Index值传入子组件然后一起传给父组件
         */
        changeGoodNum:function(n,index){           
            this.$set(this.goodsdata[index],'goodsnum',n)
        },
        
        // goodsRmove:function(index){
        //     this.goodsdata.splice(index,1)
        // }
        
    },
    computed:{
        /**
         * 计算总金额
         * 遍历goodsdata计算总金额,
         * 在story中加入总价格和积分
         */
        allprice(){
            let allprice=0
            for( let i in this.goodsdata){
                allprice+=this.goodsdata[i].goodsprice*this.goodsdata[i].goodsnum
            }
            //加入总价和积分
            this.$store.state.allprice=allprice
            this.$store.state.integral=150
            return allprice
        },
        
    },
    created(){
        /**
         * 从后台得到的数据写入goodsdata
         */
        this.getData()
        /**
         * 计算总价
         */
        // this.getAllPrice()
    }
} 
</script>
<style scoped>
.tablebody{
    width: 100%;
    color: #464646;

}
/*
    表格内容：包括组件的内容
*/
.tablebody_contain{
    height: 245px;
    padding: 15px 0px;
    /* background: lightcoral; */
    text-align: left;
    font-size: 12px;
    box-sizing: border-box;
    border-bottom: 1px solid #a0a0a0;
    
}
.tablebody_contain>div{
    float: left;
}
img{
    display: block;
    float: left;
    width: 23%;
    margin-right: 5%
}
.tablebody_contain>.goodsname{
    width: 30%;
    color: #000;
    font-size: 14px;
    margin-top: 6px;
}

.goodsprice{
    width: 14%;
}
.goodsallprice{
    margin-left: 7px;
    width: 14%;
}
#goodsname{
    font-size: 16px;
    margin: 6px 0px;
}
#goodssize{
    height: 20px;
    line-height: 18px;
    letter-spacing: 1px;
}
#shopremove,
#heartadd{
    display: block;
    float: left;
    height: 21px;
    font-size: 14px;
    border-bottom: 1px solid #a0a0a0;
    margin-top: 110px;
    cursor: pointer;
}
#shopremove{
    margin-right: 60px;
}
/* 总金额 */
.allprice{

    margin-top: 15px;
    margin-bottom: 15px;
    font-size: 14px;
    color: #000;
    display: block;
    width: 100%;
    text-align: right;
}
/* 动画 */
.fade-enter-active, .fade-leave-active {
  transition: height .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
