<template>
  <ion-page>
    <ion-header class="header">
      <ion-toolbar color="primary">
        <ion-title>S'inscrire</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="signup-content">
      <div class="signup-container">
      <!-- Champ de saisie pour le prénom -->
      <ion-item>
        <ion-input v-model="firstName" placeholder="Prénom" required></ion-input>
      </ion-item>
     <!-- Champ de saisie pour le nom -->
      <ion-item>
        <ion-input v-model="lastName" placeholder="Nom" required></ion-input>
      </ion-item>
      <!-- Champ de saisie pour l'email -->
      <ion-item>
        <ion-input v-model="email" type="email" placeholder="email@domaine.com" required></ion-input>
      </ion-item>
      <!-- Champ de saisie pour le mot de passe -->
      <ion-item>
        <ion-input v-model="password" type="password" placeholder="Mot de passe" required></ion-input>
      </ion-item>
      <!-- Bouton pour valider l'inscription, déclenchant la méthode handleSignUp -->
      <ion-button expand="block" @click="handleSignUp">S'inscrire</ion-button>
      <!-- Lien vers la page de connexion -->
      <router-link to="/login">
        <ion-button expand="block" fill="clear" class="white-text-with-underline">
        Retour
        </ion-button>
      </router-link>
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

<script lang="ts">
import { defineComponent, ref } from 'vue';
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
import { useSignUpController } from '@/Controller/SignUpController';

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
    IonFooter
  },
  setup() {

    const { handleSignUp } = useSignUpController();

    const firstName = ref('');
    const lastName = ref('');
    const email = ref('');
    const password = ref('');

    return {
      firstName,
      lastName,
      email,
      password,
      handleSignUp: () => handleSignUp(firstName.value, lastName.value, email.value, password.value),
    };
  },
});
</script>

<style scoped>
  .signup-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  /* Conteneur stylisé pour le formulaire d'inscription */
  .signup-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px; /* Limite la largeur à 400px */
    margin: 80px auto 0;
    padding: 20px;
    border: 2px solid #f48fb1; /* Bordure rose */
    border-radius: 10px; /* Bordure arrondie */
    background-color: rgba(206, 147, 216, 0.8); /* Arrière-plan violet lavande */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Ombre légère */
  }

    .white-text-with-underline {
  color: white;
  text-decoration: underline; /* Ajoute un soulignement */
  text-decoration-color: white;
  }

  .white-text-with-underline:hover {
  color: var(--ion-color-primary); 
  text-decoration-color: var(--ion-color-primary); 
}
</style>
