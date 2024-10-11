<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Paramètres</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
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
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import UtilisateurService from '@/Modele/UtilisateurService'; // Import du service

export default defineComponent({
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonButton
  },
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
/* Ajoutez des styles personnalisés si nécessaire */
</style>
