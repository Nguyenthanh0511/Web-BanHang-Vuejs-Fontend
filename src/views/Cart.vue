<template>
  <div class="container">
    <div class="col-12 text-center">
      <h3 class="pt-">
        Shopping cart
      </h3>
    </div>
    <!-- Loop cart -->
    <div v-for="cartItem in cartItems" :key="cartItem.id" class="row mt-2 pt-3">
      <h3 v-if="!this.cartItems">
        Không có sản phẩm nào
      </h3>
      <div class="col-2">
      </div>
      <div class="col-md-3 embed-responsive ">
        <img :src="cartItem.product?.imageURL" alt="" class="w-100 " style="object-fit:cover" />
      </div>
      <div class="col-md-5 px-3">
        <div class="card-block px-3">
        <h6 class="card-title">
            {{cartItem.product.name}}
        </h6>
            <p class="md-0 font-weight-bold" id = "item-price">
                ${{cartItem.product.price}} cái
            </p>
            <p class="mb-0">
                Quantity :{{cartItem.quantity}}
            </p>
        </div>

        <p class="mb-0" >
            price total:
                ${{cartItem.product.price * cartItem.quantity}}
        </p>
        <br>
       
      </div>
       <div class="col-2"></div>
      <div class="col-12"><hr /></div>
        <!-- <a href="#" class="text-right removeA" v-if="cartItems.length" @click="deleteItem(cartItem.id)"
            >Remove From Cart</a
          > -->
        <button class=" btn btn-dark" style="width:15%;" v-if="cartItems.length" @click="deleteItem(itemtId)">
          Remove Item
        </button>
    </div>
      <div class="d-flex justify-content-center total-cost pt-2 text-right ">
        <h5>Total cost all :${{totalCost}}</h5>
      </div>
    
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "CartView",
  data() {
    return {
      cartItems: [],
      token: null,
      totalCost: 0,
      
    };
  },
  props: ["baseURL"], 
  methods: {
    // fetch all items
    //Đọc mã token sau để hiểu hơn :
    // {"cartItems":
    // [{"id":2491,"quantity":0,"product":
    // {"id":28,
    // "name":"DG1",
    // "imageURL":"https://plus.unsplash.com/premium_photo-1661628680845-39b71e9be303?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8a2V5Ym9hcmRzfGVufDB8fDB8fHww"
    // ,"price":70.0,"description":"Tout le monde est parfait "}}
    // ,{"id":2490,"quantity":0,"product":{"id":90,"name":"32 LED TV LG"
    // ,"imageURL":"https://www.lg.com/id/images/tv/md05970757/gallery/medium02.jpg","price":1999000.0,"description":"TV hadir dalam berbagai ukuran dan desain. Desain modern sering kali mencakup layar datar yang tipis dan bingkai yang minimalis untuk memberikan tampilan yang lebih luas dan mengesankan."}}],"totalCost":0.0}
    async listCartItem(){
      if(!this.token){
        console.log('Token is null');
        // return;
      }
      try {
        const response = await axios.get(`${this.baseURL}cart/?token=${this.token}`);
        this.cartItems = response.data.cartItems;
        if(!this.cartItems){
          console.log('cart null');
        }
        this.totalCost = response.data.totalCost;
      } catch (err) {
        console.error(err);
      }
    },



    // async deleteItem(itemtId){
    //     try{
    //         const response=axios.delete(`${this.baseURL}cart/delete/${itemtId}/?token=${this.token}`)
    //         if (response.status == 200) {
    //             this.$router.go(0);
    //         }
    //         this.$emit('fetchData');
        
    //     }catch(err){
    //         console.log(err);
    //     }
    // },
    deleteItem(itemtId){
      axios
      .delete(`${this.baseURL}cart/delete/${itemtId}/?token=${this.token} `)
      .then(
        (responsive)=>{
          if(responsive.status == 200){
            this.$router.go(0);
          }
          this.$emit('fetchData');
        },
        (error)=>{
          console.log(error)
        }
        )
    }
    
  },
  mounted() {
    this.token = localStorage.getItem("token");
    this.listCartItem();
  },
};
</script>

<style scoped>
.removeA{
  text-decoration:none;
  font-size :18px;
  font-weight:bold;
  color:#333;
  display:block;

}
  /* Add your styles here if needed */
    /* .image-f */
</style>
