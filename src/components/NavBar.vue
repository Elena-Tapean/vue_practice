<template>
    <header class="nav-bar" ref="navBar">
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/products">Products</router-link>
            <router-link to="/about">About</router-link> 
            <router-link to="/contact">Contact</router-link>
        </nav>    
    </header>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped lang="scss">
.nav-bar {
    @media only screen and (min-width: 0) {
        img {
            width: 28px;
            height: 28px;
            border-radius: 50%;
        }
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