<template>
  <div class="container" py-4>
    <div class= "row ">
      <div class="col-12 d-flex justify-content-center">
       <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSRTbtzf1Mp52cmK2-fUMECKB-XiYhEpm3cPpqskbz2YjC8mt6h8H93LFTaRb5ZiX4ZN6hM8bVH3_HtGeb4dqw" alt="Card image cap">
          <div class="card-body">
          <router-link :to="{name: 'Category'}">
            <a href="#" class="btn btn-primary d-flex justify-content-center">Let's Go Category View ...</a>
          </router-link>
        </div>
      </div>
      </div>
      <div class="col-12 d-flex justify-content-center">
       <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="data:image/jpeg;base64,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">
          <div class="card-body">
            <router-link :to="{name: 'AdminProduct'}">
              <a href="#" class="btn btn-primary d-flex justify-content-center">Let's Go Product View ...</a>
            </router-link>
          </div>
        </div>
        
      </div>
    </div>
  </div>
  <!-- <router-link :to = "{name: 'Category'}">
    <button class="btn btn-primary btn-lg">Admin Category</button>
  </router-link>
  <br>
  <router-link :to = "{name: 'Product'}">AdminProduct
    <button class="btn btn-primary btn-lg">Admin Sản phẩm</button>
  </router-link> -->
</template>

<script>
export default {

}
</script>

<style>
.btn{
  margin-bottom: 20px;
}
</style>