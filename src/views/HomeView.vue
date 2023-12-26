<template>
  <div class="HomeView">
    <Navbar />
    <div class="container">
      <Hero /> 
      <div class="row mt-4">
        <div class="col">
          <h2>Best <strong>Foods</strong></h2>
        </div>
      </div>

      <div class="row mb-3 ms-5">
        <div class="col mt-4" v-for="product in products" :key="product.id">
          <CardProduct :product="product"/>
        </div>
      </div>
        
    </div>
      <div class="mt-4 p-5 text-white container-fluid" style="height: 476px; background-color: #080730;">
        <Jumbotron />   
      </div>
      <div class="container">
        <div class="card my-5 mx-auto shadow-lg border-0">
          <div class="row">
            <div class="col-md-4">
              <div class="card-body">
                <h1 class="card-title fs-1 fw-bold">Best deals <span style="color: #ffc686;">Crispy Sandwiches </span></h1>
                <p class="card-text fs-5">Enjoy the large size of sandwiches. Complete perfect slice of sandwiches.</p>
                <router-link to="/foods" class="btn btn-warning text-white box-shadow">PROCEED TO ORDER ></router-link>
              </div>
            </div>
            <div class="col-md-8">
              <img src="assets/images/sandwich.jpg" class="img-fluid rounded h-100" alt="...">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col d-flex justify-content-center">
            <marquee class="" width="400px" direction="right">
            <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/apple.png" alt="apple"/>
            <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/apple.png" alt="apple"/>
            <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/apple.png" alt="apple"/>
          </marquee>
          </div>
        </div>
      </div>
      <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components//Hero.vue'
import CardProduct from '@/components//CardProduct.vue'
import Jumbotron from '@/components//Jumbotron.vue'
import Footer from '@/components//Footer.vue'
import axios from "axios"

export default {
  name: 'HomeView',
  components: {
    Navbar,
    Hero,
    Jumbotron,
    Footer,
    CardProduct,
  },
  data(){
    return{
      products: [],
    }
  },
  methods: {
    setProduct(data) {
      this.products = data
    },
  },
  mounted() {
    axios.get('http://localhost:3000/best-products')
  .then((response) => this.setProduct(response.data))
  
  .catch((error) => console.log("Gagal :( ",error))
  },
}
</script>

