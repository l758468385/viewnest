<template>
  <div class="video-detail-wrap">
    <div class="movie-name">{{ movieName }}</div>
    <div class="movie-tips" v-if="movieName.includes('.mkv')">
      影片无声音，尝试更换 EDGE 浏览器播放~
    </div>
    <div id="video-player"></div>
  </div>
</template>

<script>
import { onMounted } from "vue";

import { useRoute } from "vue-router";
export default {
  setup() {
    const {
      query: { path },
    } = useRoute();

    const movieName = path.split("/").pop();
    let player;
    function initPlayer() {
      const config = {
        id: "video-player",
        url: path,
        width: 600 * 1.5,
        height: 337.5 * 1.5,
        playbackRate: [0.5, 0.75, 1, 1.5, 2],
        defaultPlaybackRate: 1,
        // playsinline: this.isAppleDevice(), // IOS设备设置，防止被浏览器劫持
        "x5-video-player-type": "h5", // 微信内置浏览器设置，防止被浏览器劫持
        "x5-video-orientation": "portraint",
        pip: true,
        pipConfig: {
          bottom: 100,
          right: 100,
          width: 320,
          height: 180,
        },
        download: true,
        videoInit: true,
        autoplay: false,
      };
      player = new Player(config);

      if (player) {
        player.on("play", () => {});
        player.on("pause", () => {});
        player.on("exitFullscreen", () => {});
      }
    }
    onMounted(() => {
      initPlayer();
    });
    console.log("query", path);
    return {
      path,
      movieName,
    };
  },
};
</script>

<style scoped>
.movie-name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 30px;
}

.video-detail-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 0;
  box-sizing: border-box;
}
#video-player {
  border-radius: 10px;
}

.movie-tips {
  font-size: 14px;
  font-weight: 600;
  color: #6a8bad;
  margin-bottom: 20px;
}
</style>
