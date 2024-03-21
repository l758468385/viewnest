<template>
  <div class="home-wrap">

    <span class="app-header">纯爱精选</span>
    <NSpin :show="loading">
      <ul class="video-list">
        <li
            v-for="(item, index) in videoList"
            :key="index"
            @click="handleVideoClick(item)"
        >
          <div class="video-item">
            <img
                alt="周处除三害"
                crossOrigin="anonymous"
                :src="index === 0 ? 'https://bkimg.cdn.bcebos.com/pic/500fd9f9d72a6059252d3de46663239b033b5ab50c8f?x-bce-process=image/format,f_auto/watermark,image_d2F0ZXIvYmFpa2UyNzI,g_7,xp_5,yp_5,P_20/resize,m_lfit,limit_1,h_1080' :'https://bkimg.cdn.bcebos.com/pic/267f9e2f070828381f305e3ef1c1be014c086e065bda'"
            />
            <div class="video-info">
              <span class="video-desc">{{ item.split("/").pop() }}</span>
            </div>
          </div>
        </li>
      </ul>
    </NSpin>

  </div>
</template>

<script>
import {onMounted, ref} from "vue";
import {findVideoList} from "@/api/video";

import {useRouter} from "vue-router";

export default {
  name: "Home",
  setup() {
    let loading = ref(false);
    let videoList = ref([]);
    const router = useRouter();
    onMounted(() => {
     loading.value = true
      findVideoList().then((res) => {
        videoList.value = res.data;
      }).finally(() => {
        loading.value = false
      })
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
      loading
    };
  },
};
</script>

<style scoped>
.home-wrap {
  box-sizing: border-box;
}

.app-header {
  background-color: #141414;
  color: #fff;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 50px;
  letter-spacing: 10px;
  //padding-left: 10px;
  font-size: 20px;
  margin-bottom: 30px;
  width: 100%;
  position: sticky;
}

.video-list {
  display: flex;
  flex: wrap;
  gap: 30px;
  padding: 20px;
}

.video-item {
  width: 310px;
  cursor: pointer;
  box-shadow: 0 1px 1px 0 #d9d9d9;
  transition: all .2s linear
}

.video-item:hover {
  transform: translate3d(0, -2px, 0);
  box-shadow: 0 15px 30px rgba(0,0,0,.1);
}


.video-item img {
  width: 310px;
  height: 440px;

}

.video-info {
  width: 100%;
  padding: 14px 10px;
  background-color: #fff;
  box-sizing: border-box;
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
