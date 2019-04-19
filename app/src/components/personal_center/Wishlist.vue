<template>
  <div class="wishlist">
    <div class="title">
      <div>心愿单</div>
      <a href="#">
        查看更多
        <li>></li>
      </a>
    </div>
    <ul>
      <li v-for="(ele,index) in wish" :key="index">
        <a href="#">
          <div>
            <img alt="Vue logo" :src="ele.goods_src_new">
          </div>
          <div>{{ele.goods_Ename}}</div>
          <div>{{ele.goods_Cname}}</div>
          <div>{{ele.goods_price}}</div>
        </a>
        <a href="#">删除</a>
      </li>
    </ul>
    <Panel/>
  </div>
</template>

<script>
import Panel from "@/components/personal_center/Panel.vue";
export default {
  name: "wishlist",
  data() {
    return {
      wish: [
        {
          goods_Ename: "CREAM BLUSH",
          goods_Cname: "果蜜腮红膏",
          goods_price: 123.3,
          goods_src: "CREAM.jpg",
          goods_src_new: ""
        },
        {
          goods_Ename: "CREAM BLUSH",
          goods_Cname: "果蜜腮红膏",
          goods_price: 123.3,
          goods_src: "CREAM.jpg",
          goods_src_new: ""
        },
        {
          goods_Ename: "CREAM BLUSH",
          goods_Cname: "果蜜腮红膏",
          goods_price: 123.3,
          goods_src: "CREAM.jpg",
          goods_src_new: ""
        },
        {
          goods_Ename: "CREAM BLUSH",
          goods_Cname: "果蜜腮红膏",
          goods_price: 123.3,
          goods_src: "CREAM.jpg",
          goods_src_new: ""
        }
      ],
      url: "@/assets/"
    };
  },
  created() {
    console.log(this.url);
    for (let index = 0; index < this.wish.length; index++) {
      this.wish[index].goods_src_new = require("@/assets/" +
        this.wish[index].goods_src);
      console.log(this.wish[index].goods_src_new);
    }
  },
  components: {
    Panel
  }
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
a {
  text-decoration: none;
  color: #000;
}
.wishlist {
  text-align: left;
  padding-bottom: 50px;
  margin-left: 30px;
  min-width: 738px;
  max-width: 1050px;
}
.title {
  overflow: hidden;
  padding-bottom: 10px;
  border-bottom: 1px solid #a0a0a0;
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
ul img {
  width: 100%;
  height: auto;
}
ul > li {
  float: left;
  text-align: center;
  width: 25%;
  font-size: 12px;
}
ul > li div:nth-child(2) {
  margin-top: 5px;
  color: #a0a0a0;
  height: 30px;
  line-height: 15px;
}
ul > li div:nth-child(3) {
  color: #000;
  margin: 4px 0;
  height: 30px;
  line-height: 15px;
}
ul > li div:last-child {
  height: 19px;
  color: #a0a0a0;
  letter-spacing: 1px;
}
li > a:last-child {
  line-height: 30px;
  color: #a1a1a1;
  text-decoration: underline;
  white-space: pre;
}
</style>
