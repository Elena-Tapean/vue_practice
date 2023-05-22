<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/products">Products</router-link>
      <router-link to="/about">About</router-link> 
      <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

body, html {
  margin: 0;
  padding: 0;
}

ul, li {
  list-style-type: none;
}

nav {
  padding: 20px;
  background-color: #000000;
  display: flex;
  justify-content: space-around;
  flex-direction: row;

  a {
    font-weight: bold;
    font-size: 18px;
    color: #ffffff;
    text-decoration: none;

    &.router-link-exact-active {
      color: #f01212;
      text-decoration: underline;
    }
  }
}
</style>
