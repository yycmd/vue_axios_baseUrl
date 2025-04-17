<template>
  <div id="app">
    <div>
      <img alt="Vue logo" src="./assets/logo.png">
    </div>
    <div>
      <button type="button" @click="getName">点击发送 getName 请求</button>
    </div>

    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
import request from './request';
// import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  methods: {
    getName() {
      request.get('/getName').then(res => {
        console.log(res.data);
        alert(res.data.user);
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
