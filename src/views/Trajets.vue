<template>
  <ion-page>
    <ion-header class="header">
      <ion-toolbar color="primary">
        <ion-title>Ajouter un Trajet</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="add-trip-content">
      <div class="add-trip-container">
        <ion-list>
          <!-- Champ pour le nom du trajet -->
          <ion-item>
            <ion-input v-model="pathName" placeholder="Nom du trajet" required></ion-input>
          </ion-item>

          <!-- Bouton pour démarrer ou arrêter l'enregistrement -->
          <ion-item>
            <ion-button expand="block" @click="toggleTracking">
              {{ isTracking ? 'Arrêter' : 'Démarrer' }} l'enregistrement
            </ion-button>
          </ion-item>

          <!-- Liste des positions enregistrées -->
          <ion-item-divider color="primary">Positions enregistrées</ion-item-divider>
          <ion-item v-for="(position, index) in recordedPositions" :key="index">
            <ion-label>
              Latitude: {{ position.latitude }}, Longitude: {{ position.longitude }}
            </ion-label>
          </ion-item>

          <!-- Bouton pour envoyer le trajet si des positions sont enregistrées -->
          <ion-item v-if="recordedPositions.length > 0">
            <ion-button expand="block" @click="sendTrip">Envoyer le trajet</ion-button>
          </ion-item>
        </ion-list>
      </div>
    </ion-content>

    <!-- Barre de pied de page avec les crédits -->
    <ion-footer class="footer">
      <ion-toolbar color="secondary">
        <ion-title>Ty Mammoliti et Sofia Krins 2024 ™</ion-title>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const pathName = ref('');
const recordedPositions = ref<any[]>([]); // remplacer 'any' par le type approprié
const isTracking = ref(false);

// Méthode pour démarrer/arrêter l'enregistrement
const toggleTracking = () => {
  isTracking.value = !isTracking.value;
  console.log(isTracking.value ? 'Enregistrement démarré' : 'Enregistrement arrêté');
};

// Méthode pour envoyer le trajet
const sendTrip = () => {
  console.log('Trajet envoyé');
};
</script>

<style scoped>
/* Contenu stylisé pour le formulaire d'ajout de trajet */
.add-trip-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* Conteneur stylisé pour le formulaire */
.add-trip-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin: 80px auto;
  padding: 20px;
  border: 2px solid #f48fb1; /* Bordure rose */
  border-radius: 10px;
  background-color: rgba(206, 147, 216, 0.8); /* Arrière-plan violet lavande */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Ombre légère pour l'effet de profondeur */
}
</style>
