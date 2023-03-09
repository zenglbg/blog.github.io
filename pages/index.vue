<template>
  <div class="banner-box">
    <el-carousel height="inherit">
      <el-carousel-item v-for="item in bannerlist" :key="item">
        <img :src="item" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
  <div>
    <h1>
      <NuxtLink to="/chat/chat">前往chat页面</NuxtLink>
    </h1>
  </div>
</template>

<script setup>
// Define params wherever, through `defineProps()`, `useRoute()`, etc.
// const { data, pending, refresh } = await useAsyncData('getposts', () =>
//   $fetch(`http://localhost/post`),
// );
const bannerlist = ref([
  'https://img.zlbg.cc/images/blog/ext1.jpeg',
  'https://img.zlbg.cc/images/blog/exthong_kong_4103334_1920.jpg',
  'https://img.zlbg.cc/images/blog/extgreat_wall_3022907_1920.jpg',
  'https://img.zlbg.cc/images/blog/extanalytics_3088958_640.jpg',
]);
const { data: posts, refresh: getData } = await useFetch(
  'http://localhost/post',
);
console.log('🚀 ~ file: index.vue:25 ~ posts:', posts.value);
</script>

<style lang="scss" scoped>
.banner-box {
  height: 100vh;
  :deep(.el-carousel) {
    height: inherit;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

h2 {
  color: pink;
}
</style>
