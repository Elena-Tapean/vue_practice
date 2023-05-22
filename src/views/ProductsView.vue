<template>
    <div class="products main-grid">
        <h1>Fresh bouquettes</h1>
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
        return {
        }
    },
    created () {
        this.$store.dispatch('data');
    },
    computed: {
        products () {
            return this.$store.state.products
        }
    }
}
</script>

<style scoped lang="scss">
.products {
    @media only screen and (min-width: 0) {
        margin: 0 100px;
        background-color: white;

        h2 {
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
    }
}
</style>