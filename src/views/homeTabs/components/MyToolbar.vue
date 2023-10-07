<template>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-button class="menu-button"
        ><svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1_7348)">
            <path
              d="M21 11.01L3 11V13H21V11.01ZM3 16H15V18H3V16ZM21 6H3V8.01L21 8V6Z"
              fill="#323232"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_7348">
              <rect width="24" height="24" rx="12" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </ion-button>
    </ion-buttons>
    <ion-title>
      <div>
        <ion-img :src="logo" alt="logo" />
        Stylish
      </div></ion-title
    >
    <ion-avatar slot="end">
      <img :src="profile" />
    </ion-avatar>
  </ion-toolbar>
</template>

<script lang="ts">
import profile from "@/assets/images/profile.jpeg";
import logo from "@/assets/images/logo.svg";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      profile,
      logo,
    };
  },
});
</script>

<style scoped></style>
