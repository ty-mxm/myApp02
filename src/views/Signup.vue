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
import { defineComponent, ref } from 'vue';
import { useSignUpController } from '@/Controller/SignUpController';

export default defineComponent({
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
.center-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
