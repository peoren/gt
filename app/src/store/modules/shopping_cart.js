import mutations from './shopping_cart/mutations';


const state = {
  num:[1,2,3],
  logined: '',
  showLoading:false,
  prevUrl:'/',
  allprice:'',
  integral:''
}

 



export default {
  namespaced: true,
  state,
  mutations
}