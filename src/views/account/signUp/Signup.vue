<template>
  <ion-page>
    <ion-content class="ion-padding">
      <h1>Create an account</h1>
      <ion-list lines="none">
        <ion-item class="input-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            class="input-icon"
          >
            <path
              d="M9 14C6.23858 14 4 16.2386 4 19C4 20.6569 5.34315 22 7 22H17C18.6569 22 20 20.6569 20 19C20 16.2386 17.7614 14 15 14H9Z"
              fill="#626262"
            />
            <path
              d="M12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2Z"
              fill="#626262"
            />
          </svg>
          <ion-input
            name="username"
            placeholder="Username or Email"
            class="user_input"
          ></ion-input>
        </ion-item>
        <ion-item class="input-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="none"
            class="input-icon"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.16146 7H11.8385C12.3657 6.99998 12.8205 6.99997 13.195 7.03057C13.5904 7.06287 13.9836 7.13419 14.362 7.32698C14.9265 7.6146 15.3854 8.07355 15.673 8.63803C15.8658 9.01641 15.9371 9.40963 15.9694 9.80498C16 10.1795 16 10.6344 16 11.1615V15.8386C16 16.3657 16 16.8205 15.9694 17.195C15.9371 17.5904 15.8658 17.9836 15.673 18.362C15.3854 18.9265 14.9265 19.3854 14.362 19.673C13.9836 19.8658 13.5904 19.9371 13.195 19.9694C12.8205 20 12.3657 20 11.8385 20H4.16145C3.63431 20 3.17954 20 2.80498 19.9694C2.40963 19.9371 2.01641 19.8658 1.63803 19.673C1.07355 19.3854 0.614604 18.9265 0.326984 18.362C0.13419 17.9836 0.0628736 17.5904 0.0305726 17.195C-2.98917e-05 16.8205 -1.5696e-05 16.3657 7.59377e-07 15.8386V11.1614C-1.5696e-05 10.6343 -2.98899e-05 10.1795 0.0305726 9.80498C0.0628736 9.40963 0.13419 9.01641 0.326984 8.63803C0.614604 8.07355 1.07355 7.6146 1.63803 7.32698C2.01641 7.13419 2.40963 7.06287 2.80498 7.03057C3.17953 6.99997 3.63434 6.99998 4.16146 7ZM8 13C7.44772 13 7 13.4477 7 14V15C7 15.5523 7.44772 16 8 16C8.55229 16 9 15.5523 9 15V14C9 13.4477 8.55229 13 8 13Z"
              fill="#626262"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 4C4 1.79086 5.79086 0 8 0C10.2091 0 12 1.79086 12 4V7H10V4C10 2.89543 9.10457 2 8 2C6.89543 2 6 2.89543 6 4V7H4V4Z"
              fill="#626262"
            />
          </svg>
          <ion-input
            name="password"
            placeholder="Password"
            class="user_input"
          ></ion-input>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            class="eye-icon"
          >
            <g clip-path="url(#clip0_1_18710)">
              <path
                d="M0.833252 10C0.833252 10 4.16658 3.33334 9.99992 3.33334C15.8333 3.33334 19.1666 10 19.1666 10C19.1666 10 15.8333 16.6667 9.99992 16.6667C4.16658 16.6667 0.833252 10 0.833252 10Z"
                stroke="#626262"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                stroke="#626262"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_18710">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </ion-item>
        <ion-item>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="none"
            class="input-icon"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.16146 7H11.8385C12.3657 6.99998 12.8205 6.99997 13.195 7.03057C13.5904 7.06287 13.9836 7.13419 14.362 7.32698C14.9265 7.6146 15.3854 8.07355 15.673 8.63803C15.8658 9.01641 15.9371 9.40963 15.9694 9.80498C16 10.1795 16 10.6344 16 11.1615V15.8386C16 16.3657 16 16.8205 15.9694 17.195C15.9371 17.5904 15.8658 17.9836 15.673 18.362C15.3854 18.9265 14.9265 19.3854 14.362 19.673C13.9836 19.8658 13.5904 19.9371 13.195 19.9694C12.8205 20 12.3657 20 11.8385 20H4.16145C3.63431 20 3.17954 20 2.80498 19.9694C2.40963 19.9371 2.01641 19.8658 1.63803 19.673C1.07355 19.3854 0.614604 18.9265 0.326984 18.362C0.13419 17.9836 0.0628736 17.5904 0.0305726 17.195C-2.98917e-05 16.8205 -1.5696e-05 16.3657 7.59377e-07 15.8386V11.1614C-1.5696e-05 10.6343 -2.98899e-05 10.1795 0.0305726 9.80498C0.0628736 9.40963 0.13419 9.01641 0.326984 8.63803C0.614604 8.07355 1.07355 7.6146 1.63803 7.32698C2.01641 7.13419 2.40963 7.06287 2.80498 7.03057C3.17953 6.99997 3.63434 6.99998 4.16146 7ZM8 13C7.44772 13 7 13.4477 7 14V15C7 15.5523 7.44772 16 8 16C8.55229 16 9 15.5523 9 15V14C9 13.4477 8.55229 13 8 13Z"
              fill="#626262"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 4C4 1.79086 5.79086 0 8 0C10.2091 0 12 1.79086 12 4V7H10V4C10 2.89543 9.10457 2 8 2C6.89543 2 6 2.89543 6 4V7H4V4Z"
              fill="#626262"
            />
          </svg>
          <ion-input
            name="confirm"
            placeholder="Confirm password"
            class="user_input"
          ></ion-input>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            class="eye-icon"
          >
            <g clip-path="url(#clip0_1_18710)">
              <path
                d="M0.833252 10C0.833252 10 4.16658 3.33334 9.99992 3.33334C15.8333 3.33334 19.1666 10 19.1666 10C19.1666 10 15.8333 16.6667 9.99992 16.6667C4.16658 16.6667 0.833252 10 0.833252 10Z"
                stroke="#626262"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                stroke="#626262"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_18710">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </ion-item>
        <p>
          By clicking the
          <a href="/">Register</a> button, you agree to the public offer
        </p>
        <ion-button expand="block" size="large"> Create Account </ion-button>
        <div class="social-wrap">
          <p>- OR continue with</p>
          <div class="social-media">
            <a href="#"> <ion-img :src="google">hii</ion-img> </a>
            <a href="#"> <ion-img :src="apple">hii</ion-img> </a>
            <a href="#"> <ion-img :src="facebook">hii</ion-img> </a>
          </div>
          <p>
            I Already Have an Account
            <router-link to="/signin">Login</router-link>
          </p>
        </div>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonTitle,
  IonInput,
  IonNav,
  IonIcon,
  IonLabel,
  IonList,
  IonCol,
  IonRow,
  IonImg,
} from "@ionic/vue";
import { defineComponent } from "vue";
import facebook from "@/assets/images/facebook.png";
import apple from "@/assets/images/apple.png";
import google from "@/assets/images/google.png";
export default defineComponent({
  name: "Signup",

  components: {
    IonTitle,
    IonInput,
    IonNav,
    IonLabel,
    IonIcon,
    IonList,
    IonCol,
    IonRow,
    IonImg,
  },
  setup() {
    return {
      facebook,
      apple,
      google,
    };
  },
});
</script>

<style scoped>
p {
  font-size: 12px;
  color: var(--gray-color);
}
</style>
