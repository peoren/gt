<template>
  <div class="orderdetail">
    <div class="order-speed">
      <div class="order-head">
        <ul v-if="order[0].order_state == 2" class="colorgray">
          <li>已作废</li>
        </ul>
        <ul v-else>
          <li v-if="order[0].order_state == 0" class="colorgray">提交订单</li>
          <li v-else>提交订单</li>
          <li>
            <!-- <img src="../assets/bigjiantou.png" alt> -->
          </li>
          <li v-if="order[0].order_state == 1" class="colorgray">付款成功</li>
          <li v-else>付款成功</li>
          <li>
            <!-- <img src="../assets/bigjiantou.png" alt> -->
          </li>
          <li v-if="order[0].order_state == 5" class="colorgray">发货</li>
          <li v-else>发货</li>
          <li>
            <!-- <img src="../assets/bigjiantou.png" alt> -->
          </li>
          <li v-if="order[0].order_state == 3" class="colorgray">已完成</li>
          <li v-else>已完成</li>
        </ul>
      </div>
      <div class="order-num">
        <div>
          <span>{{order[0].goods_starttime}}</span>
          <span>订单创建成功！</span>
        </div>
        <div v-if="order[0].order_state == 2">
          <span>{{order[0].goods_endtime}}</span>
          <span>订单取消(订单支付超时，自动取消)</span>
        </div>
      </div>
      <div class="order-detail">
        <div>
          <span>订单号:</span>
          <span>{{order[0].order_num}}</span>
        </div>
        <div>
          <span>订单金额:</span>
          <span>{{order[0].order_total}}</span>
        </div>
        <div>
          <span>订单状态:</span>
          <span v-if="order[0].order_state == 1">付款成功</span>
          <span v-if="order[0].order_state == 0">未付款 [未发货]</span>
          <span v-if="order[0].order_state == 2">交易取消</span>
          <span v-if="order[0].order_state == 3">订单完成</span>
          <span v-if="order[0].order_state == 5">发货</span>
        </div>
        <div>
          <p>说明: 您选择了微信支付扫码支付付款，请尽快付款。</p>
        </div>
      </div>
      <div class="subtn">
        <div>
          <a href="#" v-if="order[0].order_state == 0||2">去付款</a>
          <a href="#" v-else>继续购物</a>
        </div>
      </div>
    </div>
    <div class="orderInfo">
      <div class="orderInfo_inner">
        <div class="orderInfoTit">收货信息</div>
        <div class="orderInfoList">
          <div class="orderInfoItem">
            <span>收货人:</span>
            <span>{{order[0].order_receipt_name}}</span>
          </div>
          <div class="orderInfoItem">
            <span>联系电话:</span>
            <span>{{order[0].order_receipt_phone}}</span>
          </div>
          <div class="orderInfoItem">
            <span>收货地址:</span>
            <span>{{order[0].order_receipt_adress}}</span>
          </div>
          <div class="orderInfoItem">
            <span>邮编:</span>
            <span>{{order[0].order_receipt_yb}}</span>
          </div>
        </div>
      </div>
      <div class="orderInfo_inner">
        <div class="orderInfoTit">配送方式</div>
        <div class="orderInfoList">
          <div class="orderInfoItem">
            <span>配送方式:</span>
            <span>快递</span>
          </div>
          <div class="orderInfoItem">
            <span>运费:</span>
            <span>{{order[0].order_express_m}}</span>
          </div>
        </div>
      </div>
      <div class="orderInfo_inner">
        <div class="orderInfoTit">支付方式</div>
        <div class="orderInfoList">
          <div class="orderInfoItem">
            <span>支付方式:</span>
            <span>支付宝支付</span>
          </div>
        </div>
      </div>
    </div>
    <div class="myCar">
      <div class="myCar-head">
        <ul>
          <li>商品清单</li>
          <li>价格</li>
          <li>数量</li>
          <li>总计</li>
        </ul>
      </div>
      <div class="myCar-list">
        <ul v-for="(ele,index) in order" :key="index">
          <li>
            <a href="#">
              <img :src='ele.goods_src_new' alt>
            </a>
            <div>
              <div>{{ele.goods_Ename}}</div>
              <div>{{ele.goods_Cname}}</div>
              <div>
                <span>{{ele.goods_size}}</span>
              </div>
            </div>
          </li>
          <li>
            <span>¥{{ele.goods_price}}</span>
          </li>
          <li>
            <span>{{ele.goods_count}}</span>
          </li>
          <li>
            <span>¥{{ele.goods_price * ele.goods_count}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="orderBottom">
      <div class="priceTop">
        <div class="priceArea">
          <div>订单优惠</div>
          <div>
            送赠品:
            <span>满1680尊享-</span>
          </div>
        </div>
        <div class="PriceEnd">
          <div>
            <label>商品总金额：</label>
            <span class="ProRegularNum">¥{{order[0].order_total + order[0].order_discount}}</span>
          </div>
          <div>
            <label>运费：</label>
            <span class="ProRegularNum">¥{{order[0].order_express_m}}</span>
          </div>
          <div>
            <label>订单优惠：</label>-
            <span class="ProRegularNum">¥{{order[0].order_discount}}</span>
          </div>
          <div>
            <label>总金额：</label>
            <span class="ProRegularNum">¥{{order[0].order_total}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "orderdetail",
  data() {
    return {
      order: [
        {
          goods_starttime: "2017-12-12 13:30",
          goods_endtime: "2018-12-12 13:00",
          order_state: 2,
          order_num: 1232332423,
          order_total: 1234.0,
          order_receipt_name: "城东梅",
          order_receipt_phone: 13455555555,
          order_receipt_adress: "四川成都市武侯区高新区",
          order_receipt_yb: 610000,
          order_express: "快递",
          order_express_m: 23.44,
          goods_src: "dingdan.png",
          goods_src_new: "",
          goods_Ename: "Hydro-Softening Lotion",
          goods_Cname: "光采保湿露（湿润型）",
          goods_size: "170ml",
          goods_price: 234.99,
          goods_count: 1,
          order_discount: 13.99
        },
        {
          goods_starttime: "2017-12-12 13:30",
          goods_endtime: "2018-12-12 13:00",
          order_state: 2,
          order_num: 1232332423,
          order_total: 1234.0,
          order_receipt_name: "城东梅",
          order_receipt_phone: 13455555555,
          order_receipt_adress: "四川成都市武侯区高新区",
          order_receipt_yb: 610000,
          order_express: "快递",
          order_express_m: 230.44,
          goods_src: "dingdan.png",
          goods_src_new: "",
          goods_Ename: "Hydro-Softening Lotion",
          goods_Cname: "光采保湿露（湿润型）",
          goods_size: "170ml",
          goods_price: 234.99,
          goods_count: 1,
          order_discount: 13.99
        },
        {
          goods_starttime: "2017-12-12 13:30",
          goods_endtime: "2018-12-12 13:00",
          order_state: 2,
          order_num: 1232332423,
          order_total: 1234.0,
          order_receipt_name: "城东梅",
          order_receipt_phone: 13455555555,
          order_receipt_adress: "四川成都市武侯区高新区",
          order_receipt_yb: 610000,
          order_express: "快递",
          order_express_m: 230.44,
          goods_src: "dingdan.png",
          goods_src_new: "",
          goods_Ename: "Hydro-Softening Lotion",
          goods_Cname: "光采保湿露（湿润型）",
          goods_size: "170ml",
          goods_price: 234.99,
          goods_count: 1,
          order_discount: 13.99
        }
      ]
    };
  },
  created() {
    for (let index = 0; index < this.order.length; index++) {
      this.order[index].goods_src_new = require("@/assets/" +
        this.order[index].goods_src);
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.colorgray {
  color: #454545;
}
.order-speed {
  background: #fafafa;
}
.order-head {
  margin-top: 47;
  padding-left: 20px;
  /* color: #454545; */
  color: #a0a0a0;

  padding-top: 28px;
  padding-left: 20px;
  margin-top: 47px;
}
.order-head > ul {
  overflow: hidden;
  font-size: 24px;
}
.order-speed ul > li {
  float: left;
}
.order-speed ul > li > img {
  margin: 2px 20px;
  width: 9px;
  height: 23px;
}
.order-num {
  border-bottom: 1px solid #a0a0a0;
  padding: 20px 0 30px 0;
  margin-left: 20px;
  color: #585858;
  font-size: 12px;
}
.order-num > div > span {
  display: inline-block;
  margin-right: 15px;
  /* font-size: 12px; */
}
.order-detail {
  margin: 0 20px;
  /* border-top: 1px solid #a0a0a0; */
  font-size: 12px;
  color: #595959;
  line-height: 27px;
  padding-top: 20px;
}
.order-detail > div > span:first-child {
  letter-spacing: 3px;
  display: inline-block;
  width: 104px;
}
.subtn {
  padding-left: 20px;
  padding-top: 14px;
  padding-bottom: 30px;
  height: 35px;
}
.subtn > div {
  width: 137px;
  height: 35px;
  background: #000;
  text-align: center;

  margin-right: 20px;
}
.subtn > div > a {
  color: #fff;
  white-space: nowrap;
  vertical-align: middle;
  text-decoration: none;
  font-size: 12px;
  line-height: 35px;
  height: 35px;
}
.orderInfo {
  margin: 20px 0 30px 0;
}
.orderInfo_innder {
  margin-bottom: 30px;
}
.orderInfoTit {
  padding: 15px 0 15px 23px;
  border-top: 1px solid #a0a0a0;
  border-bottom: 1px solid #a0a0a0;
  color: #a0a0a0;
  font-size: 12px;
}
.orderInfoList {
  padding: 20px 0px 0px 23px;
}
.orderInfoItem {
  margin-bottom: 15px;
}
.orderInfoItem > span {
  display: inline-block;
  font-size: 12px;
  color: #464646;
}
.orderInfoItem > span:first-child {
  width: 105px;
}
ul {
  width: 100%;
  border-top: 1px solid #a0a0a0;
  border-bottom: 1px solid #a0a0a0;
  padding: 15px 0 15px 23px;
  color: #a0a0a0;
  display: block;
  font-size: 12px;
  overflow: hidden;
  box-sizing: border-box;
}
.myCar {
  width: 100%;
}
.myCar-list li {
  float: left;
  color: #464646;
}
.myCar-list > ul > li:first-child,
.myCar-head > ul > li:first-child {
  width: 58%;
}
.myCar-list > ul > li,
.myCar-head > ul > li {
  width: 14%;
  float: left;
  vertical-align: top;
}
.myCar-list img {
  width: 23%;
  float: left;
  margin-right: 40px;
  display: block;
  border: 0;
}
.myCar-list li > div {
  margin-top: 6px;
  float: left;
  color: #464646;
}
.myCar-list li > div > div:nth-child(2) {
  font-size: 14px;
  margin: 6px 0;
}
.myCar-list > ul > li:nth-child(2) {
  padding-top: 8px;
  font-size: 12px;
}
.myCar-list > ul > li:nth-child(3) > span {
  margin-top: 7px;
  display: block;
  margin-left: 7px;
}
.myCar-list > ul > li:last-child {
  padding-top: 8px;
  font-size: 12px;
}
.orderBottom {
  padding-bottom: 150px;
}
.priceTop {
  overflow: hidden;
  border-bottom: 1px solid #a0a0a0;
  padding: 25px 0;
}
.priceArea {
  float: left;
  margin-left: 25px;
  min-height: 95px;
}
.priceArea > div:first-child {
  font-size: 16px;
  margin-bottom: 25px;
}
.priceArea > div:last-child {
  margin-bottom: 10px;
  font-size: 12px;
}
.PriceEnd {
  float: right;
  font-size: 12px;
}
</style>
