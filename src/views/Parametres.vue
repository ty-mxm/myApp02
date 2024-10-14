<template>
  <ion-page>
    <ion-header class="header">
      <ion-toolbar color="primary">
        <ion-title>Paramètres</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="settings-content">
      <div class="settings-container">
        <ion-list>
          <ion-item>
            <ion-label>Prénom</ion-label>
            <ion-input v-model="utilisateur.prenom" placeholder="Prénom"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>Nom</ion-label>
            <ion-input v-model="utilisateur.nom" placeholder="Nom"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>E-mail</ion-label>
            <ion-input v-model="utilisateur.email"></ion-input>
          </ion-item>
        </ion-list>

        <ion-button expand="block" @click="sauvegarderModifications">Sauvegarder les modifications</ion-button>
        <ion-button expand="block" @click="changerMotDePasse">Changer mot de passe</ion-button>
        <ion-button expand="block" @click="deconnexion">Déconnecter</ion-button>
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
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonInput,
  IonButton,
  IonFooter
} from '@ionic/vue';
import UtilisateurService from '@/Modele/UtilisateurService';

export default defineComponent({
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    IonFooter,
  },
  setup() {
    const router = useRouter();
    const utilisateur = ref({
      prenom: '',
      nom: '',
      email: ''
    });

    // Function to load the user's information when the page is initialized
    const chargerUtilisateur = async () => {
      try {
        utilisateur.value = await UtilisateurService.getUtilisateurActuel(); // Fetch the user's data
      } catch (error) {
        console.error('Error loading user data', error);
      }
    };

    // Function to save user changes
    const sauvegarderModifications = async () => {
      const userId = localStorage.getItem('userId'); // Retrieve the userId from local storage
      if (!userId) {
        console.error('User ID is missing');
        return;
      }

      try {
        await UtilisateurService.updateUtilisateur({
          userId,
          firstName: utilisateur.value.prenom,
          lastName: utilisateur.value.nom,
        });
        console.log('User data updated successfully');
      } catch (error) {
        console.error('Error updating user data', error);
      }
    };

    // Function to change the user's password
    const changerMotDePasse = () => {
      console.log('Change password functionality to be implemented.');
    };

    // Function to log out the user
    const deconnexion = () => {
      UtilisateurService.logout(); // Call the logout function
      router.push('/login');
    };

    // Load the user's data when the page is loaded
    chargerUtilisateur();

    return {
      utilisateur,
      sauvegarderModifications,
      changerMotDePasse,
      deconnexion,
    };
  },
});
</script>

<style scoped>
.settings-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.settings-container {
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

ion-list {
  margin-bottom: 20px;
}
</style>
