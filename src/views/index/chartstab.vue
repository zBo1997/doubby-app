<template>
    <div class="chatrstab">
        <van-tabs v-model:active="active">
            <van-tab title="标签 1">内容 1</van-tab>
            <van-tab title="标签 2">内容 2</van-tab>
            <van-tab title="标签 3">内容 3</van-tab>
            <van-tab title="标签 4">内容 4</van-tab>
        </van-tabs>
    </div>
    <div class="box">
        <div class="box-item">11</div>
        <div class="box-item">11</div>
        <div class="box-item">11</div>

    </div>
</template>
  
<script setup>
import { ref } from 'vue'
const active = ref(0)

</script>
  
  
<style scoped>
.box {
    width: 500px;
    border: 1px solid;
}

.box-item {
    width: 100px;
    background-color: red;

}
</style>