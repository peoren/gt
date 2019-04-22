<template>
  <div class="content-wrap">
    <h5>评价订单</h5>
    <p class="order-nmber">
      订单号：
      <span>{123456789}</span>
      <span>{2017-11-05-12 10:50:31</span>
    </p>
    <div class="form-wrap">
      <div class="left-msg">
        <a href="#xiangqinye" class="pic-wrap">
          <img :src="url" alt>
        </a>
        <p>enhling</p>
        <h6>粉底</h6>
        <p>￥200</p>
      </div>
      <form action class="userInfo">
        <div class="comment_start">
          您的评价：
          <span class="iconfont icon-wujiaoxing" :class="{current:start>=1}" @click="start=1"></span>
          <span class="iconfont icon-wujiaoxing" :class="{current:start>=2}" @click="start=2"></span>
          <span class="iconfont icon-wujiaoxing" :class="{current:start>=3}" @click="start=3"></span>
          <span class="iconfont icon-wujiaoxing" :class="{current:start>=4}" @click="start=4"></span>
          <span class="iconfont icon-wujiaoxing" :class="{current:start>=5}" @click="start=5"></span>              
        </div>
        <div>
            <p>请描述您的购物体验：</p>
            <textarea name="" id="" cols="30" rows="10" placeholder="您的宝贵意见将会是我们持续进步的动力" v-model="userInfo"></textarea>
        </div>
        <div class="btn-wrap">
          <button type="button">提交</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "ShowComment",
  data() {
    return {
      // url: require("@/assets/g.png"),
      start: 0,
      userInfo:'这家的商品真的很棒'
    };
  },
  methods: {
    getCommentGoods(){
      console.log('请求登陆。', this.username, this.userpass);

      // 发请求
      // 当前地址： http://localhost:8080/login
      /* 
        跨域：
          协议、域名或者端口号有一个不一样，就会发生跨域。
        
        跨域解决方案：
          jsonP(只能用于 get)
            动态生成：<script src="https://www.faychou.cn/api?callback=fn">

          iframe

          跨域资源共享(CORS)：
            只需要在服务器端响应头中设置：
              'Access-Control-Allow-Origin': '*' // 白名单
      */
      this.$http.post('/login', {
        username: this.username,
        userpass: this.userpass
      })
        .then((res) => {
          console.log(res.data);
          if(res.data.state == 200) {
            // 保存登陆状态
            localStorage.setItem('token', res.data.token);

            // 使用 this.$router 对象
            this.$router.push('/');
          } else {
            alert('账号或者密码错误。')
          }
        })
        .catch(err => {
          console.log(err)
          alert('登录失败')
        })
    }
  },
  
  
};
</script>
<style scoped>
.content-wrap {
  margin-top: -20px;
  margin-left: 30px;
  text-align: left;
}
.order-nmber {
  font-size: 12px;
  padding: 8px 0;
  border-bottom: solid 1px #a0a0a0;
  border-top: solid 1px #a0a0a0;
}
.order-nmber span:last-child {
  margin-left: 45px;
}
h5 {
  font-size: 16px;
  padding: 10px 0;
}
.form-wrap {
  margin-top: 20px;
}
.form-wrap::before,
.form-wrap::after {
  content: "";
  display: table;
}
.form-wrap::after {
  clear: both;
}
.left-msg {
  text-align: center;
  float: left;
}
.left-msg img {
  width: 200px;
  height: 200px;
}
.left-msg p {
  margin: 5px 0;
  font-size: 12px;
}
.userInfo{
  margin-left: 30px;
  float: left;
  width: 470px;
}
.comment_start{
  margin-bottom: 30px;
}
.comment_start span {
  color: #bbbbbb;
  margin-left: 5px;
  margin-bottom: -2px;
  cursor: pointer;
}
.comment_start .current {
  color: #333333;
}
form textarea{
  text-indent: 2em;
  padding-top: 5px;
  width: 100%;
  height: 100px;
  resize: none;
  margin-top: 20px;
  outline: none;
}
.btn-wrap{
  text-align: right;
  padding-right: 10px;
  margin-top: 20px;
}
.btn-wrap button{
  width: 120px;
  height: 35px;
  background: #bbbbbb;
  border: none;
  outline: none;
  box-shadow:0 0 10px  #333333;
  cursor: pointer;
}
/* 字体图标 */
</style>
