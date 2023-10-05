<template>
  <div class="splash">
    <ion-img :src="getOrderImage" class="splash-img"></ion-img>
    <h2>Get You Orders</h2>
    <p>
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit.
    </p>
  </div>
</template>

<script lang="ts">
import getOrderImage from "@/assets/images/getOrder.png";
import { defineComponent } from "vue";
export default defineComponent({
  component: {},
  data() {
    return {
      getOrderImage,
    };
  },
});
</script>

<style scoped></style>
