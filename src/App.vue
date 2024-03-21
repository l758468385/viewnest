<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { findVideoList } from "./api/video";
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    let videoList = ref([]);

    onMounted(() => {
      findVideoList().then((res) => {
        videoList.value = res.data;
      });
    });

    return {
      videoList,
    };
  },
};
</script>

<style>
#app {
  //padding: 20px;
  color: rgb(51, 51, 51);
  background: rgb(238, 238, 238);
  font: 13px / 1 微软雅黑, Verdana, Arial, Helvetica, sans-serif;
  min-height: 100vh;
  box-sizing: border-box;
}
</style>
