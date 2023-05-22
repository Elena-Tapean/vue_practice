<template>
  <div id="app">
    <NavBar />
    <router-view/>
    <FooterBar />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import FooterBar from './components/FooterBar.vue';

export default {
  name: 'App', 
  components: {
    NavBar,
    FooterBar
  }
}
</script>

<style lang="scss">
#app {
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  main {
    flex: 1 0 auto;
  }
}
</style>
