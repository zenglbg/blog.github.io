<template>
  <!-- <embed src="/audio/花海 - 周杰伦.mp3" hidden="true" autostart="true" loop="true"> -->

  <div class="common-layout" @click="play">
    <audio
      :ref="mp3"
      src="/audio/花海 - 周杰伦.mp3"
      :autoplay="true"
      :loop="true"
    ></audio>
    <el-container>
      <!-- <el-header>Header</el-header> -->
      <app-header></app-header>
      <main>
        <slot />
      </main>
      <app-footer></app-footer>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "app-container",
  setup() {
    const mp3 = ref();
    function play() {
      mp3.value.play();
    }

    const bannerlist = ref([
      "https://img.zlbg.cc/images/blog/ext1.jpeg",
      "https://img.zlbg.cc/images/blog/exthong_kong_4103334_1920.jpg",
      "https://img.zlbg.cc/images/blog/extgreat_wall_3022907_1920.jpg",
      "https://img.zlbg.cc/images/blog/extanalytics_3088958_640.jpg",
    ]);
    return {
      bannerlist,
      mp3,
      play,
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
* {
  padding: 0;
  margin: 0;
}

.common-layout {
  min-height: 100vh;
  .el-container {
    flex-direction: column;
  }
}

.center {
  margin: 0 auto;
}
</style>
