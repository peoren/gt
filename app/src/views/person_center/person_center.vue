<template>
  <div class="personal-page-wrap">
    <div class="left-nav">
      <ul class="user-msg-hear">
        <li>
          <h5>欢迎回来：{username先生}</h5>
        </li>
        <li>会员状态：注册会员</li>
        <li>账户总积分：{number}分</li>
      </ul>
      <ul class="user-msg-middle">
        <li>
          <router-link to="/person_center/">我的订单</router-link>
        </li>
        <li>
          <router-link to="/person_center/a">积分信息</router-link>
        </li>
        <li>
          <router-link to="/person_center/comment">我的评论</router-link>
        </li>
      </ul>
      <ul class="user-msg-footer">
        <li>
          <router-link to="/person_center/b">我的心愿单</router-link>
        </li>
        <li>
          <router-link to="/person_center/c">个人信息</router-link>
        </li>
        <li>
          <router-link to="/person_center/d">收货地址</router-link>
        </li>
        <li>
          <router-link to="/person_center/e">安全中心</router-link>
        </li>
      </ul>
    </div>
    <div class="component-wrap">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {
    
  },
  methods: {
    cd() {
      this.$router.push("/about");
    }
  }
};
</script>
<style scoped>

.personal-page-wrap {
  width: 80%;
  min-width: 1024px;
  max-width: 1440px;
  margin: 50px auto;
}
.personal-page-wrap::before,
.personal-page-wrap::after {
  content: "";
  display: table;
}
.personal-page-wrap::after {
  clear: both;
}
.personal-page-wrap .component-wrap {
  float: right;
  width: 74%;
 padding-top: 75px;
}
.personal-page-wrap .left-nav {
  width: 25%;
  float: left;
  background: #f5f5f5;
}
.left-nav ul {
  width: 200px;
  margin: 0 auto;
  padding-bottom: 30px;
}
.left-nav ul li {
  margin-top: 20px;
}
.personal-page-wrap .user-msg-hear li {
  margin-top: 10px;
  font-size: 12px;
}
.personal-page-wrap .user-msg-hear li:first-child {
  margin-bottom: 45px;
}
.user-msg-middle {
  padding-top: 10px;
  border-top: solid 1px #0000003f;
  border-bottom: solid 1px #0000003f;
}
.user-msg-middle li,
.user-msg-footer li {
  transform: translateX(-25px);
}
.user-msg-footer {
  padding-top: 10px;
}
.user-msg-middle a:hover,
.user-msg-footer a:hover {
  text-shadow: 0 0 30px #000000;
}
.personal-page-wrap a {
  color: inherit;
}
</style>
