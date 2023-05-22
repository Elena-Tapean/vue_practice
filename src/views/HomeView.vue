<template>
  <div class="home main-grid">
    <HelloWorld msg="Flower Pot Shop"/>
    <h1>New flower found</h1>
    <p>A rare purple flower is reported to have been sighted inside an ametyst crystal. Images of this magnificent flower are impossible to take due to the fact that the cave is lowly lid and the terrain is dangerous. We will keep you up to date on the rare flower.</p>
    <br/>
    <strong>Attention!</strong>
    <p>Cats are sensitive to certain plants and flowers. Find out which of them are toxic for your kitties by clicking <a href="https://be.chewy.com/which-plants-are-poisonous-to-cats-a-complete-guide/" target="_blank">here</a>!</p>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style scoped lang="scss">
.home {
  @media only screen and (min-width: 0) {
    margin: 0 100px;
    background-color: white;

    h1 {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
    }
    p {
      margin: 0 20px;
      padding: 0 30px;
      line-height: 1.5;
      font-family: Georgia, 'Times New Roman', Times, serif;
      font-size: 17px;
    }
    strong {
      font-size: 20px;
      color: red;
    }
    a {
      color: blue;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  }
}
</style>
