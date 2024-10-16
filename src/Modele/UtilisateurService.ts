const API_BASE_URL = 'https://server-1-t93s.onrender.com';

export default {
  // Fonction pour récupérer les détails de l'utilisateur
  async getUtilisateur(userId: string) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/tp/get-user/${userId}`);
      if (!response.ok) {
        throw new Error('Échec de la récupération des données de l\'utilisateur.');
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Erreur lors de la récupération des données de l\'utilisateur:', error);
      throw error;
    }
  },

  // Fonction pour mettre à jour les détails de l'utilisateur
  async updateUtilisateur(utilisateur: { userId: string, firstName: string, lastName: string }) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/tp/update-user`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: utilisateur.userId,
          firstName: utilisateur.firstName,
          lastName: utilisateur.lastName,
        }),
      });

      if (!response.ok) {
        throw new Error('Échec de la mise à jour des données de l\'utilisateur.');
      }

      const result = await response.json();
      console.log('Réponse API mise à jour:', result);
      return response;
    } catch (error) {
      console.error('Erreur lors de la mise à jour des données de l\'utilisateur:', error);
      throw error;
    }
  },

   // Fonction pour mettre à jour le mot de passe de l'utilisateur
   async updatePassword(userId: string, oldPassword: string, newPassword: string) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/tp/change-password`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          oldPassword,
          newPassword,
        }),
      });

      if (!response.ok) {
        throw new Error('Échec de la mise à jour du mot de passe.');
      }

      const result = await response.json();
      console.log('Réponse API mise à jour du mot de passe:', result);
      return response;
    } catch (error) {
      console.error('Erreur lors de la mise à jour du mot de passe:', error);
      throw error;
    }
  },

  // Fonction pour déconnecter l'utilisateur
  logout() {
    console.log('Utilisateur déconnecté');
    localStorage.removeItem('userId');
  }
};
