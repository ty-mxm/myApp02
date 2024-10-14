<template>
  <ion-page>
    <ion-header class="header">
      <ion-toolbar color="primary">
        <ion-title>Informations sur l'application</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="app-version-content">
      <div class="version-container">
        <ion-item-divider color="light">Version de l'application</ion-item-divider>
        <ion-item>
          <ion-label>
            {{ version }}
          </ion-label>
        </ion-item>
      </div>
    </ion-content>

    <ion-footer class="footer">
      <ion-toolbar color="secondary">
        <ion-title>Ty Mammoliti et Sofia Krins 2024 ™</ion-title>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonFooter
} from '@ionic/vue'; 

const version = ref('0.0.1');
</script>

<style scoped>
/* Style pour centrer le contenu de la page */
.app-version-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

  /* Conteneur stylisé pour la version */
.version-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin: 80px auto;
  padding: 20px;
  background-color: rgba(206, 147, 216, 0.8); /* Lavender background */
  border: 2px solid #f48fb1; /* Pink border */
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Light shadow for depth */
}
</style>

