<template>
  <ion-page>
    <ion-content>
      <div class="swipe-wrapper">
        <div class="top-bar">This is top Bar</div>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <swiper
              :modules="modules"
              :keyboard="true"
              :pagination="{ enabled: true }"
              :scrollbar="true"
              :autoplay="false"
            >
              <swiper-slide class="single-swiper"
                ><ChooseProducts />
              </swiper-slide>
              <swiper-slide class="single-swiper"><MakePayment /></swiper-slide>
              <swiper-slide class="single-swiper"><GetOrder /></swiper-slide>
            </swiper>
          </div>
        </div>

        <div class="bottom-bar">
          <p>bottom</p>
          <p id="pagination"></p>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import ChooseProducts from "@/views/splashScreen/pages/ChooseProducts.vue";
import GetOrder from "@/views/splashScreen/pages/GetOrder.vue";
import MakePayment from "@/views/splashScreen/pages/MakePayment.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { defineComponent } from "vue";
import "@ionic/vue/css/ionic-swiper.css";
import {
  Autoplay,
  Keyboard,
  Pagination,
  Scrollbar,
  Zoom,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/keyboard";
import "swiper/css/pagination";
export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
    ChooseProducts,
    GetOrder,
    MakePayment,
  },

  setup() {
    return {
      modules: [Autoplay, Keyboard, Pagination, Scrollbar, Zoom],
    };
  },
});
</script>

<style scoped>
.swipe-wrapper {
  width: 100svw;
  height: 100svh;
}

.top-bar,
.bottom-bar {
  height: 10svh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.top-bar {
  display: flex;
  flex-direction: row;
  height: 2rem;
  justify-content: space-between;
  height: auto;
}
.swiper {
  --bullet-background: black;
  --bullet-background-active: red;
  --progress-bar-background: rgba($text-color-rgb, 1);
  --progress-bar-background-active: ion-color(primary, shade);
  --scroll-bar-background: rgba($text-color-rgb, 0.1);
  --scroll-bar-background-active: rgba($text-color-rgb, 0.5);
}
</style>
