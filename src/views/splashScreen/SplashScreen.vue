<template>
  <ion-page>
    <ion-content>
      <div class="swipe-wrapper">
        <div class="top-bar">
          <div>1/3</div>
          <div>Skip</div>
        </div>

        <swiper
          :modules="modules"
          :keyboard="true"
          :pagination="{
            enabled: true,
            el: '.my-pagination',
          }"
          :navigation="{
            nextEl: '.my-swiper-button-next',
            prevEl: '.my-swiper-button-prev',
          }"
          @swiper="setSwiperInstance"
        >
          <swiper-slide class="single-swiper">
            <ChooseProducts />
          </swiper-slide>
          <swiper-slide class="single-swiper">
            <MakePayment />
          </swiper-slide>
          <swiper-slide class="single-swiper">
            <GetOrder />
          </swiper-slide>
        </swiper>
        <div class="bottom-bar">
          <div class="my-swiper-button-prev">Prev</div>
          <div class="my-pagination"></div>
          <div
            class="my-swiper-button-next"
            @click="console.log(setSwiperInstance)"
          >
            Next
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import ChooseProducts from "@/views/splashScreen/pages/ChooseProducts.vue";
import GetOrder from "@/views/splashScreen/pages/GetOrder.vue";
import MakePayment from "@/views/splashScreen/pages/MakePayment.vue";
// import Swiper core and required module
import { Keyboard, Pagination, Navigation } from "swiper/modules";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
    ChooseProducts,
    GetOrder,
    MakePayment,
  },

  setup() {
    // const swiper = useSwiper();
    const slides = ref();
    const setSwiperInstance = (swiper: any) => {
      slides.value = swiper;
      console.log(slides.value);
    };

    return {
      setSwiperInstance,
      modules: [Keyboard, Pagination, Navigation],
    };
  },
});
</script>

<style scoped>
.swipe-wrapper {
  width: 100%;
  height: 80%;
}
.top-bar {
  position: absolute;
}
.top-bar,
.bottom-bar {
  padding: 1rem;
  height: 1rem;
  width: 100%;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
}

.bottom-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
}

.my-pagination {
  width: 5rem;
  margin: 0 auto;
}
.swiper-pagination-bullet-active {
  background: red !important;
}
.top-bar {
  display: flex;
  flex-direction: row;
  height: 2rem;
  justify-content: space-between;
  height: auto;
}
:global(.my-swiper-button-prev .my-swiper-button-next) {
  font-weight: 800;
  background: red;
}
.my-pagination {
  --swiper-pagination-color: var(--black-color);
}
:global(.swiper-pagination-bullet-active) {
  width: 2rem;
  border-radius: 4px;
  transition: width 300ms linear;
}
</style>
