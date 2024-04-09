<template>
    <div class="footer">
        <div class="footer-seat">
            <div class="footer-list">
                <ul>
                    <li v-for="(v, i) in footerlist" :key="i">
                        <router-link :to="v.path">
                            <i class="iconfont" :class="v.icon"></i>
                            <p>{{ v.title }}</p>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'
let footerlist = ref([
    { title: "书城", icon: "iconfont icon-doubbyshuba", path: "/index" },
    { title: "社区", icon: "iconfont icon-doubbyfenxiang", path: "/community" },
    { title: "福利", icon: "iconfont icon-doubbyshequhuodong", path: "/welfare" },
    { title: "我的", icon: "iconfont icon-doubbygerenzhongxin-zhihui", path: "/my" }
])
</script>

  
<style scoped></style>