<template>
  <div>
    <h2>vue3的生命周期</h2>
    <div id="dom">{{msg}}{{num}}</div>

    <!--事件及方法直接声明在setup  -->
    <button v-on:click="handleClick">click me</button>
    <hr>

    <!-- v-model 双向绑定  -->
    <!-- input:
      blur:失去焦点
      focus：获取焦点
      change：内容更改
    
       -->
    <input type="text" placeholder="请输入姓名" v-model="userName"><br/>
    <input type="text" placeholder="请输入电话" v-model="userPhone"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput"
    ><br/>

    <textarea  cols="30" rows="10" placeholder="请输入您的建议" v-model="userInput"></textarea>

    <p> {{userName}}----{{userInput}}  </p>
    <button @click="submit">提交</button>


  </div>
</template>

<script>
import { reactive, toRefs , onBeforeMount , onMounted, onBeforeUpdate, onUpdated } from 'vue'

export default {
  name: "about",
  setup() {
    const data =reactive({
      msg: "你好！",
      msg2:"hello world",
      num:0,
      userName: "",
      userInput:"",
      userPhone:"",


    })

    onBeforeMount(()=>{
      console.log("onBeforeMount", document.querySelector("#dom"));
    })
    onMounted(()=>{
      console.log("onMounted", document.querySelector("#dom"));
    })

    onBeforeUpdate(()=>{
      console.log("onBeforeUpdate", document.querySelector("#dom"));
    })
    onUpdated(()=>{
      console.log("onUpdated", document.querySelector("#dom"));
    })


      const handleClick = () =>{
        alert("你好");
      }

      const submit =()=>{
        alert( `${data.userName}的建议是${data.userInput}`)
      }

      const handleBlur =()=>{
        console.log("失去焦点了")
        if(!data.userPhone){
          alert("手机号必填")
         }
        
      }
      const handleFocus =()=>{
         console.log("获取焦点了")

      }

      const handleInput =()=>{
        // 正则验证手机号

        if(!/^[1][3,4,5,7,8][0-9]{9}$/.test(data.userPhone)){

            console.log("不符合手机号")
        }else{
          console.log("符合手机号")
        }
      }


      return{
        ...toRefs(data),
        handleClick,
        submit,
        handleFocus,
        handleBlur,
        handleInput,

      }



  },
}
</script>












