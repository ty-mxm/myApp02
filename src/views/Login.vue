<template>
    <ion-page>
      <ion-header class="header">
        <ion-toolbar color="primary">
          <ion-title>Connexion</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content class="login-content">
        <div class="login-container">
          <div class="logo-container">
           
          </div>
  
          <ion-item>
            <ion-input v-model="email" type="email" placeholder="email@domaine.com" required></ion-input>
            <ion-icon slot="end" name="mail" color="primary"></ion-icon>
          </ion-item>
          <ion-item>
            <ion-input v-model="password" type="password" placeholder="Mot de passe" required></ion-input>
            <ion-icon slot="end" name="lock-closed-sharp" color="primary"></ion-icon>
          </ion-item>
          <ion-button expand="block" @click="handleLogin">Connexion</ion-button>
          <router-link to="/signup">
            <ion-button expand="block">S'inscrire</ion-button>
          </router-link>
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
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter, IonButton, IonItem, IonInput, IonIcon } from '@ionic/vue';
  import { alertController } from '@ionic/vue';
  import { defineComponent } from 'vue';
  
  // Déclaration des types pour les données de connexion
  export interface LoginUser {
    email: string;
    password: string;
  }
  
  export interface LoginResponse {
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
  }
  
  // Fonction pour envoyer une requête POST
  export async function postJSON(url: string, data: any): Promise<any> {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    return response.json();
  }
  
  export default defineComponent({
    components: {
      IonContent,
      IonHeader,
      IonPage,
      IonTitle,
      IonToolbar,
      IonFooter,
      IonButton,
      IonItem,
      IonInput,
      IonIcon,
    },
    data() {
      return {
        email: '',
        password: '',
        errorMessage: '',
        url: 'https://server-1-t93s.onrender.com/api/tp/login',
      };
    },
    methods: {
      async handleLogin() {
        const loginData: LoginUser = { email: this.email, password: this.password };
  
        if (!this.email || !this.password) {
          const alert = await alertController.create({
            header: 'Erreur d\'entrée',
            message: 'Veuillez entrer votre email et mot de passe.',
            buttons: ['OK'],
          });
          await alert.present();
          return;
        }
  
        try {
          const response: LoginResponse = await postJSON(this.url, loginData);
          const userData = { id: response.userId, firstName: response.firstName, lastName: response.lastName, email: response.email };
          localStorage.setItem('user', JSON.stringify(userData));
          this.$router.push({ path: '/geolocations' });
        } catch (error) {
          this.errorMessage = 'Email ou mot de passe invalide.';
          const alert = await alertController.create({
            header: 'Échec de la connexion',
            message: this.errorMessage,
            buttons: ['OK'],
          });
          await alert.present();
        }
      },
    },
  });
  </script>
  
  <style scoped>
  .login-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .logo-container {
    display: flex;
    justify-content: center;
  }
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
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
  </style>
  