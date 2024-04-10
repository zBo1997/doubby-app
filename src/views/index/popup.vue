<template>
    <div class="popup">
        <van-cell is-link @click="showPopup">热门分类</van-cell>
        <van-popup v-model:show="show" closeable position="right" :style="{ height: '100%', width: '70%' }">
            <div class="poplist">
                <h4>热门分类</h4>
                <ul>
                    <li v-for="(v, i) in popuplist" :key="i" @click="n = i" :class="n == i ? 'active' : ''">{{ v }}</li>
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
const popuplist = ref([
    "首页", "都市", "历史", '游戏', '悬疑'
])
// 点击常量，点击以后变换动态绑定对应样式
const n = ref(0)

</script>
  
  
<style scoped></style>