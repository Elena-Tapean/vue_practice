<template>
    <footer class="footer">
        <span>© Copyright. Flower Pot Shop. 2023 All rights reserved.</span>
    </footer>
</template>

<script>
export default {
    name: 'FooterBar'
}
</script>

<style scoped lang="scss">
.footer {
    @media only screen and (min-width: 0) {
        padding: 20px;
        background-color: #000;
        
        span {
            color: #ffffff;
            font-size: 16px;
        }
    }
}
</style>