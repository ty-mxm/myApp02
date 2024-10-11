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
import { defineComponent, ref } from 'vue';
import { useLoginController } from '@/Controller/loginController';

export default defineComponent({
  setup() {
    const email = ref('');
    const password = ref('');
    const { handleLogin } = useLoginController();

    return {
      email,
      password,
      handleLogin: () => handleLogin(email.value, password.value),
    };
  },
});
</script>

<style scoped>
/* Custom styles for login page if necessary */
</style>
