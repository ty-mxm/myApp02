<template>
  <ion-app>
    <!-- En-tête avec barre d'outils -->
    <ion-header>
      <ion-toolbar color="primary"> <!-- Couleur primaire ajoutée à la barre d'outils -->
        <!-- Bouton burger pour ouvrir le menu manuellement -->
        <ion-buttons slot="start">
          <ion-menu-button :autoHide="false"></ion-menu-button>
        </ion-buttons>
        <ion-title>Mon Application</ion-title>
      </ion-toolbar>
    </ion-header>

    <!-- Menu latéral -->
    <ion-menu content-id="main-content" type="overlay">
      <ion-header>
        <ion-toolbar color="secondary"> <!-- Couleur secondaire ajoutée au menu -->
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>

      <!-- Contenu du menu -->
      <ion-content>
        <ion-list>

          <!-- Items du menu avec couleurs personnalisées -->
          <RouterLink to="/tabs/Trajets">
              <ion-item>
                <ion-icon :icon="locationOutline" slot="start"></ion-icon>
                <ion-label>Trajets</ion-label>
              </ion-item>
            </RouterLink>

            <RouterLink to="/tabs/AjouterTrajet">
              <ion-item>
                <ion-icon :icon="addOutline" slot="start"></ion-icon>
                <ion-label>Ajouter un Trajet</ion-label>
              </ion-item>
            </RouterLink>

            <RouterLink to="/tabs/Parametres">
              <ion-item>
                <ion-icon :icon="settingsOutline" slot="start"></ion-icon>
                <ion-label>Paramètres</ion-label>
              </ion-item>
            </RouterLink>

            <RouterLink to="/tabs/AppVersion">
              <ion-item>
                <ion-icon :icon="informationCircleOutline" slot="start"></ion-icon>
                <ion-label>Version de l'application</ion-label>
              </ion-item>
            </RouterLink>


        </ion-list>
      </ion-content>
    </ion-menu>

    <!-- Zone principale du contenu -->
    <ion-router-outlet id="main-content"></ion-router-outlet>
  </ion-app>
</template>

<script lang="ts">
import {
  IonApp,
  IonRouterOutlet,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonMenu,
  IonIcon,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonTitle,
  IonMenuButton,
} from '@ionic/vue';
import { locationOutline, addOutline, settingsOutline, informationCircleOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonMenu,
    IonIcon,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonTitle,
    IonMenuButton,
  },
  setup() {
    return {
      locationOutline,
      addOutline,
      settingsOutline,
      informationCircleOutline,
    };
  }
});
</script>

<style scoped>
/* Couleurs personnalisées pour le contenu du menu */
ion-menu {
  --background: var(--ion-color-secondary); /* Arrière-plan du menu */
}

ion-item {
  --background: var(--ion-color-light); /* Arrière-plan des éléments du menu */
  --color: var(--ion-color-primary); /* Couleur du texte des éléments */
  margin-bottom: 10px;
  border-radius: 8px;
}

ion-item:hover {
  --background: var(--ion-color-primary); /* Changement de couleur de fond au survol */
  --color: white; /* Couleur du texte au survol */
}

ion-icon {
  --color: var(--ion-color-primary); /* Couleur des icônes */
}
</style>
