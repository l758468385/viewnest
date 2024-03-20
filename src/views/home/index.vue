<template>
  <div>
    <span class="app-header">电影精选</span>
    <ul class="video-list">
      <li
        v-for="(item, index) in videoList"
        :key="index"
        @click="handleVideoClick(item)"
      >
        <div class="video-item">
          <img
            crossOrigin="”anonymous”"
            src="https://s44.playwoool.com/wp-content/uploads/2024/03/p2895984381.webp-yfss3"
            alt="周处除三害"
          />
          <div class="video-info">
            <span class="video-desc">{{ item }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { findVideoList } from "../../api/video";
import { ref } from "vue";

import { useRouter } from "vue-router";
export default {
  name: "Home",
  setup() {
    let videoList = ref([]);
    const router = useRouter();
    onMounted(() => {
      findVideoList().then((res) => {
        videoList.value = res.data;
      });
    });

    function handleVideoClick(item) {
      router.push({
        path: "video",
        query: {
          path: item,
        },
      });
    }

    return {
      videoList,
      handleVideoClick,
    };
  },
};
</script>

<style scoped>
.app-header {
  background-color: #141414;
  color: #fff;
  border-radius: 5px;
  width: 160px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 50px;
  letter-spacing: 10px;
  padding-left: 10px;
  font-size: 20px;
  margin-bottom: 30px;
}

.video-list {
  display: flex;
  flex: wrap;
  gap: 30px;
}

.video-item {
  width: 310px;
  cursor: pointer;
}
.video-item img {
  width: 100%;
  height: 440px;
  border-radius: 5px;
}

.video-info {
  width: 100%;
  padding: 14px 10px;
  background-color: #fff;
}

.video-desc {
  color: #474747;
  word-wrap: break-word;
  font-size: 15px;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
}
</style>
