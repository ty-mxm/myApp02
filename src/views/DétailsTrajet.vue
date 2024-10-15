<template>
    <ion-page>
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Détails du Trajet</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content class="details-content">
        <div class="details-container">
          <ion-list>
            <ion-item>
              <ion-label>
                Détails du trajet
              </ion-label>
            </ion-item>
          </ion-list>
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
  import {
    IonItem,
    IonLabel,
    IonList,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonFooter,
    IonPage
  } from '@ionic/vue';
  
  export default {
    name: 'DétailsTrajet',
    components: {
      IonItem,
      IonLabel,
      IonList,
      IonContent,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonFooter,
      IonPage,
    }
  };
  </script>
  
  <style scoped>
  .details-content {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-bottom: 20px;
  }
  
  .details-container {
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
  </style>
  