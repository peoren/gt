<template>
    <nav class="clear">
        <div class="head_img">
            <img src="../../assets/home/header-logo.png" alt="">
        </div>
        <nav1/>
        <nav2/>
    </nav>
</template>

<script>
import nav1 from '@/components/header/nav1.vue'
import nav2 from '@/components/header/nav2.vue'
export default {
  components: {
    nav1,nav2
  }
}
</script>


<style scoped>
    nav {
        height: 130px;
        width: 80%;
        min-width: 1024px;
        max-width: 1440px;
        margin: 0 auto;
    }
    .head_img {
        float: left;
        line-height: 130px;
    }
    img {
        width: 150px;
        height: auto;
        cursor: pointer;
        vertical-align: middle;
    }
</style>

