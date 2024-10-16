<template>
    <ion-modal :is-open="isOpen" @didDismiss="closeModal">
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Changer le mot de passe</ion-title>
          <ion-buttons slot="end">
            <ion-button @click="closeModal">Fermer</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-item>
          <ion-label>Ancien mot de passe</ion-label>
          <ion-input v-model="oldPassword" type="password" placeholder="Entrez l'ancien mot de passe"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Nouveau mot de passe</ion-label>
          <ion-input v-model="newPassword" type="password" placeholder="Entrez le nouveau mot de passe"></ion-input>
        </ion-item>
        <ion-button expand="block" @click="changerMotDePasse">Changer le mot de passe</ion-button>
      </ion-content>
    </ion-modal>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import {
    IonModal,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonContent,
    IonItem,
    IonInput,
    IonLabel
  } from '@ionic/vue';
  import UtilisateurService from '@/Modele/UtilisateurService';
  
  export default defineComponent({
    components: {
      IonModal,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonButtons,
      IonButton,
      IonContent,
      IonItem,
      IonInput,
      IonLabel
    },
    props: {
      isOpen: Boolean,
      userId: String
    },
    setup(props, { emit }) {
      const oldPassword = ref('');
      const newPassword = ref('');
  
      const changerMotDePasse = async () => {
        if (props.userId && oldPassword.value && newPassword.value) {
          try {
            const response = await UtilisateurService.updatePassword(props.userId, oldPassword.value, newPassword.value);
            if (response.ok) {
              emit('motDePasseChange', 'Mot de passe mis à jour avec succès.');
              closeModal();
            } else {
              console.error('Erreur lors de la mise à jour du mot de passe');
            }
          } catch (error) {
            console.error('Erreur lors de la mise à jour du mot de passe', error);
          }
        }
      };
  
      const closeModal = () => {
        emit('closeModal');
      };
  
      return {
        oldPassword,
        newPassword,
        changerMotDePasse,
        closeModal
      };
    },
  });
  </script>
  