<template>
  <ion-page>
    <ion-header class="header">
      <ion-toolbar color="primary">
        <ion-title>Connexion</ion-title>
      </ion-toolbar>
    </ion-header>

    <!-- Contenu principal de la page avec formulaire de connexion -->
    <ion-content class="login-content">
      <div class="login-container">

        <!-- Champ de saisie pour l'email -->
        <ion-item>
        <ion-input v-model="email" type="email" placeholder="email@domaine.com" required></ion-input>
        </ion-item>

        <!-- Champ de saisie pour le mot de passe -->
        <ion-item>
          <ion-input v-model="password" type="password" placeholder="Mot de passe" required></ion-input>
        </ion-item>

        <!-- Bouton pour soumettre le formulaire de connexion -->
        <ion-button expand="block" @click="handleLogin">Connexion</ion-button>

        <!-- Lien vers la page d'inscription si l'utilisateur n'a pas encore de compte -->
        <router-link to="/signup">
        <ion-button expand="block" fill="clear" class="white-text-with-underline">
        S'inscrire
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
/* Style pour centrer le contenu de la page de connexion */
.login-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* Conteneur pour les éléments du formulaire de connexion */
.login-container {
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