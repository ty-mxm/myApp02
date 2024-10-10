<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>S'inscrire</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="center-content">
      <ion-item>
        <ion-input v-model="firstName" placeholder="Prénom" required></ion-input>
      </ion-item>
      <ion-item>
        <ion-input v-model="lastName" placeholder="Nom" required></ion-input>
      </ion-item>
      <ion-item>
        <ion-input v-model="email" type="email" placeholder="email@domaine.com" required></ion-input>
      </ion-item>
      <ion-item>
        <ion-input v-model="password" type="password" placeholder="Mot de passe" required></ion-input>
      </ion-item>
      <ion-button expand="block" @click="handleSignUp">S'inscrire</ion-button>
      <router-link to="/login">
        <ion-button expand="block" fill="clear">Retour</ion-button>
      </router-link>
    </ion-content>

    <ion-footer>
      <ion-toolbar color="light">
        <ion-title>Ty Mammoliti et Sofia Krins 2024 ™</ion-title>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonItem, IonInput } from '@ionic/vue';
import { alertController } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonItem, IonInput },
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      url: 'https://server-1-t93s.onrender.com/api/tp/signup',
    };
  },
  methods: {
    async handleSignUp() {
      try {
        const response = await fetch(this.url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
          }),
        });

        if (!response.ok) throw new Error();
        this.$router.push({ path: '/login' });
      } catch {
        const alert = await alertController.create({
          header: 'Erreur',
          message: 'Erreur lors de l\'inscription.',
          buttons: ['OK'],
        });
        await alert.present();
      }
    },
  },
});
</script>

<style scoped>

</style>
