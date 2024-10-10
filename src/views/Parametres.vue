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
          <ion-input v-model="user.firstName" placeholder="Prénom"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Nom</ion-label>
          <ion-input v-model="user.lastName" placeholder="Nom"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>E-mail</ion-label>
          <ion-input v-model="user.email" placeholder="E-mail" readonly></ion-input>
        </ion-item>
      </ion-list>

      <ion-button expand="block" @click="changePassword">Changer mot de passe</ion-button>
      <ion-button expand="block" @click="logout">Déconnecter</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

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
    const user = ref({
      firstName: '',
      lastName: '',
      email: ''
    });

    const changePassword = () => {
      console.log('Changer mot de passe');
      // Logique pour changer le mot de passe
    };

    const logout = () => {
      console.log('Déconnecter');
      // Logique pour déconnecter l'utilisateur
      router.push('/login');
    };

    return {
      user,
      changePassword,
      logout
    };
  }
});
</script>

<style scoped>
/* Ajoutez des styles personnalisés si nécessaire */
</style>
