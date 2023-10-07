import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { IonicVue } from "@ionic/vue";

/* Core CSS required for Ionic components to work properly */
import "@ionic/vue/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/vue/css/normalize.css";
import "@ionic/vue/css/structure.css";
import "@ionic/vue/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/vue/css/padding.css";
import "@ionic/vue/css/float-elements.css";
import "@ionic/vue/css/text-alignment.css";
import "@ionic/vue/css/text-transformation.css";
import "@ionic/vue/css/flex-utils.css";
import "@ionic/vue/css/display.css";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
/* Theme variables */
import "./theme/variables.css";
import "./theme/base.css";
import "./theme/social.css";
/** importing Global components */
import {
  IonButton,
  IonContent,
  IonItem,
  IonPage,
  IonImg,
  IonButtons,
  IonInput,
  IonList,
  IonText,
  IonAvatar,
  IonTitle,
  IonToolbar,
  IonIcon,
} from "@ionic/vue";

const app = createApp(App).use(IonicVue).use(router);
app.component("ion-button", IonButton);
app.component("ion-content", IonContent);
app.component("ion-item", IonItem);
app.component("ion-page", IonPage);
app.component("ion-img", IonImg);
app.component("ion-buttons", IonButtons);
app.component("ion-input", IonInput);
app.component("ion-list", IonList);
app.component("ion-text", IonText);
app.component("swiper-slide", SwiperSlide);
app.component("swiper", Swiper);
app.component("ion-avatar", IonAvatar);
app.component("ion-title", IonTitle);
app.component("ion-toolbar", IonToolbar);
app.component("ion-icon", IonIcon);

router.isReady().then(() => {
  app.mount("#app");
});
