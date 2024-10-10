<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Ajouter un Trajet</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item>
          <ion-input v-model="pathName" placeholder="Nom du trajet" required></ion-input>
        </ion-item>

        <ion-item>
          <ion-button expand="block" @click="toggleTracking">
            {{ isTracking ? 'Arrêter' : 'Démarrer' }} l'enregistrement
          </ion-button>
        </ion-item>

        <ion-item-divider color="light">Positions enregistrées</ion-item-divider>
        <ion-item v-for="(position, index) in recordedPositions" :key="index">
          <ion-label>
            Latitude: {{ position.latitude }}, Longitude: {{ position.longitude }}
          </ion-label>
        </ion-item>

        <ion-item v-if="recordedPositions.length > 0">
          <ion-button expand="block" @click="sendTrip">Envoyer le trajet</ion-button>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const pathName = ref('');
const recordedPositions = ref<any[]>([]); // Vous pouvez remplacer 'any' par le type approprié
const isTracking = ref(false);

// Méthodes pour tester les boutons (sans logique)
const toggleTracking = () => {
  isTracking.value = !isTracking.value;
  console.log(isTracking.value ? 'Enregistrement démarré' : 'Enregistrement arrêté');
};

const sendTrip = () => {
  console.log('Trajet envoyé');
};
</script>

<style scoped>
/* Ajoutez des styles personnalisés si nécessaire */
</style>
