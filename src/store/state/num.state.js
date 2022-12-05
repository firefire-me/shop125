export default{
  namespaced:true,

//   state： 统一定义公共数据（类似于data(){return {a:1, b:2，xxxxxx}}）

//   mutations ： 使用它来修改数据(类似于methods)
  
//   getters： 类似于computed(计算属性，对现有的状态进行计算得到新的数据-------派生 )
  
//   actions： 发起异步请求
  
//   modules： 模块拆分




  // 全局的状态初始值
  state: {
      count:1, 
  },
  // 计算state,获取对应的值
  getters: {
      countStatus(state){
      return state.count<=1
      }
  },
  // 更新状态的方法-更新state的唯一方法,commit mutations
  mutations: {
      setCount(state,num){
          state.count=num
      }
  },
  // 可以异步操作,可以反回promise,更改数据还是传递到mutations去更改
  actions: {
      setCountPromise(context,num){
      return new Promise((resolve,reject)=>{
          if(num>100){
          reject("值不能大于100")
          }else{
          context.commit("setCount",num)
          resolve()
          }
      })
      }
},
}