<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h4 class="pt-3">{{ category.categoryName}}</h4>
                <h5 styls="color:#686868;">{{ msg }}</h5>
            </div>
        </div>

        <div class="row">
            <img v-show="len == 0" class="img-fluid" src="../../assets/sorry.jpg" alt="Sorry">
            <div v-for="product of category.products" :key="product.id" class="col-md-6 col-xl-4 col-12 pt-3 justify- content-around d-flex">
                <ProductBox :product="product">
                </ProductBox>
            </div>
        </div>
    </div>
</template>

<script>
import ProductBox from "../../components/Product/ProductBox.vue";   
   export default {
    // component:{ProductBox},
    name :"ListProduct",
    data() {
        return {
            id: null,
            categoryIndex: null,
            category:{},
            len : 0,
            msg :null,
        }
    },
    components: {ProductBox},
    props: ["baseURL","products","categories"],
    mounted() {
        this.id = this.$route.params.id;
        // this.category = this.categories.find(category => category.id == this.id)
        this.category = this.categories.find(category => category.id == this.id);
        // this.category = this.category[this.categories]
        // this.category = this.category[this.categories]
        // this.len = this.category.products.length;
        this.len = this.category.products.length;
        if(this.len == 0) {
            this.msg = "Sorry, no products found";
        } else if(this.len == 1) {
            this.msg = "Only 1 product found";
        } else {
            this.msg = this.len + " products found";
        }
    }
   }
</script>