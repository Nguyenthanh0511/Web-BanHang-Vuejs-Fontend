<template>
   <div class="container">
        <div class="row">
            <div class="col-12 text-center pt-3">
                <!-- display logo -->
                 <router-link :to="{ name: 'Home' }">
                     <img id="logo" src="../assets/icon.png" />
                 </router-link>
            </div>
        </div>
        <!-- From  -->
        <div class="row">
            <div class="col-12 justify-content-center d-flex flex-row pt-5">
                <div id="signup-div" class=" flex-item" style="border: 2px solid black; width: 350px; border-radius: 12px;">
                    <h2 class="text-center" style="margin-top: 10px;">Đăng nhập</h2>
                    <form @submit="signin" class="pt-4 pl-4 pr-4 ">
                         <div class="form-group px-3">
                        <!-- <label style="margin-left: -300px;">Email</label> -->
                        <input
                            type="email"
                            class="form-control"
                            v-model="email"
                            required
                            placeholder="Email"
                        />
                        </div>
                        <br>
                        <!-- Tạo form chập  -->
                       
                        <div class="form-group px-3 ">
                        <!-- <label style="margin-left: -270px;">Password</label> -->
                        <input
                            type="password"
                            class="form-control"
                            v-model="password"
                            required
                            placeholder="Password"
                        />
                        </div>
                         <div class="mt-5 d-flex justify-content-center" style="padding :-20px;" >
                            <button type="submit" class="btn btn-primary py-0 px-3">
                                Đăng nhập
                            </button>
                        </div>
                    </form>
                     <hr />
                    <small class="form-text text-muted pt-2 pl-4 text-center"
                    >
                    <router-link class="link" :to = "{name:'SignUp'}">
                        <!-- <a class="has-svg-icon" href="">
                            Đăng ký Tài Khoản
                        </a> -->
                        <button class="btn " style="">
                            Đăng Ký tài khoản
                        </button>
                    </router-link>
                    </small
                    >
                    <p class="text-center">
                        <!-- <router-link
                        class="btn btn-dark text-center mx-auto px-5 py-1 mb-2"
                        :to="{ name: 'Signin' }"
                        >Signin Here</router-link
                        > -->
                    </p>
                </div>

            </div>

        </div>

        <!-- form -->
    </div>
</template>

<script>
import axios from'axios'
import swal from'sweetalert'
export default {
name:"SigninWebsite",
props:["baseURL"],
data(){
    return{
        email:null,
        password:null,
        loading:null
    }
},
methods:{
    async signin(e){
        e.preventDefault();
        //loading 
        this.loading = true; //Con trỏ tham chiếu tới giá trị đúng
        //Khởi tạo user mang thuộc tính tài khoản 
        const user = {
            email:this.email,
            password:this.password,
        }
        //Dùng axios lấy thông tin đã 
        await axios 
        .post(`${this.baseURL}user/signIn`, user)
        .then((res)=>{
             localStorage.setItem("token", res.data.token);// token : give to the data , from data this is res.data.token 
            this.$emit("fetchData");
            this.$router.push({ name: "Home" });
        })
        .catch((err) => {
            swal({
                    text: "Unable to Log you in!",
                    icon: "error",
                    closeOnClickOutside: false,
            })
            console.log("err"+err);
        })
        .finally(()=>{
            this.loading = false;
        })
        //Nếu mật khẩu băng với mk bên trong user thì true 
        //Ngược lãi lỗi 
    }
},
mounted(){ 
    this.loading=false; // Phần mouted này lại liên quan đến 
}

}
</script>

<style>

</style>