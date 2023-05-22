<template>
  <div class="about main-grid">
    <h1>The Flower Pot Shop</h1>
    <p>Established in 1990s, the Flower Pot Shop consists of more than 100 popular and rare flowers. Its mission is to spread awareness of such delicate beings and to give our communitty a bouquette of happyness everyday.</p>
    <br/>
    <p>Our team consists of:
      <ul>
        <li>
          Momma
        </li>
        <li>
          Dadda
        </li>
        <li>
          Little Sophy
        </li>
        <li>
          Granny Green-Fingers
        </li>
        <li>
          Aunt Elphelt
        </li>
        <li>
          Uncle Fred
        </li>
        <li>
          Sparticus & Lola
        </li>
      </ul>
    </p>
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
        margin: 0 100px;
        background-color: white;

    h1 {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 24px;
    }
    p {
      margin: 0 20px;
      padding: 0 30px;
      line-height: 1.5;
      font-family: Georgia, 'Times New Roman', Times, serif;
      font-size: 17px;
    }
  }
}
</style>