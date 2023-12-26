<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2>List <strong>Foods</strong></h2>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Find your favorite food"
              aria-label="Find"
              aria-describedby="basic-search1"
              @keyup="searchFood"
            />
            <span class="input-group-text" id="basic-search1">search</span>
          </div>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col mt-4" v-for="product in products" :key="product.id">
          <CardProduct :product="product" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import CardProduct from '@/components//CardProduct.vue'
import Footer from '@/components//Footer.vue'
import axios from "axios"

export default {
  name: 'AppFoods',
  components: {
    Navbar,
    CardProduct,
    Footer
  },
  data(){
    return{
      products: {},
      search: '',
    }
  },
  methods: {
    setProduct(data) {
      this.products = data
    },
    searchFood(){
      axios.get('http://localhost:3000/products?q=' + this.search)
        .then((response) => this.setProduct(response.data))

        .catch((error) => console.log("Gagal :( ", error))
    }
  },
  mounted() {
    axios.get('http://localhost:3000/products')
      .then((response) => this.setProduct(response.data))

      .catch((error) => console.log("Gagal :( ", error))
  },
}
</script>

<style>
</style>