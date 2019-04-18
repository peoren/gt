<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png">
    <button @click='cd'>点击跳转</button>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  methods: {
    cd() {
      this.$router.push('/about');
    },
  },
};
</script>
