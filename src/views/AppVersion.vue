<template>
  <ion-item-divider color="light">Version de l'application</ion-item-divider>
  <ion-item>
    <ion-label>
      {{ version }}
    </ion-label>
  </ion-item>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const version = ref('0.0.1'); 
</script>

<style scoped>

</style>
