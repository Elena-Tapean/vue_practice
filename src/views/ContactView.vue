<template>
    <div class="contact">
        <img alt="App logo" src="../assets/flowers.jpg" />
        <h1>This is the contact page</h1>
    </div>
</template>
  
<script>
export default {
    name: 'ContactView'
}
</script>

<style scoped lang="scss">
.contact {
    @media only screen and (min-width: 0) {
        img {
            width: 450px;
            height: 350px;
        }
    }
}
</style>