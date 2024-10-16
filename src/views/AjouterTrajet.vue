<template>
  <ion-page>
    <ion-header class="header">
      <ion-toolbar color="primary">
        <ion-title>Ajouter un Trajet</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="trip-content">
      <div class="trip-container">
        <!-- Champ pour nommer le trajet -->
        <ion-item>
          <ion-input v-model="tripName" placeholder="Entrez le nom du trajet"></ion-input>
        </ion-item>

        <!-- Bouton pour démarrer ou arrêter l'enregistrement GPS -->
        <ion-button expand="block" @click="toggleRecording">
          {{ recording ? 'Arrêter l\'enregistrement' : 'Démarrer l\'enregistrement' }}
        </ion-button>

        <!-- Affichage d'une animation pendant l'enregistrement -->
        <div v-if="recording" class="recording-animation">
          <ion-spinner name="bubbles"></ion-spinner>
          <p>Enregistrement en cours...</p>
        </div>

        <!-- Afficher les détails du trajet en cours après avoir arrêté l'enregistrement -->
        <div v-if="!recording && tripName && positions.length > 0" class="current-trip">
          <ion-list>
            <ion-item-divider color="primary">{{ tripName }}</ion-item-divider>
            <ion-item v-for="(position, index) in positions" :key="index">
              <ion-label>
                Latitude: {{ position.latitude }}, Longitude: {{ position.longitude }}<br />
                Adresse: {{ position.address }}
              </ion-label>
            </ion-item>
          </ion-list>
        </div>

        <!-- Bouton pour envoyer le trajet si des positions ont été enregistrées -->
        <ion-button v-if="positions.length > 0 && !recording" expand="block" @click="submitTrip">Envoyer le trajet</ion-button>
      </div>
    </ion-content>

    <ion-footer class="footer">
      <ion-toolbar color="secondary">
        <ion-title>Ty Mammoliti et Sofia Krins 2024 ™</ion-title>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script lang="ts">
import {
  IonItem,
  IonLabel,
  IonList,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonFooter,
  IonPage,
  IonButton,
  IonInput,
  IonItemDivider,
  IonSpinner
} from '@ionic/vue';
import { ref } from 'vue';
import { Geolocation } from '@capacitor/geolocation';
import { useTripStore } from '@/store/trips';
import { fetchAddress } from '@/utils/geocoding'; // Importe ta fonction de géocodage ici

let intervalId: ReturnType<typeof setInterval> | undefined = undefined; 
const recording = ref(false);
const positions = ref<any[]>([]);
const tripName = ref('');

const toggleRecording = async () => {
  if (!recording.value) {
    // Démarrer l'enregistrement
    recording.value = true;
    positions.value = []; // Réinitialiser les positions
    alert('Enregistrement démarré'); // Alerte pour le début de l'enregistrement

    intervalId = setInterval(async () => {
      try {
        const position = await Geolocation.getCurrentPosition();
        const address = await fetchAddress(position.coords.latitude, position.coords.longitude); // Récupérer l'adresse
        positions.value.push({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          address: address
        });
      } catch (error) {
        console.error('Erreur lors de la géolocalisation', error);
      }
    }, 1000);
  } else {
    // Arrêter l'enregistrement
    recording.value = false;
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = undefined;
    }
    alert('Enregistrement arrêté'); // Alerte pour la fin de l'enregistrement
  }
};

const submitTrip = async () => {
  if (positions.value.length > 0 && !recording.value) {
    try {
      const response = await fetch('https://server-1-t93s.onrender.com/api/tp/add-trip', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          pathName: tripName.value,
          userId: 'userId', // Remplace avec un vrai userId ou une variable dynamique
          userName: 'Ty Mammoliti', // Assurez-vous que le nom de l'utilisateur est bien envoyé
          locations: positions.value
        })
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi du trajet');
      }

      const data = await response.json();
      console.log('Trajet soumis avec succès :', data.message, 'ID du trajet :', data.tripId);

      // Ajouter le trajet dans le store
      const tripStore = useTripStore();
      tripStore.addTrip({
        id: data.tripId,
        name: tripName.value,
        userName: 'Ty Mammoliti',
        positions: positions.value.length,
        date: new Date().toISOString().slice(0, 10) // Date actuelle
      });

      alert('Trajet envoyé avec succès !'); // Alerte pour le succès
      tripName.value = '';
      positions.value = [];
    } catch (error) {
      console.error('Erreur lors de l\'envoi du trajet', error);
    }
  } else {
    console.warn('Aucune position enregistrée ou enregistrement encore actif');
  }
};

export default {
  name: 'AjouterTrajet',
  components: {
    IonItem,
    IonLabel,
    IonList,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonFooter,
    IonPage,
    IonButton,
    IonInput,
    IonItemDivider,
    IonSpinner
  },
  setup() {
    return {
      toggleRecording,
      positions,
      recording,
      tripName,
      submitTrip
    };
  }
};
</script>

<style scoped>
.trip-content {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: 20px;
}

.trip-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin: 80px auto 0;
  padding: 20px;
  border: 2px solid #f48fb1;
  border-radius: 10px;
  background-color: rgba(206, 147, 216, 0.8);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.current-trip {
  margin-top: 20px;
  padding: 20px;
  border: 2px solid #c5a5d9;
  border-radius: 10px;
  background-color: rgba(180, 167, 220, 0.8);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.recording-animation {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 10px;
}
</style>
