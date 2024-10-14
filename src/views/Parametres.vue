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
            <ion-input v-model="utilisateur.email" placeholder="E-mail" readonly></ion-input>
          </ion-item>
        </ion-list>

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
import UtilisateurService from '@/Modele/UtilisateurService'; // Import du service

export default defineComponent({
  setup() {
    const router = useRouter();
    const utilisateur = ref({
      prenom: '',
      nom: '',
      email: ''
    });

    const chargerUtilisateur = async () => {
      utilisateur.value = await UtilisateurService.getUtilisateurActuel(); // Charger les infos de l'utilisateur
    };

    const changerMotDePasse = () => {
      console.log('Changer mot de passe');
      // Logique pour changer le mot de passe
    };

    const deconnexion = () => {
      UtilisateurService.logout(); // Appel au service pour déconnecter
      router.push('/login');
    };

    chargerUtilisateur(); // Charger les infos de l'utilisateur au démarrage

    return {
      utilisateur,
      changerMotDePasse,
      deconnexion
    };
  }
});
</script>

<style scoped>
.settings-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

  /* Conteneur stylisé pour les paramètres */
.settings-container {
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

ion-list {
  margin-bottom: 20px;
}
</style>
