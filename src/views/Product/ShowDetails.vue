<template>
    <div class="container">
        <div class="row ">
            <div class="col-md-1"></div>
            <!-- display image -->
            <div class="col-md-4 col-12">
                <img :src="product.imageURL" class="img-fluid">
            </div>
            <!-- display product details -->
            <div class="col-md-6 col-12 pt-3 pt-md-0">
                <h4>{{ product.name }}</h4>
                <h6 class="catgory font-italic">{{ category.categoryName }}</h6>
                <h6 class="font-weight-bold"> $ {{ product.price }}</h6>
                <p>
                    {{ product.description }}
                </p>
                <!-- Giá tiền  -->
                

                <div class="d-flex  flex-row justify-content-between">
                     <div class="input-group col-md-3 col-4 p-0">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Quantity</span>
                        </div>
                    <input class="form-control" type="number" v-model="quantity"  style="width: 80px;"/>
                   </div>
                <!-- add to cart  -->
                <div class="input-group col-md3 col-4 p-0">
                    <button
                    type=""
                    id="add-to-cart-button"
                    class="btn"
                    @click="addToCart(this.id)"
                    >
                    Thêm cart
                    </button>
                    <ion-icon name="cart-outline" v-pre></ion-icon>
                </div>
                </div>
                <!-- Feature -->
                <div class="features pt-3">
                    <h5><strong>Features</strong></h5>
                     <ul>
                       <li>Vive lopped hear to my face discation here that people It also allows me to allows</li>
                       <li>My favorite hobby is reading. I love to read books of all genres It also allows me to</li>
                       <li>from fiction to non-fiction. I find that reading helps me to relax and It also allows me</li>
                       <li>escape from the stresses of everyday life. It also allows me to It also allows me to</li>
                       <li>learn new things and broaden my horizons.Here is a translation of the paragraph my</li>
                    </ul>
                </div>
                <button id="wishlist-button" class="btn btn-primary p-1 py-0 ml-3" @click="addWishList">
                    {{swishlist}}
                </button>

            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'
   export default {
  data() {
    return {
      product: {},
      category: {},
      swishlist: "Thêm danh sách",
      token: null,
      quantity:1,
      productId:0,
    };
  },
  props: ["baseURL", "products", "categories"],
  methods: {
    
    async addWishList() {
      if (!this.token) {
        swal({
          text: "Làm ơn hãy đăng nhập để sử dụng add wish list",
          icon: "error",
          closeOnClickOutside: false,
        });
        return;
      }
      try {
        const response = await axios.post(`${this.baseURL}wishlist/add?token=${this.token}`, {
          id: this.product.id,
          
        });
         
        if (response.status === 201) {
          this.swishlist = "status 201";
          swal({
            text: "Product đã được thêm vào wishlist",
            icon: "success",
            closeOnClickOutside: true,
          });
        }
      } catch (error) {
        console.error("Error adding to wishlist:", error);
      }
    },
  async addToCart(){
    if(!this.token){
       swal({
          text: "Làm ơn hãy đăng nhập để sử dụng",
          icon: "error",
          closeOnClickOutside: false,
        });
        return;
    }
    try{
      const response = await axios.post(`${this.baseURL}cart/add?token=${this.token}`, {
          productId: this.id,
          quantity: this.quantity,
        });
        if(response.status ==201){
          swal({
          text: "Đã thêm ",
          icon: "success",
          closeOnClickOutside: true,
          });
        }
    }
    catch(err){
      console.log(err);
    }
  },
  },
  mounted() {
    this.token = localStorage.getItem("token");
    this.id = this.$route.params.id;
    this.product = this.products.find((product) => product.id == this.id);
    this.category = this.categories.find((category) => category.id == this.product.categoryId);
  },
};
</script>
<style scoped>

.category {
    font-weight: 400;
}
/* #wishlist-button{
    /* background-color : #b9b9b9; 
} */

#show-cart-button {
  background-color: #131921;
  color: white;
  border-radius: 0;
}
.input-group > .form-control, .input-group > .form-select, .input-group > .form-floating {
    position: relative;
    flex: 0 0 auto;
    width: 1%;
    min-width: 0;
    height: 65%;
}
#add-to-cart-button{
   background-color: #febd69 ;
    border-radius: 10px;
}
</style>