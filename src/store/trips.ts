import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTripStore = defineStore('tripStore', () => {
  const trips = ref<any[]>([]);

  const addTrip = (trip: any) => {
    trips.value.push(trip);
  };

  return {
    trips,
    addTrip
  };
});
