<template>
    <header class="nav-bar" ref="navBar">
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/products">Products</router-link>
            <router-link to="/basket">Basket ({{ basketTotal }})</router-link>
            <router-link to="/about">About</router-link> 
            <router-link to="/contact">Contact</router-link>
        </nav>    
    </header>
</template>

<script>
export default {
    name: 'NavBar',
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
            return this.basket.length
            //return this.basket.reduce((acc, curr) => acc + curr.count, 0)
        }
    }
}
</script>

<style scoped lang="scss">
.nav-bar {
    @media only screen and (min-width: 0) {
        nav {
            padding: 20px;
            background-color: #000000;
            display: flex;
            justify-content: space-around;
            flex-direction: row;

        a {
            font-weight: bold;
            font-size: 18px;
            color: #ffffff;
            text-decoration: none;

            &.router-link-exact-active {
                color: #f01212;
                text-decoration: underline;
                }
            }
        }
    }
}
</style>