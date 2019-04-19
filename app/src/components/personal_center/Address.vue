<template>
  <div class="address-wrap">
      <div class="addAdress-flat" v-show="show">
          <form action="">
              <div class="component-wrap">这里地址选取是插件</div>
              <div class="msg-item clear"><div>详细地址：</div><input type="text" style="width:345px;"></div>
              <div class="msg-item clear"><div>邮政编码：</div><input type="text"></div>
              <div class="msg-item clear"><div>收货人姓名：</div><input type="text"></div>
              <div class="msg-item clear phone"><div>联系方式：</div><span>手机：</span><input type="text"><span>或固定电话：</span><input type="text"></div>
              <div class="checked"><input type="checkbox">是否设为默认地址</div>
              <div class="btn-wrap clear">
                  <button type="button">确认收货地址</button>
                  <a href="" @click.prevent="">取消</a>
              </div>
          </form>
      </div>
    <div class="them clear">
      <span>收货地址</span>
      <button type="button" @click="show='ture'">+新增收货地址</button>
    </div>
      <ul class="clear">
        <li>地址</li>
        <li>收货人</li>
        <li>联系电话</li>
        <li>操作</li>
      </ul>
      <ul v-for="(item,index) in  addressList" :key="index" class="clear">
        <li>{{item.location}}</li>
        <li>{{item.peple}}</li>
        <li>{{item.phone}}</li>
        <li>
          <a href :class="{default:item.default}">{{item.name}}</a>
          <a href>编辑</a>
          <a href>删除</a>
        </li>
      </ul>
  </div>
</template>
<script>
export default {
  name: "site",
  data() {
    return {
        show:false,
      defautText:'',
      addressList: [
        {
          location: "四川成都市青羊区成都市高新区云华路33号",
          peple: "张老板",
          phone: "1115145011",
          default: 0
        },
        {
          location: "四川成都市青羊区成都市高新区云华路33号",
          peple: "冬梅",
          phone: "1115145011",
          default: 0
        },
        {
          location: "四川成都市青羊区成都市高新区云华路33号",
          peple: "冬梅梅",
          phone: "1115145011",
          default: 0
        },
        {
          location: "四川成都市青羊区成都市高新区云华路33号",
          peple: "冬梅梅梅梅",
          phone: "1115145011",
          default: 1
        }
      ]
    };
  },
  created() {
      for(let i = 0; i < this.addressList.length; i++) {
          if(this.addressList[i].default == 0) {
              this.addressList[i].name = '设为默认地址'
          }else {
              this.addressList[i].name = '默认地址'
          }
      }
  },
};
</script>
<style scoped>
.address-wrap {
  width: 95%;
  margin-left: 30px;
  height: 300px;
}

.clear::before,
.chear::after {
  content: "";
  display: table;
}
.clear::after {
  clear: both;
}
.them {
  padding-bottom: 15px;
  border-bottom: solid 1px #a0a0a0;
  margin-bottom: 20px;
}
.them span {
  font-size: 24px;
  float: left;
}
.them button {
  width: 135px;
  height: 35px;
  border: solid 1px #a0a0a0;
  cursor: pointer;
  background: #ffffff;
  float: right;
  color: #0000007a;
  outline: none;
}
ul li {
  float: left;
  font-size: 14px;
}
ul {
  width: 100%;
}
li > a {
  display: block;
  width: 100%;
  font-size: 12px;
}
li {
  padding: 10px 0;
  width: 16%;
  vertical-align: top;
}
ul li:first-child {
  width: 50%;
}
ul {
    margin-top: 10px;
    border: solid 1px #a0a0a0;
}
.default{
    background: #8c7517;
    content: '默认地址';
    color: #ffffff;
    padding:5px 0;
}
.msg-item{
    margin-top: 20px;
}
.msg-item div{
    float: left;
    width: 20%;
    text-align: right;
    height: 33px;
    line-height: 33px;
}
.msg-item span{
    float: left;
    height: 33px;
    line-height: 33px;
    margin-left: 10px;
}
.msg-item input{
    float: left;
    width: 220px;
    height: 30px;
    margin-left: 25px;
    outline: none;
    text-indent: 1em;
}
div.phone div:first-child{
    margin-right: 10px;
}
.phone input{
    width: 160px;
    margin-left: 15px;
}
.addAdress-flat{
    width: 95%;
    margin-bottom: 50PX;
}
.checked{
    text-align: left;
    margin-top: 30px;
}
.checked input{
    margin-left:100px;
}
.btn-wrap{
    margin-top: 30px;
}
.btn-wrap button{
    float: left;
    height: 40px;
    width: 180px;
    margin-left: 60px;
    outline: none;
    border: none;
    background: #333333;
    color: #ffffff;
    cursor: pointer;
}
.btn-wrap a{
    float: left;
    margin-left: 20px;
    height: 40px;
    line-height: 40px;
}
</style>
