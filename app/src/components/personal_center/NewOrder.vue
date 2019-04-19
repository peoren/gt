<template>
  <div class="neworder">
    <div class="title">
      <div>最近的订单</div>
      <a href="#">
        查看更多
        <li>></li>
      </a>
    </div>
    <div class="orderhead">
      <ul>
        <li>订单号</li>
        <li>金额</li>
        <li>下单时间</li>
        <li>订单状态</li>
        <li>支付方式</li>
        <li>操作</li>
      </ul>
    </div>
    <div class="orderlist">
      <ul v-for="(orderone,index) in useorder" :key="index">
        <!-- 订单号 和 数量-->
        <li>
          <div>
            + 订单号:
            <span>{{orderone.o_id}}</span>
          </div>
          <div>
            <span>{{orderone.o_count}}</span>
            件商品
          </div>
        </li>
        <!-- 订单金额 -->
        <li>
          <span>{{orderone.o_paytotal}}</span>
        </li>
        <!-- 创建订单时间 -->
        <li>
          <span>{{orderone.o_starttime}}</span>
        </li>
        <!-- 订单状态 -->
        <li>
          <a href="#" v-if="orderone.o_state==0">等待付款</a>
          <a href="#" v-else-if="orderone.o_state==1">确认收货</a>
          <span v-else-if="orderone.o_state==2">交易取消</span>
          <span href="#" v-else>订单完成</span>
        </li>
        <!-- 支付方式 -->
        <li>支付宝</li>
        <!-- 操作 -->
        <li>
          <a href="#">
            <span>去支付</span>
          </a>
          <router-link to='/orderdetail'>查看订单</router-link>
          <a href="#">取消订单</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "neworder",
  data() {
    return {
      useorder: [
        {
          o_id: 123456,
          o_count: 2,
          o_paytotal: 234.0,
          o_state: 0,
          o_starttime: "2019-02-14 13:20"
        },
        {
          o_id: 345546576865,
          o_count: 2,
          o_paytotal: 4323.0,
          o_state: 2,
          o_starttime: "2019-02-14 13:20"
        }
      ]
    };
  }
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: #000;
}
.neworder {
  margin: 0 auto;
  min-width: 716.8px;
  max-width: 1008px;
  text-align: left;
  margin-left:  30px;
}
.title {
  overflow: hidden;
}
.title > div {
  float: left;
  font-size: 24px;
  color: #000;
  line-height: 24px;
}
.title > a {
  float: right;
  font-size: 12px;
  line-height: 24px;
  padding-top: 5px;
  color: #000;
}
.title li {
  display: inline-block;
  margin-left: 3px;
}
.orderhead {
 
  border-bottom: 1px solid #a0a0a0;
  border-top: 1px solid #a0a0a0;
  padding: 20px 0;
  margin-top: 10px;
}
.orderhead ul {
  overflow: hidden;
  height: 18px;
}
.orderhead li {
  float: left;
  list-style: none;
  color: #a0a0a0;
  font-size: 12px;
  line-height: 18px;
}
.orderhead ul > li:first-child {
  padding-left: 20px;
  width: 23%;
  box-sizing: border-box;
}
.orderlist ul {
  overflow: hidden;
  border-bottom: 1px solid #a0a0a0;
  font-size: 12px;
}
.orderlist li {
  float: left;
  list-style: none;
  color: #464646;
  font-size: 12px;
  padding: 20px 0;
}
.orderlist li:first-child {
  /* width: 200px; */
  width: 23%;
}
.orderlist li:first-child > div:last-child {
  margin-left: 65px;
  margin-top: 8px;
}
.orderhead li:nth-child(2) {
  /* width: 110px; */
  width: 12%;
}
.orderhead li:nth-child(3) {
  /* width: 150px; */
  width: 17%;
}
.orderhead li:nth-child(4) {
  /* width: 140px; */
  width: 16%;
}
.orderhead li:nth-child(5) {
  /* width: 140px; */
  width: 16%;
}
.orderhead li:nth-child(6) {
  /* width: 110px; */
  width: 12%;
}
.orderlist li:nth-child(2) {
  /* width: 110px; */
  width: 12%;
}
.orderlist li:nth-child(3) {
  /* width: 150px; */
  width: 17%;
}
.orderlist li:nth-child(4) {
  /* width: 140px; */
  width: 16%;
}
.orderlist li:nth-child(5) {
  /* width: 140px; */
  width: 16%;
}
.orderlist li:nth-child(6) {
  /* width: 110px; */
  width: 12%;
}
.orderlist li:nth-child(6) > a {
  display: block;
  margin-bottom: 8px;
}
</style>
