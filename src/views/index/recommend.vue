<template>
    <div class="recommend">
        <div class="recommend-like">
            <h3>为你推荐</h3>
            <Like/>
        </div>
        <div class="recommend-list">
            <ul>
                <li v-for="(v, i) in recommendList" :key="i">
                    <div class="recommend-img">
                        <img :src="`/src/assets/images/${v.img_url}`">
                    </div>
                    <div class="recommend-title">
                        <h4>{{ v.title }}</h4>
                        <p class="recommend-title-author">{{ v.author }}</p>
                        <p class="recommend-title-desc">
                            {{ v.desc }}
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'
import Like from "./like.vue"
let recommendList = ref([
    { title: "我是标题", img_url: "1.jpeg", author: "作者名字", desc: "内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示" },
    { title: "我是标题", img_url: "2.jpeg", author: "作者名字", desc: "内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示" },
    { title: "我是标题", img_url: "3.jpeg", author: "作者名字", desc: "内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示" },
    { title: "我是标题", img_url: "6.jpeg", author: "作者名字", desc: "内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示" },
    { title: "我是标题", img_url: "4.jpeg", author: "作者名字", desc: "内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示,内容展示" }
])

</script>
  
  
<style scoped></style>