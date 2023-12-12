import axios from 'axios';

export default (await import('vue')).defineComponent({
components: { MainView, FooterBox },
data() {
return {
baseURL: 'https://limitless-lake-55070.herokuapp.com/',
products: [],
categories: []
};
},
methods: {
async fetchData() {
await axios.get(this.baseURL + "category/")
.then((res) => (this.categories = res.data))
.catch((err) => console.log('err', err));

await axios.get(this.baseURL + "product/")
.then((res) => (this.products = res.data))
.catch((err) => console.log('err', err));
}
},

mounted() {
this.fetchData();
}
});
