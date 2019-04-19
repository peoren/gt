
<template>
  <div id="comment-wrap">
    <div class="switcher">
      <button type="button" :class="{active:current==1}" @click="setclass">我的评论</button>
      <button type="button" :class="{active:current==2}" @click="setclassT">未评论商品</button>
    </div>
    <div class="child-msg">
         <GoComment v-if="current==2" :commentlist='useorder'></GoComment>
         <ShowComment v-else-if="current==1"></ShowComment>
    </div>
  </div>
</template>

<script>
import  GoComment from "@/components/personal_center/GoComment.vue";
import  ShowComment from "@/components/personal_center/ShowComment.vue";
export default {
  name: "comment",
  components:{
      GoComment,
      ShowComment
  },
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
      ],
       current: 1,
    }
  },
  methods: {
    setclass() {
      this.current = 1;
    },
    setclassT() {
      this.current = 2;
    }
  },
  compute: {}
};
</script>
<style scoped>
#comment-wrap {
  text-align: left;
  margin-left: 30px;
  margin-bottom: 20px;
}
.switcher{
    border-bottom: 1px solid #a0a0a0;
    margin: 0 auto;
    min-width: 716.8px;
    max-width: 1008px;
    text-align: left;
    margin-left: 30px;
}
.switcher button {
  height: 44px;
  width: 125px;
  border: solid 1px #999999;
  background: #ffffff;
  font-size: 16px;
  outline: none;
  border-bottom: none;
  cursor: pointer;
}
.switcher button:first-child {
  border-right: none;
}
.switcher button:last-child {
  border-left: none;
}
#comment-wrap .active {
  background: #9999996b;
}
.child-msg{
    margin-left: 30px;
    margin-top: 40px;
    min-width: 716.8px;
    max-width: 1008px;
}
</style>



