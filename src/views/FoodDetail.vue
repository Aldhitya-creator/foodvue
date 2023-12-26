<template>
    <div>
        <navbar />
        <div class="container">
            <div class="row mt-5">
                <div class="col">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                            <li class="breadcrumb-item"><router-link to="/foods">List Foods</router-link></li>
                            <li class="breadcrumb-item active fw-bold" aria-current="page">Food Order</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div class="row mt-3">
                <div class="col md-6">
                    <img :src="'assets/images/' + product.gambar" class="img-fluid shadow">
                </div>
                <div class="col md-6">
                    <h2><strong>{{ product.nama }}</strong></h2>
                    <hr>
                    <h3>Price : <strong>Rp.{{ product.harga }}</strong></h3>
                    <form class="mt-4" v-on:submit.prevent>
                        <div class="form-group">
                            <label for="amount_order">Amount Order</label>
                            <input type="number" class="form-control" v-model="order.amount_order"/>
                        </div>
                        <div class="form-group">
                            <label for="order_description">Order Description</label>
                            <textarea class="form-control" placeholder="spicy,ice,hot,etc" v-model="order.order_description"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary mt-2" @click="orders">Order</button>
                    </form>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import axios from "axios"

export default {
    name: 'FoodDetail',
    components: {
    Navbar,
    Footer
  },
  data(){
    return{
        product: {},
        order: {}
    }
  },
  methods: {
    setProduct(data) {
        this.product = data
    },
    orders(){
        if(this.order.amount_order){
            this.order.products = this.product
        axios.post("http://localhost:3000/carts", this.order)
        //toast nya dari https://github.com/ankurk91/vue-toast-notification
        .then(() => 
        this.$router.push({path: "/cart"}),
        this.$toast.success('Order Success', {
            position: 'top-right',
            duration: 3000,
            dismissible: true
        }))

      .catch((error) => console.log("Error :( ", error))
        }else{
        this.$toast.error('Order must be filled', {
            position: 'top-right',
            duration: 3000,
            dismissible: true
        })
        }
    }
  },
  mounted() {
    axios.get("http://localhost:3000/products/" + this.$route.params.id)
      .then((response) => this.setProduct(response.data))

      .catch((error) => console.log("Gagal :( ", error))
  },
}
</script>

<style>

</style>