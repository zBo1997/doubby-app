
<template>
    <div class="lide">
        <van-cell title="设置喜好" is-link @click="showPopup"></van-cell>
        <van-popup             
            v-model:show="show"
            round
            closeable
            close-icon-position="top-left"
            close-icon="arrow-down"
            position="bottom"
            :style="{ height: '50%' }"
            >
            <div class="like-list">
                <h4>选择你的喜好</h4>
                <p>请选择喜欢的分类：已经选择 {{}} 个</p>
                <ul>
                    <li v-for="(v,i) in like_list">{{ v.name }}</li>
                </ul>
            </div>
        
        </van-popup>
    </div>

</template>
  
<script setup>
import { ref } from 'vue';
const show = ref(false);
const showPopup = () => {
    show.value = true;
};

const like_list = ref([
    {name:'都市',id:1},
    {name:'科幻',id:2},
    {name:'体育',id:3},
    {name:'历史',id:4},
    {name:'教育',id:5},
    {name:'游戏',id:6},
    {name:'外卖',id:7},
    {name:'向导',id:8},
])


</script>
  
  
<style>
</style>