<template>
  <ion-page>
    <ion-header> <MyToolbar /> </ion-header>
    <ion-content>
      <Search />
      <SortAndFilter title="52,082+ Iteams" />
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
} from "@ionic/vue";
import Search from "@/views/homeTabs/components/Search.vue";

import MyToolbar from "@/views/homeTabs/components/MyToolbar.vue";
import SortAndFilter from "@/views/homeTabs/components/SortAndFilter.vue";

export default {
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    Search,
    MyToolbar,
    SortAndFilter,
  },
  data() {
    return {};
  },
};
</script>
