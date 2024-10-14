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

        <!-- Bouton pour démarrer/arrêter l'enregistrement GPS -->
        <ion-button expand="block" @click="toggleRecording">
          {{ recording ? 'Arrêter l\'enregistrement' : 'Démarrer l\'enregistrement' }}
        </ion-button>

        <!-- Afficher les détails du trajet en cours après avoir arrêté l'enregistrement -->
        <div v-if="!recording && tripName && positions.length > 0" class="current-trip">
          <ion-list>
            <ion-item-divider color="primary">{{ tripName }}</ion-item-divider>
            <ion-item v-for="(position, index) in positions" :key="index">
              <ion-label>
                Latitude: {{ position.latitude }}, Longitude: {{ position.longitude }}
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
  IonItemDivider
} from '@ionic/vue'; // Importation des composants Ionic
import { ref } from 'vue'; // Importation de la fonction ref pour la gestion des variables réactives
import { Geolocation } from '@capacitor/geolocation'; // Importation du service de géolocalisation

// Initialisation des variables pour l'enregistrement et les positions GPS
let intervalId: ReturnType<typeof setInterval> | undefined = undefined; // Intervalle pour l'enregistrement continu
const recording = ref(false); // Variable réactive pour savoir si l'enregistrement est en cours ou non
const positions = ref<any[]>([]); // Tableau réactif pour stocker les positions GPS
const tripName = ref(''); // Nom du trajet

// Fonction pour démarrer ou arrêter l'enregistrement GPS
const toggleRecording = async () => {
  if (!recording.value) {
    // Démarrer l'enregistrement
    recording.value = true;
    positions.value = []; // Réinitialiser les positions au démarrage d'un nouveau trajet
    intervalId = setInterval(async () => {
      try {
        const position = await Geolocation.getCurrentPosition(); // Obtenir la position GPS actuelle
        positions.value.push({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }); // Ajouter les coordonnées GPS dans le tableau des positions
      } catch (error) {
        console.error('Erreur lors de la géolocalisation', error); // Gérer les erreurs de géolocalisation
      }
    }, 1000); // Enregistrer la position toutes les secondes
  } else {
    // Arrêter l'enregistrement
    recording.value = false;
    if (intervalId) {
      clearInterval(intervalId); // Arrêter l'intervalle
      intervalId = undefined; // Réinitialiser l'ID de l'intervalle
    }

    // L'utilisateur peut maintenant voir le trajet et décider d'envoyer ou de démarrer un autre trajet
  }
};

// Fonction pour soumettre le trajet enregistré
const submitTrip = async () => {
  if (positions.value.length > 0 && !recording.value) {
    try {
      // Ici, tu enverras les données du trajet au serveur ou les stockeras localement
      console.log('Trajet soumis avec les positions :', positions.value);

      // Réinitialiser après l'envoi
      tripName.value = '';
      positions.value = [];

      // Logique supplémentaire pour l'envoi du trajet peut aller ici (par exemple, un appel API)
    } catch (error) {
      console.error('Erreur lors de l\'envoi du trajet', error);
    }
  } else {
    console.warn('Aucune position enregistrée ou enregistrement encore actif');
  }
};

export default {
  name: 'AjouterTrajet', // Nom du composant
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
    IonItemDivider
  },
  setup() {
    return {
      toggleRecording, // Fonction pour démarrer/arrêter l'enregistrement
      positions,       // Liste des positions GPS
      recording,       // État de l'enregistrement
      tripName,        // Nom du trajet
      submitTrip       // Fonction pour soumettre le trajet
    };
  }
};
</script>

<style scoped>
/* Styles pour la page */
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
</style>
