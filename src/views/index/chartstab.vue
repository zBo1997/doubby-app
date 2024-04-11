<template>
    <div class="chatrstab">
        <van-tabs v-model:active="active">
            <van-tab :title="v.title" v-for="(v,i) in chatrstab" :key="i">
                <div class="chatrstab-content">
                    <div class="chatrstab-item">
                        <div class="chatrstab-list" v-for="(item,i) in v.content" :key="i">
                            <div class="chatrstab-img">
                                <img :src='`/src/assets/images/${item.img_url}`'/>
                            </div>
                            <div class="chatrstab-title">
                                <span>{{ item.name }}</span>
                                <p>{{ item.describle }}</p>
                                <p>{{ item.num }}</p>
                            </div>
                        </div>
                  
                    </div>
                </div>
            </van-tab>
        </van-tabs>
    </div>

</template>
  
<script setup>
import { ref } from 'vue'
const active = ref(0)
const chatrstab = ref(
    [
        {title:"全部",content:[
            {name:"好像找个男票啊~",img_url:"1.jpeg",describle:"我叫莎莎",num:"23岁",},
            {name:"可盐可甜~",img_url:"2.jpeg",describle:"我叫莎莎",num:"23岁",},
            {name:"幼师，23岁~",img_url:"3.jpeg",describle:"我叫莎莎",num:"23岁",},
            {name:"好像找个男票啊~",img_url:"4.jpeg",describle:"我叫莎莎",num:"23岁",},
            {name:"好像找个男票啊~",img_url:"5.jpeg",describle:"我叫莎莎",num:"23岁",},
            {name:"好像找个男票啊~",img_url:"6.jpeg",describle:"我叫莎莎",num:"23岁",},
            {name:"好像找个男票啊~",img_url:"1.jpeg",describle:"我叫莎莎",num:"23岁",},
            {name:"好像找个男票啊~",img_url:"2.jpeg",describle:"我叫莎莎",num:"23岁",},
            {name:"好像找个男票啊~",img_url:"3.jpeg",describle:"我叫莎莎",num:"23岁",},
            {name:"好像找个男票啊~",img_url:"4.jpeg",describle:"我叫莎莎",num:"23岁",}]},
        {title:"男生",content:[{name:"好像找个男票啊~",img_url:"1.jpeg",describle:"我叫莎莎",num:"23岁",},
            {name:"可盐可甜~",img_url:"2.jpeg",describle:"我叫莎莎",num:"23岁",},
            {name:"幼师，23岁~",img_url:"3.jpeg",describle:"我叫莎莎",num:"23岁",},
            {name:"好像找个男票啊~",img_url:"4.jpeg",describle:"我叫莎莎",num:"23岁",}]},
        {title:"女生",content:[{name:"内容1"},{name:"内容2"},{name:"内容3"}]},
        {title:"游戏",content:[{name:"好像找个男票啊~",img_url:"1.jpeg",describle:"我叫莎莎",num:"23岁",},
            {name:"可盐可甜~",img_url:"2.jpeg",describle:"我叫莎莎",num:"23岁",},
            {name:"幼师，23岁~",img_url:"3.jpeg",describle:"我叫莎莎",num:"23岁",},
            {name:"好像找个男票啊~",img_url:"4.jpeg",describle:"我叫莎莎",num:"23岁",}]},
        {title:"爽文",content:[{name:"内容1"}]},
        {title:"热血",content:[{name:"好像找个男票啊~",img_url:"1.jpeg",describle:"我叫莎莎",num:"23岁",},
            {name:"可盐可甜~",img_url:"2.jpeg",describle:"我叫莎莎",num:"23岁",},
            {name:"幼师，23岁~",img_url:"3.jpeg",describle:"我叫莎莎",num:"23岁",},
            {name:"好像找个男票啊~",img_url:"4.jpeg",describle:"我叫莎莎",num:"23岁",}]},
        {title:"科幻",content:[{name:"内容1"}]}
    ]
)

</script>
  
  
<style scoped>
</style>