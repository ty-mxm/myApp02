<template>
  <ion-page>
    <ion-header class="header">
      <ion-toolbar color="primary">
        <ion-title>Mes Trajets</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="trip-content">
      <div class="trip-container">
        <ion-list>
          <!-- Section: Mes Trajets -->
          <ion-item-divider color="primary">Mes Trajets</ion-item-divider>
          <ion-item>
            <ion-label>
              <h2>Trajet 1</h2>
              <p>Positions enregistrées: 2</p>
              <p>Date de création: 2024-10-10</p>
            </ion-label>
            <ion-button slot="end" @click="goToDetails">Détails</ion-button>
          </ion-item>
          <ion-item>
            <ion-label>
              <h2>Trajet 2</h2>
              <p>Positions enregistrées: 3</p>
              <p>Date de création: 2024-10-09</p>
            </ion-label>
            <ion-button slot="end" @click="goToDetails">Détails</ion-button>
          </ion-item>

          <!-- Section: Trajets Partagés -->
          <ion-item-divider color="primary">Trajets Partagés</ion-item-divider>
          <ion-item>
            <ion-label>
              <h2>Trajet Partagé 1</h2>
              <p>Positions enregistrées: 4</p>
              <p>Date de création: 2024-10-08</p>
            </ion-label>
            <ion-button slot="end" @click="goToDetails">Détails</ion-button>
          </ion-item>

          <!-- Section: Ajouter un Trajet -->
          <ion-item-divider color="primary">Ajouter un Trajet</ion-item-divider>
          <ion-item>
            <ion-input placeholder="Nom du trajet" required></ion-input>
          </ion-item>
          <ion-item>
            <ion-input placeholder="ID de l'utilisateur" required></ion-input>
          </ion-item>
          <ion-item>
            <ion-input placeholder="Positions (JSON)" required></ion-input>
          </ion-item>
          <ion-button expand="block" @click="addTrip">Ajouter</ion-button>
        </ion-list>
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
import {
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonFooter,
  IonInput,
  IonPage,
  IonButton
} from '@ionic/vue';

const goToDetails = () => {
  console.log('Naviguer vers les détails du trajet');
};

const addTrip = () => {
  console.log('Ajouter un nouveau trajet');
};
</script>

<style scoped>
/* Supprimer 100vh pour permettre au contenu d'être défilable sur les petits écrans */
.trip-content {
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Aligner les éléments en haut pour éviter que le contenu soit coupé */
  padding-bottom: 20px;
}

/* Conteneur stylisé pour les trajets */
.trip-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin: 80px auto 0;
  padding: 20px;
  border: 2px solid #f48fb1; /* Bordure rose */
  border-radius: 10px;
  background-color: rgba(206, 147, 216, 0.8); /* Arrière-plan violet lavande */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Ombre pour un effet de profondeur */
}
</style>
