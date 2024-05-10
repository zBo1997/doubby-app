<template>
    <!-- 开屏壁纸 -->
    <div class="spread" v-show="addBack">
        <span class="jump" @click="jump">点击跳转 <b>{{ time }}</b></span>
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
import { onMounted, ref } from 'vue'

// 广告开关
let addBack = ref(true)
// 到期时间
let time = ref(5)
let timer = null;

function show_false() {
    time.value--
    if (time.value == 0) {
        addBack.value = false;
    }
};
function autoTimer() {
    timer = setInterval(show_false, 1000);//1秒的定时器
};

function jump() {
    addBack.value = false;
    clearInterval(timer)
}

/**
 * 声明周期函数
 */
onMounted(() => {
    autoTimer();
})
</script>
<style scoped></style>