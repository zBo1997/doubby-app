<template>
    <div class="banner">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item, i) in bannerList">
                <img :src="`/src/assets/images/${item.img_url}`" :key="item.id" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'
let bannerList = ref([
    { id: 1, img_url: '6.jpeg' },
    { id: 1, img_url: '2.jpeg' },
    { id: 1, img_url: '1.jpeg' },
    { id: 1, img_url: '3.jpeg' }

])


</script>
  
  
<style scoped></style>