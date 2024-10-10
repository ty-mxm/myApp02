<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Connexion</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="center-content">
      <ion-item>
        <ion-input v-model="email" type="email" placeholder="email@domaine.com" required></ion-input>
      </ion-item>
      <ion-item>
        <ion-input v-model="password" type="password" placeholder="Mot de passe" required></ion-input>
      </ion-item>
      <ion-button expand="block" @click="handleLogin">Connexion</ion-button>
      <router-link to="/signup">
        <ion-button expand="block" fill="clear">S'inscrire</ion-button>
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
      email: '',
      password: '',
      url: 'https://server-1-t93s.onrender.com/api/tp/login',
    };
  },
  methods: {
    async handleLogin() {
      if (!this.email || !this.password) {
        const alert = await alertController.create({
          header: 'Erreur',
          message: 'Veuillez entrer votre email et mot de passe.',
          buttons: ['OK'],
        });
        await alert.present();
        return;
      }

      try {
        const response = await fetch(this.url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: this.email, password: this.password }),
        });

        if (!response.ok) throw new Error();

        const data = await response.json();
        localStorage.setItem('user', JSON.stringify(data));
        this.$router.push({ path: '/geolocations' });
      } catch {
        const alert = await alertController.create({
          header: 'Échec de la connexion',
          message: 'Email ou mot de passe invalide.',
          buttons: ['OK'],
        });
        await alert.present();
      }
    },
  },
});
</script>

<style scoped>
/* Custom styles for login page if necessary */
</style>
