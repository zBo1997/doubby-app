
<template>
    <div class="lide">
        <van-cell title="设置喜好" is-link @click="showPopup"></van-cell>
        <van-popup
            v-model:show="show"
            closeable
            position="bottom"
            :style="{ height: '30%' }"
        />
    </div>

</template>
  
<script setup>
import { ref } from 'vue';
const show = ref(false);
const showPopup = () => {
    show.value = true;
};



</script>
  
  
<style>
</style>