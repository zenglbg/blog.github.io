<template>
  <div class="common-layout">
    <el-container>
      <!-- <el-header>Header</el-header> -->
      <app-header></app-header>
      <slot />
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'app-container',
  setup() {
    const bannerlist = ref([
      'https://img.zlbg.cc/images/blog/ext1.jpeg',
      'https://img.zlbg.cc/images/blog/exthong_kong_4103334_1920.jpg',
      'https://img.zlbg.cc/images/blog/extgreat_wall_3022907_1920.jpg',
      'https://img.zlbg.cc/images/blog/extanalytics_3088958_640.jpg',
    ]);
    return {
      bannerlist,
    };
  },
});
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
.common-layout {
  min-height: 100vh;
}

.center {
  margin: 0 auto;
}
</style>
