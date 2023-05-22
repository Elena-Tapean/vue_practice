<template>
    <div class="products">
        <img alt="App logo" src="../assets/flowers.jpg" />
        <h1>This is the products page</h1>
        <ul>
            <li v-for="product in products" :key="products.id">
                <h2>{{ product.id }}. {{ product.title }}</h2>
                <p>{{ product.description }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ProductsView',
    data () {
        return {}
    },
    created () {
        this.$store.dispatch('data');
    },
    computed: {
        products () {
            return this.$store.state.products;
        }
    }
}
</script>

<style scoped lang="scss">
.products {
    @media only screen and (min-width: 0) {
        img {
            width: 450px;
            height: 350px;
        }
    }
}
</style>