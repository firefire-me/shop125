
<template>
    <h1 >hello world!</h1>
    <p v-text="name"></p>
    <p>{{name}}</p>
    <p v-html="info"></p>

    <!-- v-bind -->
    <p v-bind:data="dataVal">我有属性data</p>

    <p class="text"  :class="{'red' :!isRed}">我是红色的</p>
    <p v-if="!isTrue">我是if存在</p>
    <p v-show="!isTrue">我是show存在</p>

    <p v-if="isFalse">if</p>
    <p v-else>else</p>

    <ul>
      <!-- v-for -->
      <li v-for="(item,index) in userList" :key="index">
        学生姓名: {{item.username}}  
        学生年龄: {{item.userage}}
      </li>

    </ul>





</template>


<script>
import {reactive,toRefs} from "vue"

export default{
  name:"home",
  setup(){
    // beforeCearete和created
    const data = reactive({
      name: "小红",
      age: 20,
      info:"<i>我是斜体字</i>",
      dataVal: 2,
      isRed:true,
      isTrue: true,
      isFalse:false,
      userList:[
        {
          username:"小红",
          userage:10
        },
        {
          username:"小明",
          userage:12
        },
        {
          username:"小红2",
          userage:10
        },
        {
          username:"小红3",
          userage:15
        },
        {
          username:"小红4",
          userage:14
        },
      ]
    })

    return {
      ...toRefs(data)
    }
  }
}

</script>

<style >
.red{
  color: red;
}

</style>