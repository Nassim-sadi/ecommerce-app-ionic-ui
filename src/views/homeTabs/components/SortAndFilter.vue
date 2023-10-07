<template>
  <div class="wrapper">
    <ion-text>
      <h3>{{ title }}</h3>
    </ion-text>
    <div>
      <ion-button
        >sort
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_268_7279)">
            <path
              d="M11.3247 12.0485V6.38386H9.66234V12.0485H7.16884L10.4935 15.2727L13.8182 12.0485H11.3247ZM5.5065 0.727295L2.18182 3.95154H4.67533V9.61618H6.33767V3.95154H8.83117L5.5065 0.727295ZM11.3247 12.0485V6.38386H9.66234V12.0485H7.16884L10.4935 15.2727L13.8182 12.0485H11.3247ZM5.5065 0.727295L2.18182 3.95154H4.67533V9.61618H6.33767V3.95154H8.83117L5.5065 0.727295Z"
              fill="#232327"
            />
          </g>
          <defs>
            <clipPath id="clip0_268_7279">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs></svg
      ></ion-button>
      <ion-button
        >Filter
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.6666 2H1.33331L6.66665 8.30667V12.6667L9.33331 14V11.1533V8.30667L14.6666 2Z"
            stroke="#232327"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.33335 8H6.66669V11.9111L9.33335 13.3333V8Z"
            fill="#232327"
          /></svg
      ></ion-button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ["title"],
};
</script>

<style scoped>
.wrapper {
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
ion-button {
  font-weight: 600;
  font-size: 12px;
  --background: var(--white-color);
  --color:var(--black-color)
  --border-radius: 6px;
  margin: 0 0.5rem;
}
</style>
