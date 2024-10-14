const API_BASE_URL = 'https://server-1-t93s.onrender.com';

export default {
  // Function to retrieve the current user's details from the API
  async getUtilisateurActuel() {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      throw new Error('User not logged in.');
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/tp/get-user/${userId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user data.');
      }

      const data = await response.json();
      return {
        prenom: data.firstName,
        nom: data.lastName,
        email: data.email,
      };
    } catch (error) {
      console.error('Error fetching user details:', error);
      throw error;
    }
  },

  // Function to update user details
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
        throw new Error('Failed to update user data.');
      }

      console.log('User data updated successfully');
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  },

  // Function to update the user's password
  async updatePassword(nouveauMotDePasse: string) {
    console.log('Password updated:', nouveauMotDePasse);
  },

  // Function to log out the user
  logout() {
    console.log('User logged out');
    localStorage.removeItem('userId');
  }
};
