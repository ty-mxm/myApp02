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
          <ion-input v-model="nomTrajet" placeholder="Nom du trajet" required></ion-input>
        </ion-item>
        <ion-item>
          <ion-button expand="block" @click="toggleEnregistrement">
            {{ enregistrementEnCours ? 'Arrêter' : 'Démarrer' }} l'enregistrement
          </ion-button>
        </ion-item>
        <ion-item-divider color="light">Positions enregistrées</ion-item-divider>
        <ion-item v-for="(position, index) in positionsEnregistrees" :key="index">
          <ion-label>
            Latitude: {{ position.latitude }}, Longitude: {{ position.longitude }}
          </ion-label>
        </ion-item>
        <ion-item v-if="positionsEnregistrees.length > 0">
          <ion-button expand="block" @click="envoyerTrajet">Envoyer le trajet</ion-button>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const nomTrajet = ref('');
const positionsEnregistrees = ref<any[]>([]);
const enregistrementEnCours = ref(false);

const toggleEnregistrement = () => {
  enregistrementEnCours.value = !enregistrementEnCours.value;
  console.log(enregistrementEnCours.value ? 'Enregistrement démarré' : 'Enregistrement arrêté');
};

const envoyerTrajet = () => {
  console.log('Trajet envoyé');
};
</script>
