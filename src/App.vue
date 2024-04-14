
<template>
  <router-view />
  <Navbottom />
</template>

<script setup>
import { ref } from 'vue'
import Navbottom from './views/navbottom.vue'
//响应式数据
const abc = ref('首页')


</script>


<style>
::-webkit-scrollbar {
  /*隐藏滚轮*/
  /* display: none; */
}

::-webkit-scrollbar {
  width: 0 !important;
}

::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}
</style>