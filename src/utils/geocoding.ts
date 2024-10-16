import axios from 'axios';

export const fetchAddress = async (latitude: number, longitude: number): Promise<string> => {
  try {
    const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`);
    return response.data.features[0].properties.label; // Remplacez par la structure de réponse de votre API
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'adresse', error);
    return 'Adresse non trouvée';
  }
};
