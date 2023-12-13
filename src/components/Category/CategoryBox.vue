<template>

 <div class="card w-100 h-100" style="margin-top: 10px">

          <div class="col-12 col-sm-6 col-xl-12 embed-responsive embed-responsive-16by9">
            <img
              class="card-img-top embed-responsive-item"
              :src="category.imageUrl"
              alt="Card image cap"
            />
          </div>
          <div class="card-body d-flex flex-column justify-content-between">
          <router-link class="removeA" :to="{name: 'ListProducts', params: {id: category.id} }">
            <h5 class="card-title">{{ category.categoryName }}</h5>
          </router-link>
          <p class="card-text">
            {{ category.description }}
          </p>
          <router-link :to="{name: 'EditCategory', params: {id: category.id}}" v-show="$route.name == 'Category'">
            <button class="btn btn-primary mt-auto">Edit</button>
          </router-link>     
          <!-- <a href="#" class="btn btn-primary">Edit</a> -->
      </div>    
    
  </div>
</template>

<script>

// export default {
//   name: "CategoryBox",
//   props: ["category"],
//   methods: {
//     listProducts() {
//       this.$router.push({
//         name: "ListProducts",
//         params: { id: this.category.id },
//       });
//     },
//   },
// };
export default {
  name: "CategoryBox",
  props: ["category"],
  methods: {},
};
</script>

<style scoped>
.card-img-top {
  object-fit: cover; /* Giữ tỷ lệ 16:9 và điều chỉnh kích thước hình ảnh để lấp đầy phần tử cha */
  max-height: 100%; /* Đảm bảo hình ảnh không vượt quá chiều cao của div cha */
  max-width: 100%; /* Đảm bảo hình ảnh không vượt quá chiều rộng của div cha */
}
.removeA{
  text-decoration:none;
  font-size :18px;
  font-weight:bold;
  color:#333;
  display:block;

}
/* .category-box {
  display: flex;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ddd;
}

.category-box img {
  max-width: 100px;
  max-height: 100px;
  margin-right: 10px;
}

.category-box div {
  flex: 1;
}

.category-box h5 {
  margin: 0;
}

#edit-category {
  color: blue;
  cursor: pointer;
} */
</style>
