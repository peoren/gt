<template>
  <div class="integral">
    <div class="title">我的积分</div>
    <div class="integralhead">
      <ul>
        <li>消费日期</li>
        <li>商品名称</li>
        <li>数量</li>
        <li>金额</li>
        <li>产生积分</li>
        <li>积分余额</li>
      </ul>
    </div>
    <div class="integrallist">
      <ul v-for="(ele,index) in userintegral" :key="index">
        <li>{{ele.o_donetime}}</li>
        <li>{{ele.order_no}}</li>
        <li>{{ele.order_num}}</li>
        <li>{{ele.order_price}}</li>
        <li>{{(ele.order_price * 0.1).toFixed(2)}}</li>
        <li>{{ele.user_integral}}</li>
      </ul>
    </div>
  <Panel/>
  </div>
</template>

<script>
//@ is an alias to /src
import Panel from './Panel.vue'

export default {
  name: "integral",
  data() {
    return {
      userintegral: [
        {
          o_id: 123456,
          order_no: "goodsone",
          order_num: 1,
          order_price: 142.0,
          o_donetime: "2019-02-14 13:20",
          user_integral: 300
        },
        {
          o_id: 345546576865,
          order_no: "goodstwo",
          order_num: 2,
          order_price: 4323.0,
          o_donetime: "2019-02-14 13:20",
          user_integral: 700
        },
        {
          o_id: 123456,
          order_no: "goodsone",
          order_num: 1,
          order_price: 142.0,
          o_donetime: "2019-02-14 13:20",
          user_integral: 300
        },
        {
          o_id: 123456,
          order_no: "goodsone",
          order_num: 1,
          order_price: 142.0,
          o_donetime: "2019-02-14 13:20",
          user_integral: 300
        },
        {
          o_id: 123456,
          order_no: "goodsone",
          order_num: 1,
          order_price: 142.0,
          o_donetime: "2019-02-14 13:20",
          user_integral: 300
        },
        {
          o_id: 123456,
          order_no: "goodsone",
          order_num: 1,
          order_price: 142.0,
          o_donetime: "2019-02-14 13:20",
          user_integral: 300
        },
        {
          o_id: 123456,
          order_no: "goodsone",
          order_num: 1,
          order_price: 142.0,
          o_donetime: "2019-02-14 13:20",
          user_integral: 300
        }
      ],
    };
  },
  components:{
    Panel
  }
};
</script>

<style>
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: #000;
}
.integral {
  padding-bottom: 50px;
  margin-left: 30px;
  min-width: 738px;
  max-width: 1050px;
  color: #000;
}
.title {
  text-align: left;
  font-size: 24px;
  color: #000;
  line-height: 24px;
}
.integralhead {
  border-bottom: 1px solid #a0a0a0;
  border-top: 1px solid #a0a0a0;
  padding: 20px 0;
  margin-top: 10px;
}
.integralhead li {
  display: inline-block;
  font-size: 12px;
  line-height: 18px;
  color: #a0a0a0;
}
.integrallist ul {
  border-bottom: 1px solid #a0a0a0;
}
.integrallist li {
  display: inline-block;
  list-style: none;
  padding: 20px 0;
  font-size: 12px;
}

.integralhead li,
.integrallist li {
  /* width: 140px; */
  width: calc(16% - 4.8px);
  /* width: calc(16%); */
}
.integralhead li:first-child {
  /* width: 140px; */
  width: calc(20% - 6px);
  padding-left: 20px;
  box-sizing: border-box;
}
.integrallist li:nth-child(1) {
  width: calc(20% - 6px);
}
.integralhead li:nth-child(6),
.integrallist li:nth-child(6) {
  /* width: 140px; */
  width: calc(16% - 4.8px);
  margin-bottom: 8px;
}
</style>
