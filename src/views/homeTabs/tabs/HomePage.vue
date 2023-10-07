<template>
  <ion-page>
    <ion-header> <MyToolbar /> </ion-header>
    <ion-content>
      <Search />
      <Sort title="All Featured" />
      <div class="categories">
        <ion-avatar
          v-for="(item, index) in [
            { title: 'Beauty', img: beauty },
            { title: 'Fashion', img: fashion },
            { title: 'Kids', img: kids },
            { title: 'Mens', img: mens },
            { title: 'Womans', img: womans },
          ]"
          :key="index"
        >
          <div>
            <img :src="item.img" alt="item" />
            {{ item.title }}
          </div>
        </ion-avatar>
      </div>
      <swiper
        :modules="modules"
        :keyboard="true"
        :pagination="{
          enabled: true,
        }"
        @swiper="setSwiperInstance"
      >
        <swiper-slide v-for="n in 3" :key="n">
          <div class="discount-wrapper">
            <ion-img :src="swiperImg" alt="img"> </ion-img>
            <div>
              <h4>50-40% OFF</h4>
              <p>New in (Products)</p>
              <p>All colors</p>
              <ion-button class="arrow-button"
                ><span>Shop Now</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_268_7285)">
                    <path
                      d="M10 3.33337L9.06001 4.27337L12.1133 7.33337H1.33334V8.66671H12.1133L9.05334 11.7267L10 12.6667L14.6667 8.00004L10 3.33337Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_268_7285">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs></svg
              ></ion-button>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="deal">
        <div>
          <h4>Deal Of The Day</h4>
          <div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_268_11)">
                <path
                  d="M14.6667 3.79995L11.6 1.19995L10.7333 2.19995L13.8 4.79995L14.6667 3.79995ZM5.26668 2.26662L4.40001 1.26662L1.33334 3.79995L2.20001 4.79995L5.26668 2.26662ZM8.33334 5.33328H7.33334V9.33328L10.4667 11.2666L11 10.4666L8.33334 8.86662V5.33328ZM8.00001 2.66662C4.66668 2.66662 2.00001 5.33328 2.00001 8.66662C2.00001 12 4.66668 14.6666 8.00001 14.6666C11.3333 14.6666 14 12 14 8.66662C14 5.33328 11.3333 2.66662 8.00001 2.66662ZM8.00001 13.3333C5.40001 13.3333 3.33334 11.2666 3.33334 8.66662C3.33334 6.06662 5.40001 3.99995 8.00001 3.99995C10.6 3.99995 12.6667 6.06662 12.6667 8.66662C12.6667 11.2666 10.6 13.3333 8.00001 13.3333Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_268_11">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span> 22h 55m 20s remaining </span>
          </div>
        </div>
        <ion-button class="arrow-button"
          ><span>View All</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_268_7285)">
              <path
                d="M10 3.33337L9.06001 4.27337L12.1133 7.33337H1.33334V8.66671H12.1133L9.05334 11.7267L10 12.6667L14.6667 8.00004L10 3.33337Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_268_7285">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs></svg
        ></ion-button>
      </div>
      <swiper :modules="modules" navigation :slides-per-view="2">
        <swiper-slide
          v-for="(
            { img, name, description, price, discount, rating }, index
          ) in products"
          :key="index"
        >
          <SingleProductSwiper
            :img="img"
            :name="name"
            :description="description"
            :price="price"
            :discount="discount"
            :rating="rating"
          />
        </swiper-slide>
      </swiper>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonMenuButton,
} from "@ionic/vue";
import Sort from "@/views/homeTabs/components/SortAndFilter.vue";
import MyToolbar from "@/views/homeTabs/components//MyToolbar.vue";
import Search from "@/views/homeTabs/components/Search.vue";
import beauty from "@/assets/images/categories/beauty.jpg";
import fashion from "@/assets/images/categories/fashion.svg";
import kids from "@/assets/images/categories/kids.svg";
import mens from "@/assets/images/categories/mens.svg";
import womans from "@/assets/images/categories/womans.svg";
import swiperImg from "@/assets/images/swiperImg.png";
import product1 from "@/assets/images/products/product1.png";
import product2 from "@/assets/images/products/product2.png";
import product3 from "@/assets/images/products/product3.png";
import product4 from "@/assets/images/products/product4.png";
import product5 from "@/assets/images/products/product5.png";
import product6 from "@/assets/images/products/product6.png";
import product7 from "@/assets/images/products/product7.png";
import product8 from "@/assets/images/products/product8.png";
import product9 from "@/assets/images/products/product9.png";
import product10 from "@/assets/images/products/product10.png";
import product11 from "@/assets/images/products/product11.png";
import product12 from "@/assets/images/products/product12.png";

import SingleProductSwiper from "@/views/homeTabs/components/SingleProductSwiper.vue";
import { Keyboard, Pagination, Navigation } from "swiper/modules";

// Import Swiper Vue.js components
import { ref } from "vue";

export default {
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonMenuButton,
    Sort,
    Search,
    SingleProductSwiper,
    MyToolbar,
  },
  data() {
    return {
      beauty,
      fashion,
      kids,
      mens,
      womans,
      modules: [Keyboard, Pagination, Navigation],
      swiperImg,
      products: [
        {
          img: product1,
          name: "Product 1",
          description: "Description",
          price: "1500",
          discount: "40",
          rating: 4.5,
        },
        {
          img: product2,
          name: "Product 1",
          description: "Description",
          price: "1500",
          discount: "40",
          rating: 1.5,
        },
        {
          img: product3,
          name: "Product 1",
          description: "Description",
          price: "1500",
          discount: "40",
          rating: 3.5,
        },
        {
          img: product4,
          name: "Product 1",
          description: "Description",
          price: "1500",
          discount: "40",
          rating: 4,
        },
        {
          img: product5,
          name: "Product 1",
          description: "Description",
          price: "1500",
          discount: "40",
          rating: 5,
        },
        {
          img: product6,
          name: "Product 1",
          description: "Description",
          price: "1500",
          discount: "40",
          rating: 2.5,
        },
        {
          img: product7,
          name: "Product 1",
          description: "Description",
          price: "1500",
          discount: "40",
          rating: 4.5,
        },
        {
          img: product8,
          name: "Product 1",
          description: "Description",
          price: "1500",
          discount: "40",
          rating: 4.5,
        },
        {
          img: product9,
          name: "Product 1",
          description: "Description",
          price: "1500",
          discount: "40",
          rating: 4.5,
        },
        {
          img: product10,
          name: "Product 1",
          description: "Description",
          price: "1500",
          discount: "40",
          rating: 4.5,
        },
        {
          img: product11,
          name: "Product 1",
          description: "Description",
          price: "1500",
          discount: "40",
          rating: 4.5,
        },
        {
          img: product12,
          name: "Product 1",
          description: "Description",
          price: "1500",
          discount: "40",
          rating: 4.5,
        },
      ],
    };
  },
  setup() {
    // const swiper = useSwiper();
    const slides = ref();
    const setSwiperInstance = (swiper: any) => {
      slides.value = swiper;
    };

    return {
      setSwiperInstance,
      modules: [Keyboard, Pagination, Navigation],
    };
  },
};
</script>

<style scoped>
.categories {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  background-color: var(--white-color);
  padding: 0.5rem;
  border-radius: 10px;
}
.categories div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--black-color);
  text-align: center;
  font-size: 10px;
  font-weight: 400;
}
.categories ion-avatar {
  width: 70px;
  height: 70px;
}
.categories ion-avatar img {
  margin-bottom: 0.25rem;
}
.discount-wrapper {
  margin: 1rem 0 2.25rem 0;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 12px;
}

.discount-wrapper ion-img img {
  width: 200px;
  height: 200px;
}
.discount-wrapper div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  color: var(--white-color);
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  padding-left: 1rem;
}
.discount-wrapper div h4 {
  margin: 1rem 0;
  font-size: 20px;
  font-weight: 700;
}
.discount-wrapper div p {
  margin: 0.25rem;
}
.arrow-button {
  border: 2px solid var(--white-color);
  --background: transparent;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  padding: 0;
  margin-bottom: 0.5rem;
}

.arrow-button svg {
  margin-left: 0.5rem;
}
.swiper {
  --swiper-pagination-color: var(--pink-color-step1);
}
.deal {
  border-radius: 8px;
  background: #4392f9;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: var(--white-color);
  padding: 1rem;
}

.deal h4 {
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 0.5rem 0;
  padding: 0;
}
.deal div div {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.deal span {
  font-size: 12px;
  font-weight: 400;
  margin: 0;
  padding: 0;
}
</style>
