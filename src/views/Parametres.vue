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
            <ion-input v-model="utilisateur.email" disabled></ion-input>
          </ion-item>
        </ion-list>

        <ion-button expand="block" @click="sauvegarderModifications">Sauvegarder les modifications</ion-button>
        <ion-button expand="block" @click="ouvrirModalChangerMotDePasse">Changer mot de passe</ion-button>
        <ion-button expand="block" @click="deconnexion">Déconnecter</ion-button>

        <div v-if="messageConfirmation" class="message-confirmation">{{ messageConfirmation }}</div>
      </div>
    </ion-content>

    <ion-footer class="footer">
      <ion-toolbar color="secondary">
        <ion-title>Ty Mammoliti et Sofia Krins 2024 ™</ion-title>
      </ion-toolbar>
    </ion-footer>

    <ChangerMotDePasseModal
      :isOpen="isModalOpen"
      :userId="userId"
      @closeModal="fermerModalChangerMotDePasse"
      @motDePasseChange="afficherMessageConfirmation"
    />
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
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
import ChangerMotDePasseModal from './ChangerMotDePasseModal.vue';

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
    ChangerMotDePasseModal
  },
  setup() {
    const router = useRouter();
    const utilisateur = ref({
      prenom: '',
      nom: '',
      email: ''
    });
    const messageConfirmation = ref('');
    const isModalOpen = ref(false);
    const userId = ref('');

    const chargerUtilisateur = async () => {
      const userIdValue = localStorage.getItem('userId');
      if (!userIdValue) {
        console.error('User ID est manquant');
        router.push('/login');
        return;
      }

      userId.value = userIdValue;

      try {
        const userData = await UtilisateurService.getUtilisateur(userIdValue);
        utilisateur.value = {
          prenom: userData.firstName,
          nom: userData.lastName,
          email: userData.email,
        };
      } catch (error) {
        console.error('Erreur lors du chargement des données de l\'utilisateur', error);
      }
    };

    const sauvegarderModifications = async () => {
      if (!userId.value) {
        console.error('User ID est manquant');
        return;
      }

      try {
        const response = await UtilisateurService.updateUtilisateur({
          userId: userId.value,
          firstName: utilisateur.value.prenom,
          lastName: utilisateur.value.nom,
        });

        if (response.ok) {
          messageConfirmation.value = 'Informations utilisateur mises à jour avec succès.';
          setTimeout(() => {
            messageConfirmation.value = '';
          }, 2000);
        } else {
          console.error('Erreur lors de la mise à jour des informations');
        }
      } catch (error) {
        console.error('Erreur lors de la mise à jour des informations', error);
      }
    };

    const ouvrirModalChangerMotDePasse = () => {
      isModalOpen.value = true;
    };

    const fermerModalChangerMotDePasse = () => {
      isModalOpen.value = false;
    };

    const afficherMessageConfirmation = (message: string) => {
      messageConfirmation.value = message;
      setTimeout(() => {
        messageConfirmation.value = '';
      }, 2000);
    };

    const deconnexion = () => {
      UtilisateurService.logout();
      router.push('/login');
    };

    onMounted(() => {
      chargerUtilisateur();
    });

    return {
      utilisateur,
      sauvegarderModifications,
      ouvrirModalChangerMotDePasse,
      fermerModalChangerMotDePasse,
      deconnexion,
      messageConfirmation,
      isModalOpen,
      userId,
      afficherMessageConfirmation // Assurez-vous que cette méthode est retournée ici
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
