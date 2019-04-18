import mutations from './home_login/mutations';


const state = {
  num:[1,2,3],
  logined: '',
  showLoading:false,
  prevUrl:'/'
}

 



export default {
  namespaced: true,
  state,
  mutations
}