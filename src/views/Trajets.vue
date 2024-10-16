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
          <ion-item v-for="(trip, index) in mesTrajets" :key="index">
            <ion-label>
              <h2>{{ trip.name }} (par {{ trip.userName }})</h2>
              <p>Positions enregistrées: {{ trip.positions }}</p>
              <p>Date de création: {{ trip.date }}</p>
            </ion-label>
            <ion-button slot="end" @click="goToDetails(trip.id)">Détails</ion-button>
          </ion-item>
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
  IonPage,
  IonButton
} from '@ionic/vue';
import { useRouter } from 'vue-router';
import { useTripStore } from '@/store/trips'; // Importe le store des trajets
import { computed } from 'vue';

const tripStore = useTripStore();
const mesTrajets = computed(() => tripStore.trips); // Récupère les trajets du store

const router = useRouter();

// Fonction pour rediriger vers les détails du trajet
const goToDetails = (tripId: string) => {
  router.push({ name: 'DétailsTrajet', params: { id: tripId } });
};
</script>

<style scoped>
/* Ajustement du style pour une meilleure accessibilité */
.trip-content {
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Aligner les éléments en haut */
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
