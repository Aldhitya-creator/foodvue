<template>
    <div>
        <navbar :updatecart="carts" />
        <div class="container">
            <div class="col">
                <div class="row mt-5">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                            <li class="breadcrumb-item"><router-link to="/foods">List Foods</router-link></li>
                            <li class="breadcrumb-item active fw-bold" aria-current="page">Cart Foods</li>
                        </ol>
                    </nav>
                </div>
            </div>
            
            <div class="row">
                <div class="col">
                    <h2>Cart <strong>Foods</strong></h2>
                    <div class="table-responsive mt-3">
                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Picture</th>
                                <th scope="col">Food</th>
                                <th scope="col">Order Description</th>
                                <th scope="col">Total Order</th>
                                <th scope="col">Price</th>
                                <th scope="col">Total Price</th>
                                <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(cart, index) in carts" :key="cart.id">
                                <th scope="row">{{ index+1 }}</th>
                                <td><img :src="'../assets/images/' + cart.products.gambar" alt="Picture" width="250"></td>
                                <td><strong>{{ cart.products.nama }}</strong></td>
                                <td>{{ cart.order_description ? cart.order_description : "-" }}</td>
                                <td>{{ cart.amount_order }}</td>
                                <td> Rp.{{ cart.products.harga }}</td>
                                <td> Rp.{{ cart.products.harga*cart.amount_order  }}</td>
                                <td><button type="button" class="btn btn-danger" @click="deleteCart(cart.id)">Delete</button></td>
                                </tr>
                                <tr>
                                    <td colspan="6" align="right">
                                        <strong>Total Price :</strong>
                                    </td>
                                    <td>
                                        <strong>{{ TotalPrice }}</strong>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

              <!-- Form Checkout -->
            <div class="row justify-content-end">
                <div class="col-md-4">
                <form class="mt-4" v-on:submit.prevent>
                    <div class="form-group">
                    <label for="name">Name :</label>
                    <input type="text" class="form-control" v-model="orders.name" />
                    </div>
                    <div class="form-group">
                    <label for="noTable">Table Number :</label>
                    <input type="text" class="form-control" v-model="orders.noTable" />
                    </div>
                    <button type="submit" class="btn btn-success float-right mt-2" @click="checkout">
                    Order
                    </button>
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
    name: 'AppCart',
    components: {
    Navbar,
    Footer
  },
  data(){
    return{
      carts: [],
      orders: {},
    }
  },
  methods: {
    setCarts(data) {
      this.carts = data
    },
    deleteCart(id) {
      axios
        .delete("http://localhost:3000/carts/" + id)
        .then(() => {
          this.$toast.error("Deleted", {
            type: "error",
            position: "top-right",
            duration: 3000,
            dismissible: true,
          });

          // Update Data keranjang
          axios
            .get("http://localhost:3000/carts")
            .then((response) => this.setCarts(response.data))
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    },
    checkout() {
      if (this.orders.name && this.orders.noTable) {
        this.orders.carts = this.carts;
        axios
          .post("http://localhost:3000/orders", this.orders)
          .then(() => {

            // Hapus Semua Keranjang 
            this.carts.map(function (item) {
              return axios
                .delete("http://localhost:3000/carts/" + item.id)
                .catch((error) => console.log(error));
            });

            this.$router.push({ path: "/order-success" });
            this.$toast.success("Order Success", {
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissible: true,
            });
          })
          .catch((err) => console.log(err));
      } else {
        this.$toast.error("Name and Table must be filled", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      }
    },
  },
  mounted() {
    axios.get('http://localhost:3000/carts')
  .then((response) => this.setCarts(response.data))
  
  .catch((error) => console.log("Gagal :( ",error))
  },
  //fungsi computed buat menghitung total Harga dan untuk reduce tambah , 0
  computed: { 
    TotalPrice(){
        return this.carts.reduce(function(items, data){
            return items+(data.products.harga*data.amount_order)
        }, 0)
    }
  },
}
</script>

<style>

</style>