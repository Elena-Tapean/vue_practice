<template>
  <div class="about">
    <img alt="App logo" src="../assets/flowers.jpg" />
    <h1>This is the about page</h1>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>

<style scoped lang="scss">
.about {
  @media only screen and (min-width: 0) {
    img {
      width: 450px;
      height: 350px;
    }
  }
}
</style>