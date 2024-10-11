export default {
    async getUtilisateurActuel() {
      // Logique pour obtenir les infos de l'utilisateur connecté
      return {
        prenom: '',
        nom: '',
        email: ''
      };
    },
  
    async updatePassword(nouveauMotDePasse: string) {
      // Logique pour mettre à jour le mot de passe de l'utilisateur
      console.log('Mot de passe mis à jour:', nouveauMotDePasse);
    },
  
    logout() {
      // Logique pour déconnecter l'utilisateur
      console.log('Utilisateur déconnecté');
      localStorage.removeItem('user'); // Exemple de déconnexion simple
    }
  };
  