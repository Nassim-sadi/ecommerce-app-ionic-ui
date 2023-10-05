<template>
  <div class="splash">
    <ion-img :src="makePayment" class="splash-img"></ion-img>
    <h2>Make Payment</h2>
    <p>
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit.
    </p>
  </div>
</template>

<script lang="ts">
import makePayment from "@/assets/images/makePayment.png";
import { defineComponent } from "vue";
export default defineComponent({
  component: {},
  data() {
    return {
      makePayment,
    };
  },
});
</script>

<style scoped></style>
