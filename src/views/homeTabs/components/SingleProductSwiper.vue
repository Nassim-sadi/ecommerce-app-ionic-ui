<template>
  <div class="wrapper">
    <div>
      <ion-img :src="img" alt="name"> </ion-img>
    </div>
    <h3>{{ name }}</h3>
    <p class="desc">{{ description }}</p>
    <p class="price">₹{{ (price * (100 - discount)) / 100 }}</p>
    <span class="priceD">₹{{ price }}</span>
    <span class="discount">{{ discount }}%Off </span>
    <StarRating :rating="rating" :increment="0.5" :star-size="10"></StarRating>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StarRating from "vue-star-rating";
export default defineComponent({
  components: { StarRating },
  props: ["img", "name", "description", "price", "discount", "rating"],
  setup() {
    return {};
  },
});
</script>

<style scoped>
p,
h3,
span,
img,
ion-img {
  margin: 0;
  padding: 0;
}
.wrapper {
  padding: 1rem;
  width: 100%;
  margin: 1rem 0;
  color: var(--black-color);
}
.wrapper div {
  overflow: hidden;
}
div ion-img {
  height: 10rem;
  flex-shrink: 0;
}
div h3 {
  font-size: 12px;
  font-weight: 500;
  margin: 0 !important;
  padding: 0 !important;
}
.desc {
  font-size: 10px;
  font-weight: 400;
}
.price {
  font-size: 12px;
  font-weight: 500;
}
.priceD {
  color: var(--gray-color-step1);
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  text-decoration: line-through;
}
.discount {
  color: var(--light-red, #fe735c);
  text-align: center;
  font-family: Montserrat;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
}
StarRating {
  width: 5rem;
}
</style>
