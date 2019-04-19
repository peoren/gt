<template>
       <div class="child-msg-wrap">
      <div class="neworder">
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
          <ul v-for="(orderone,index) in commentlist" :key="index">
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
              <span>订单完成</span>
            </li>
            <!-- 支付方式 -->
            <li>支付宝</li>
            <!-- 操作 -->
            <li>
              <router-link to="/person_center/writecomment">去评论</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    name:'gocomment',
    props:['commentlist']
}
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
}

.orderhead {
  border-bottom: 1px solid #a0a0a0;
  border-top: 1px solid #a0a0a0;
  padding: 20px 0;
  margin-top: 40px;
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
  width: 23%;
}
.orderlist li:first-child > div:last-child {
  margin-left: 65px;
  margin-top: 8px;
}
.orderhead li:nth-child(2) {
  width: 12%;
}
.orderhead li:nth-child(3) {
  width: 17%;
}
.orderhead li:nth-child(4) {
  width: 16%;
}
.orderhead li:nth-child(5) {
  width: 16%;
}
.orderhead li:nth-child(6) {
  width: 12%;
}
.orderlist li:nth-child(2) {
  width: 12%;
}
.orderlist li:nth-child(3) {
  width: 17%;
}
.orderlist li:nth-child(4) {
  width: 16%;
}
.orderlist li:nth-child(5) {
  width: 16%;
}
.orderlist li:nth-child(6) {
  width: 12%;
}
.orderlist li:nth-child(6) > a {
  display: block;
  margin-bottom: 8px;
}
</style>
