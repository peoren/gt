<template>
    <ul class="clear">
        <li><router-link class="login" to='/about'>登录</router-link></li>
        <li><router-link class="reg" to=''>注册</router-link></li>
        <li><router-link class="wish" to=''>心愿单</router-link></li>
        <li><router-link class="search" to=''>搜索</router-link></li>
        <li><router-link class="bag" to=''>购物袋 0</router-link></li>
    </ul>
</template>


<style scoped>
    ul {
        float: right;
        margin-top: 30px;
    }
    li {
        float: left;
    }
    a {
        font-size: 12px;
        color: #464646;
        padding: 0 12px;
        border-right: 1px solid #464646;
    }
    .bag {
        border: none;
    }
</style>
