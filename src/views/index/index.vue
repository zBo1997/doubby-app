<template>
    <!-- 开屏壁纸 -->
    <div class="spread">
        <span>点击跳转</span>
    </div>
    <div class="container">
        <van-sticky>
            <Header />
        </van-sticky>
        <Charts />
        <Chartstab />
        <Banner />
        <Recommend />
    </div>
</template>
  
<script setup>
import Header from "./header.vue"
import Charts from "./charts.vue"
import Chartstab from "./chartstab.vue"
import Banner from "./banner.vue"
import Recommend from "./recommend.vue"
import { ref } from 'vue'



</script>
  
  
<style scoped></style>