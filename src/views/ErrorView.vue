<template>
    <div class="error-page main-grid">
        <h1>404</h1>
        <p>Flowers not found</p>
        <br/>
        <router-link to="/">Go back home</router-link>
    </div>
</template>

<script>
export default {
    name: 'ErrorView'
}
</script>

<style scoped lang="scss">
.error-page {
    @media only screen and (min-width: 0) {
        margin: 0 100px;
        padding: 50px;
        background-color: white;
        border-radius: 10px;

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
        a {
            color: rgb(204, 9, 204);
            font-size: 16px;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    }
}
</style>