<style scoped>
.example-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>shop page</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="example-content">This is shop</div>
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

export default {
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
};
</script>
