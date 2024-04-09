<template>
    <div class="popup">
        <van-cell is-link @click="showPopup">热门分类</van-cell>
        <van-popup v-model:show="show" closeable position="right" :style="{ height: '100%', width: '70%' }">
            <div class="poplist">
                <h4>热门分类</h4>
                <ul>
                    <li>首页</li>
                    <li>爽文</li>
                    <li>男生</li>
                    <li>女生</li>
                    <li>女生</li>
                    <li>武侠</li>
                </ul>
            </div>
        </van-popup>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'
const show = ref(false)
const showPopup = () => {
    show.value = true
}
</script>
  
  
<style scoped></style>