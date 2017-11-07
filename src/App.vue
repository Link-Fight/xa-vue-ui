<template>
  <section id="app">
    <div style="text-align:center">
        <img src="./assets/logo.png">
    </div>
    <router-view/>
  </section>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #f2f2f2;
  margin-top: 60px;
}
.com-wrap {
  padding: 8px 4px;
  margin: 4px;
  background: #fff;
}
</style>
