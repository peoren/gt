<template>
  <div class="userinfo">
    <div class="title">会员信息修改</div>
    <div class="information">
      <form action>
        <div class="email">
          <span>邮箱:</span>
          <input type="text" v-model="user[0].user_email">
          <!-- <input type="text" value="1"> -->
        </div>
        <div class="phone">
          <span>手机:</span>
          <span>{{user[0].user_phone}}</span>
        </div>
        <div class="name">
          <span>姓名:</span>
          <input type="text" v-model="user[0].user_name">
        </div>
        <div class="gender">
          <span>性别:</span>
          <input type="radio" name="gender" value="0" v-model="user[0].user_gender">
          <label for="woman">女</label>
          <input type="radio" name="gender" value="1" v-model="user[0].user_gender">
          <label for="man">男</label>
        </div>
        <div class="birth">
          <span>生日:</span>
          <span>{{user[0].user_birth}}</span>
        </div>
        <div class="preservation">
          <a href="#">
            <button type="button">
              <span>保存</span>
            </button>
          </a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "userinfo",
  data() {
    return {
      user: [
        {
          user_name: "陈东梅",
          user_phone: 15583877547,
          user_email: "smeil-chenmei@foxmail.com",
          user_gender: "0",
          user_birth: "1995-03-03"
        }
      ]
    };
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  margin: 0 3px;
  display: block;
}
.userinfo {
  text-align: left;
  padding-bottom: 50px;
  margin-left: 30px;
  min-width: 738px;
  max-width: 1050px;
}
.title {
  text-align: left;
  overflow: hidden;
  font-size: 24px;
  color: #000;
  line-height: 24px;
  padding-bottom: 10px;
  border-bottom: 1px solid #a0a0a0;
}
.information {
  margin-top: 20px;
  font-size: 12px;
  color: #0f0c1d;
}
form > div {
  line-height: 36px;
  text-indent: 23px;
}
form > div > span:first-child {
  margin-right: 70px;
}
.sub > span:first-child {
  margin-right: 25px;
}
form > div > input {
  vertical-align: text-top;
  outline: medium none;
  border: 1px solid #ccc;
  line-height: 21px;
  height: 21px;
}
.gender > input {
  width: 12px;
  height: 12px;
  vertical-align: text-bottom;
}
.gender > label {
  margin-right: 30px;
}

.gender > input {
  margin-right: 5px;
}

.preservation {
  width: 181px;
  height: 45px;
  margin-top: 30px;
  border: 1px solid #0f0c1d;
  text-align: center;
  line-height: 45px;
  background: #0f0c1d;
  margin-left: 23px;
}
.preservation button > span {
  width: 100%;
  height: 45px;
  line-height: 45px;
}
.preservation button {
  border: 0 none;
  background-color: transparent;
  cursor: pointer;
  display: block;
  width: 100%;
  height: 45px;
  line-height: 45px;
  color: #fff;
  font-size: 14px;
  letter-spacing: 5px;
}
</style>
