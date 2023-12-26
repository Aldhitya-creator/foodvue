<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container">
      
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/foods">Foods</router-link>
          </li>
        </ul>
      </div>
      <div class="navbar-brand fw-bold" href="#">Food <span class="text-warning">Vue</span></div>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/cart">Cart
                <img width="24" height="24" src="https://img.icons8.com/wired/64/shopping-cart-loaded.png" alt="shopping-cart-loaded"/>
                <span class="badge bg-success ms-2">{{ updatecart ? updatecart.length: amount_order.length }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios"
export default {
  name: "AppNavbar",
  props: ["updatecart"],
  data(){
    return{
      amount_order: {}
    }
  },
  methods: {
    setAmount(data){
      this.amount_order = data
    }
  },
  mounted(){
    axios.get('https://my-json-server.typicode.com/Aldhitya-creator/foodvue-server/carts')
      .then((response) => this.setAmount(response.data))

      .catch((error) => console.log("Gagal :( ", error))
  }
}
</script>

<style>
</style>