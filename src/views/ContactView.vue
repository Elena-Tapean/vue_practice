<template>
    <div class="contact main-grid">
        <h1>Let stay in touch</h1>
        <p>Email: <a href="mailto:flowerpot_shop@gmail.com">flowerpot_shop@gmail.com</a></p>
        <p>Telephone: <a href="tel:123-456-7890">123-456-7890</a></p>
        <br/>
        <p>Or you can get in touch with us via Social Media</p>
        <br/>
        <p>Facebook: <a href="#">https://www.facebook.com/in/flowerpot-shop</a></p>
        <p>Instagram: <a href="#">https://www.instagram.com/in/flowerpotshop</a></p>
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