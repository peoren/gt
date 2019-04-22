<template>
    <div class="buttonbox">
        <p class="clearShoppingCart"  @click="clearshopcart">
            清空购物车
        </p>
        <router-link to='/a' class="backHome" tag='p'>
            继续购物
        </router-link>
        <router-link to='/toorder' class="settleAccounts" tag='p'>
            下单结算
        </router-link>
        <clearmodal v-show="modal_flag" :modal_state.sync='modal_state' />  
        
    </div>
</template>
<script>
import clearmodal from '@/views/shopping_cart/components/clearmodal.vue'
export default {
    components:{
        clearmodal
    },
    data:function(){
        return {
            modal_flag:false,//打开模态框
            modal_state:false//模态框的状态值
        }
    },
    methods:{

        clearshopcart(){
            this.modal_flag=!this.modal_flag;
            console.log('判断了');
            if(this.modal_state){
                router.push('/clear_shopping_cart')
            }else{
                
            }
            
        }
    }
}
</script>
<style scoped>
.buttonbox{
    width: 100%;
    height: 94px;
    box-sizing: border-box;
    margin: 35px 0 25px 0;
    padding-right: 30px;
}
.buttonbox p{
    font-size: 14px;
    float: left;
    height: 42px;
    border: 1px solid #464646;
    width: 124px;
    color: #464646;
    cursor: pointer;
    text-align: center;
    line-height: 44px;
}
.buttonbox .clearShoppingCart{
    margin-right: 20px;
}
.buttonbox .settleAccounts{
    float: right;
    color: #fff;
    background: #000;
    width: 200px;
}
</style>
