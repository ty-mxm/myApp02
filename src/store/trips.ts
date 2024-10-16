import { defineStore } from 'pinia';
import { ref, watchEffect } from 'vue';

// Définir une interface pour un trajet
interface Trip {
  id: string;
  name: string;
  positions: number;
  date: string;
  userName: string; // Mettre string en minuscule
}

export const useTripStore = defineStore('tripStore', () => {
  const trips = ref<Trip[]>([]); // Type des trajets comme un tableau de Trip

  // Charger les trajets depuis le localStorage au démarrage
  const loadTrips = () => {
    const storedTrips = localStorage.getItem('trips');
    if (storedTrips) {
      trips.value = JSON.parse(storedTrips);
    }
  };

  // Sauvegarder les trajets dans le localStorage à chaque changement
  watchEffect(() => {
    localStorage.setItem('trips', JSON.stringify(trips.value));
  });

  // Ajouter un trajet avec un type explicite
  const addTrip = (trip: Trip) => {
    trips.value.push(trip);
  };

  const getTrips = () => {
    return trips.value;
  };

  // Charger les trajets lors de l'initialisation du store
  loadTrips();

  return { trips, addTrip, getTrips };
});
