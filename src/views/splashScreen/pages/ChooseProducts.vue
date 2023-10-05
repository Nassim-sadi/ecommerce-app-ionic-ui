<template>
  <div class="splash">
    <ion-img :src="chooseProducts" class="splash-img"></ion-img>
    <h2>Choose Products</h2>
    <p>
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit.
    </p>
  </div>
</template>

<script lang="ts">
import chooseProducts from "@/assets/images/chooseProducts.png";
import { defineComponent } from "vue";
export default defineComponent({
  component: {},
  data() {
    return {
      chooseProducts,
    };
  },
});
</script>

<style scoped></style>
