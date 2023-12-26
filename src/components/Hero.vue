<template>
    <div class="hero">
        <div class="row mt-4">
            <div class="col">
                <div class="d-flex h-100">
                    <div class="justify-content-center align-self-center">
                        <h2><strong>Delicious Food Menu, </strong> <br>in your gadget</h2>
                        <p>Let's order food you want</p>
                        <router-link class="btn btn-outline-warning text-dark fw-bold shadow-lg" to="/foods">Order Now!</router-link>
                    </div>
                </div>
            </div>
            <div class="col">
                <img src="../assets/img/undraw_breakfast_psiw.svg" alt="food" width="500" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppHero'
}
</script>

<style>

</style>