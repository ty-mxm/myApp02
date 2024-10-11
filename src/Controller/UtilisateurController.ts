export class UtilisateurController {
    private utilisateurService: any;
  
    constructor(utilisateurService: any) {
      this.utilisateurService = utilisateurService;
    }
  
    public async obtenirUtilisateur() {
      return await this.utilisateurService.getUtilisateurActuel();
    }
  
    public async changerMotDePasse(nouveauMotDePasse: string) {
      return await this.utilisateurService.updatePassword(nouveauMotDePasse);
    }
  
    public deconnecterUtilisateur() {
      this.utilisateurService.logout();
    }
  }
  