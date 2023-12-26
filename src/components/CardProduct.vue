<template>
<div class="card" style="width: 18rem; border: 0;">
  <img :src=" 'assets/images/' + product.gambar" class="card-img-top rounded" alt="...">
    <div class="card-body">
        <h5 class="card-title">{{ product.nama }}</h5>
        <p class="card-text">Price : {{ product.harga }}</p>
        <router-link :to=" '/foods/' + product.id" class="btn btn-warning text-white fw-bold" style="background-color: #F46A06;">Order</router-link>
    </div>
</div>
</template>

<script>
export default {
    name: 'CardProduct',
    props: ['product']
}
</script>

<style>

</style>