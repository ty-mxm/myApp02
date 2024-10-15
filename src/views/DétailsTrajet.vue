<template>
    <ion-page>
      <ion-header class="header">
        <ion-toolbar color="primary">
          <ion-title>Détails du Trajet</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content class="details-content">
        <div class="map-container">
          <!-- Section pour afficher la carte -->
          <div id="map"></div>
        </div>
  
        <!-- Section pour afficher les détails du trajet -->
        <ion-list>
          <ion-item>
            <ion-label>Nom du Trajet</ion-label>
            <p>{{ tripName }}</p>
          </ion-item>
          <ion-item>
            <ion-label>Date de Création</ion-label>
            <p>{{ tripDate }}</p>
          </ion-item>
          <ion-item>
            <ion-label>Positions Enregistrées</ion-label>
            <p>{{ positions.length }} positions</p>
          </ion-item>
        </ion-list>
  
        <!-- Section pour partager le trajet -->
        <ion-item>
          <ion-label position="stacked">Partager le trajet avec :</ion-label>
          <ion-input v-model="email" placeholder="email@exemple.com"></ion-input>
          <ion-button expand="block" @click="shareTrip">Partager le trajet</ion-button>
        </ion-item>
      </ion-content>
  
      <ion-footer class="footer">
        <ion-toolbar color="secondary">
          <ion-title>Ty Mammoliti et Sofia Krins 2024 ™</ion-title>
        </ion-toolbar>
      </ion-footer>
    </ion-page>
  </template>
  
  <script lang="ts">
  declare global {
  interface Window {
    google: any;
  }
}
  import { defineComponent, ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonFooter,
    IonButton,
    IonInput,
  } from '@ionic/vue';
  import { Loader } from '@googlemaps/js-api-loader'; // Utilisation du package Google Maps API Loader
  
  const API_BASE_URL = 'https://server-1-t93s.onrender.com'; // Lien de base pour l'API
  
  export default defineComponent({
    components: {
      IonPage,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent,
      IonItem,
      IonLabel,
      IonFooter,
      IonButton,
      IonInput,
    },
    setup() {
      const route = useRoute();
      const tripId = route.params.tripId || ''; // Obtenir l'ID du trajet à partir des paramètres de l'URL
      const tripName = ref('Nom de mon Trajet');
      const tripDate = ref('2024-10-14');
      const positions = ref([
        // Positions de simulation pour test. Remplacez par les vraies données depuis l'API.
        { latitude: 45.5017, longitude: -73.5673 },
        { latitude: 45.5088, longitude: -73.554 },
      ]);
      const email = ref(''); // Email utilisé pour partager le trajet
  
      const loadMap = () => {
        const loader = new Loader({
          apiKey: 'AIzaSyC33sCFImTbcwlsCe48j2PmAOi9IJwC4PA', // Assurez-vous de remplacer par votre propre clé API
          version: 'weekly',
        });
  
        loader.load().then(() => {
          const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
            center: new google.maps.LatLng(positions.value[0].latitude, positions.value[0].longitude), // Centre la carte sur la première position
            zoom: 12,
          });
  
          // Ajouter des marqueurs pour chaque position
          positions.value.forEach((pos) => {
            const position = new google.maps.LatLng(pos.latitude, pos.longitude); // Convert to LatLng
            new google.maps.Marker({
                position,
                map,
            });
            });
        });
      };
  
      const shareTrip = async () => {
        try {
          const response = await fetch(`${API_BASE_URL}/api/tp/share-trip`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ tripId, email: email.value }),
          });
          if (!response.ok) {
            throw new Error('Erreur lors du partage du trajet.');
          }
          console.log('Trajet partagé avec succès.');
        } catch (error) {
          console.error('Erreur:', error);
        }
      };
  
      // Charger la carte lorsque le composant est monté
      onMounted(() => {
        loadMap();
      });
  
      return {
        tripName,
        tripDate,
        positions,
        email,
        shareTrip,
      };
    },
  });
  </script>
  
  <style scoped>
  .map-container {
    height: 300px;
    margin: 20px;
  }
  
  #map {
    height: 100%;
    width: 100%;
  }
  
  .details-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  ion-item {
    margin-top: 10px;
  }
  </style>
  