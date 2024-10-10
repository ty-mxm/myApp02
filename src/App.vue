<template>
  <ion-page>
    <!-- Menu coulissant -->
    <ion-menu side="start" content-id="main-content">
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content>
        <ion-list>
          <ion-item router-link="/trips">
            <ion-icon name="location-outline" slot="start"></ion-icon>
            <ion-label>Trajets</ion-label>
          </ion-item>
          <ion-item router-link="/add-trip">
            <ion-icon name="add-outline" slot="start"></ion-icon>
            <ion-label>Ajouter un Trajet</ion-label>
          </ion-item>
          <ion-item router-link="/settings">
            <ion-icon name="settings-outline" slot="start"></ion-icon>
            <ion-label>Paramètres</ion-label>
          </ion-item>
          <ion-item router-link="/version">
            <ion-icon name="information-circle-outline" slot="start"></ion-icon>
            <ion-label>Version de l'application</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>

    <!-- Contenu principal -->
    <div id="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button> <!-- Bouton pour ouvrir le menu -->
          </ion-buttons>
          <ion-title>Page principale</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <router-view></router-view> <!-- Vue principale ici -->
      </ion-content>
    </div>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonMenu, IonList, IonItem, IonLabel, IonIcon } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonMenu,
    IonList,
    IonItem,
    IonLabel,
    IonIcon,
  },
});
</script>
