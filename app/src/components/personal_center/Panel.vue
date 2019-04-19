<template>
  <div class="panel">
    <span>‹</span>
    <a href="#" v-for="n in uintegrallg" :key='n'>{{n}}</a>
    <span>›</span>
  </div>
</template>

<script>
export default {
  name: "panel",
  data() {
    return {
      panel: 0,
      panellimit: 5,
      uintegrallg: 6
    };
  }
};
</script>

<style>
.panel {
  text-align: right;
  line-height: 20px;
  font-size: 12px;
  margin: 30px 0 10px;
}
.panel span {
  padding: 0 5px;
  color: #ccc;
  cursor: not-allowed;
  background-color: #f3f3f3;
  border: 1px solid #ddd;
}
.panel > span,
.panel > a {
  border: 1px solid #ddd;
  display: inline-block;
  vertical-align: middle;
  margin-left: 5px;
  padding: 0 8px;
}
.panel > span {
  padding: 0 10px;
}
.panel > a:hover {
  background: #666;
}
</style>
