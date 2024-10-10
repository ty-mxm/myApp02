<template>
  <ion-page id="main-content">
    <!-- Menu coulissant -->
    <ion-menu side="start" content-id="main-content">
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <ion-list>
          <ion-item router-link="/tabs/Trajets">
            <ion-icon name="location-outline" slot="start"></ion-icon>
            <ion-label>Trajets</ion-label>
          </ion-item>
          <ion-item router-link="/tabs/AjouterTrajet">
            <ion-icon name="add-outline" slot="start"></ion-icon>
            <ion-label>Ajouter un Trajet</ion-label>
          </ion-item>
          <ion-item router-link="/tabs/Parametres">
            <ion-icon name="settings-outline" slot="start"></ion-icon>
            <ion-label>Paramètres</ion-label>
          </ion-item>
          <ion-item router-link="/tabs/AppVersion">
            <ion-icon name="information-circle-outline" slot="start"></ion-icon>
            <ion-label>Version de l'application</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>

    <!-- Contenu principal -->
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button> <!-- Bouton pour ouvrir le menu -->
        </ion-buttons>
        <ion-title>Page principale</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <!-- Ajout de router-view ici pour charger les pages -->
      <router-view></router-view>
    </ion-content>

    <!-- Barre d'onglets -->
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="Trajets" href="/tabs/Trajets">
          <ion-icon name="location-outline"></ion-icon>
          <ion-label>Trajets</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="AjouterTrajet" href="/tabs/AjouterTrajet">
          <ion-icon name="add-outline"></ion-icon>
          <ion-label>Ajouter un Trajet</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="Parametres" href="/tabs/Parametres">
          <ion-icon name="settings-outline"></ion-icon>
          <ion-label>Paramètres</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="AppVersion" href="/tabs/AppVersion">
          <ion-icon name="information-circle-outline"></ion-icon>
          <ion-label>Version de l'application</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonMenu, IonList, IonItem, IonLabel, IonIcon, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton } from '@ionic/vue';
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
    IonRouterOutlet,
    IonTabs,
    IonTabBar,
    IonTabButton
  },
});
</script>

<style scoped>
h1 {
  font-size: 2rem;
  text-align: center;
  color: #333;
}
</style>
