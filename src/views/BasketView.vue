<template>
    <div class="basket main-grid">
        <h1>My Basket Filled with Flowers</h1>
        <ul>
            <li v-for="product in basket" :key="product.id">
                <h2>{{ product.title }}</h2>
                <img class="product-image" :src="product.image" alt="bouquettes" />
                <br/>
                <span>{{ product.price }} USD</span>
            </li>
        </ul>
        <button class="buy" v-on:click="buyProduct(product)">Buy</button>
        <button class="delete" v-on:click="deleteProduct(product)">Delete</button>
        <br/>
        <span>Total: {{ basketTotal }} USD</span>
    </div>
</template>

<script>
export default {
    name: 'BasketView',
    data () {
        return {
        }
    },
    created () {
        this.$store.dispatch('data')
    },
    computed: {
        products () {
            return this.$store.state.products
        },
        basket () {
            return this.$store.state.basket
        },
        basketTotal () {
            return this.basket.reduce((basketTotal, product) => basketTotal + (+product.price), 0).toFixed(0)
        }
    },
    methods: {
        buyProduct () {
            this.$store.dispatch('BUY_PRODUCT', this.user)
        },
        deleteProduct (id) {
            this.$store.commit('DELETE_PRODUCT', {id})
        }
    }
}
</script>

<style scoped lang="scss">
.basket {
    @media only screen and (min-width: 0) {
        margin: 0 100px;
        background-color: white;
        border-radius: 10px;
    
        h2 {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 20px;
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
        .buy {
            margin: 7px;
            padding: 8px 20px;
            border-radius: 5px;
            background-color: rgb(26, 170, 91);
            color: white;
            border: none;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 16px;
        }
        .delete {
            margin: 7px;
            padding: 8px 20px;
            border-radius: 5px;
            background-color: rgb(218, 26, 26);
            color: white;
            border: none;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 16px;
        }
    }
}
</style>