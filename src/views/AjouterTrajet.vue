<template>
  <ion-page>
    

    <ion-content :fullscreen="true">
    

      <ion-list>
        <ion-item-divider color="light">Mes Trajets</ion-item-divider>
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

        <ion-item-divider color="light">Trajets Partagés</ion-item-divider>
        <ion-item>
          <ion-label>
            <h2>Trajet Partagé 1</h2>
            <p>Positions enregistrées: 4</p>
            <p>Date de création: 2024-10-08</p>
          </ion-label>
          <ion-button slot="end" @click="goToDetails">Détails</ion-button>
        </ion-item>

        <!-- Formulaire pour ajouter un trajet -->
        <ion-item-divider color="light">Ajouter un Trajet</ion-item-divider>
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
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItemDivider, IonItem, IonLabel, IonButton, IonInput } from '@ionic/vue';

const goToDetails = () => {
  console.log('Naviguer vers les détails du trajet');
};

const addTrip = () => {
  console.log('Ajouter un nouveau trajet');
};
</script>

<style scoped>
/* Ajoutez des styles personnalisés si nécessaire */
</style>
