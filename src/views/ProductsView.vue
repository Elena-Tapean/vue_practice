<template>
    <div class="products main-grid">
        <h1>Fresh bouquettes</h1>
        <ul>
            <li v-for="product in products" :key="products.id">
                <h2>{{ product.id }}. {{ product.title }}</h2>
                <img class="product-image" :src="product.image" alt="bouquette" />
                <p class="product-description">{{ product.description }}</p>
                <span>{{ product.price }} USD</span>
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
        border-radius: 10px;

        h2 {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 20px;
        }
        .product.description {
            margin: 0 20px;
            padding: 0 30px;
            line-height: 1.5;
            font-family: Georgia, 'Times New Roman', Times, serif;
            font-size: 17px;
        }
        .product-image {
            width: 220px;
            height: 270px;
            border-radius: 15px;
        }
        li {
            margin: 20px;
            padding: 10px;
        }
        span {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 15px;
            font-weight: bold;
        }
    }
}
</style>