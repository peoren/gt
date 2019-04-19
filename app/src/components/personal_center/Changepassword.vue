<template>
  <div class="changepassword">
    <div class="title">密码修改</div>
    <div class="information">
      <form action>
        <div>
          <input type="password" name id placeholder="请输入旧密码6-20个字符" v-model="oldpass" maxlength="20" autocomplete='off'>
        </div>
        <div>
          <input type="password" placeholder="请输入新密码6-20个字符" v-model="newpassone" maxlength="20" autocomplete='off'>
          <div class="pwdlevel">
            <span>密码强度:</span>
            <span v-if="level == 1">差</span>
            <span v-if="level == 2" class="color1">弱</span>
            <span v-if="level == 3" class="color2">中</span>
            <span v-if="level == 4" class="color3">强</span>
            <span>
              <span v-if="level==2" class="two"></span>
              <span v-if="level==3" class="three"></span>
              <span v-if="level==4" class="four"></span>
            </span>
          </div>
        </div>
        <div>
          <input type="password" placeholder="请确认新密码6-20个字符" v-model="newpasstwo" maxlength="20" autocomplete='off' >
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
  name: "changepassword",
  data() {
    return {
      oldpass: "",
      newpassone: "",
      newpasstwo: "",
      level: 0,
      patl: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).*$/,
      patw: /[`~!@#$%^&*()_\-+=<>?:"{}|,./;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/im
    };
  },
  watch: {
    newpassone: function() {
      console.log(this.newpassone);
      if (this.newpassone.length < 10) {
        if (this.patl.test(this.newpassone)) {
          this.level = 2;
        } else {
          this.level = 1;
        }
      } else {
        if (this.patw.test(this.newpassone)) {
          this.level = 4;
        } else {
          this.level = 3;
        }
      }
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.changepassword {
  margin-left: 30px;
}
.title {
  overflow: hidden;
  font-size: 24px;
  color: #000;
  line-height: 24px;
  padding-bottom: 10px;
  border-bottom: 1px solid #a0a0a0;
  text-align: left;
}
.information {
  padding: 40px 0 0 40px;
}
form > div {
  width: 183px;
  height: auto;
  margin-top: 15px;
}
form > div > input::-webkit-input-placeholder {
  color: #adaaaa;
}
form > div > input {
  width: 181px;
  height: 45px;
  text-indent: 10px;
  color: #595959;
  padding: 0;
  margin: 0;
  line-height: 26px;
  border-width: 1px;
  border-color: rgb(223, 217, 217);
  font-size: 14px;
  outline: none;
}
.pwdlevel {
  margin: 10px 0 0 8px;
  line-height: 16px;
  font-size: 14px;
}
.pwdlevel > span:first-child {
  margin: 0 36px 5px 0;
  display: inline-block;
}
.pwdlevel > span:last-child {
  width: 110px;
  height: 8px;
  display: block;
  background-color: #ddd;
}
.coloc1 {
  color: #ff2626;
}
.color2 {
  color: #ff9326;
}
.color3 {
  color: #00d900;
}
.two {
  width: 36px;
  height: 8px;
  display: block;
  background-color: #ff2626;
}
.three {
  width: 72px;
  height: 8px;
  display: block;
  background-color: #ff9326;
}
.four {
  width: 110px;
  height: 8px;
  display: block;
  background-color: #00d900;
}

.preservation {
  width: 181px;
  height: 45px;
  margin-top: 30px;
  border: 1px solid #0f0c1d;
  text-align: center;
  line-height: 45px;
  background: #0f0c1d;
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
