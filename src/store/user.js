//保存数据的地方
const state={
  user:null
}
//对外提供获取数据的计算属性,对外暴露的get
//进行数据操作的时候尽量的不要去直接修改state，而是用getter
//具体页面使用扩展函数进行接收
const getters={
  //判断用户是否已经登录
  isLogin:state=>state.user != null,
  //获取用户信息
  user:state=>state.user
}

//外部可以调用修改数据的方法,对外暴露的set
const actions={
  //保存用户的信息
  //此地的actions是提交给mSetUser进行真正的修改
  setUser:(context,user)=>{
    context.commit('mSetUser',user)
  }
}

//mutations 真正持久去修改数据的
const mutations={
  mSetUser:(state,user)=>{
    state.user = user;
  }
}


export default {
  state,getters,actions,mutations
}
