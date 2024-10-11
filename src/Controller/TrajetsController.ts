export class TrajetsController {
    public async ajouterTrajet(nom: string, positions: any[]) {
      // Logique pour ajouter un trajet
      console.log(`Trajet ${nom} ajouté avec ${positions.length} positions.`);
    }
  
    public async obtenirTrajets() {
      // Logique pour récupérer les trajets
      return [
        { nom: 'Trajet 1', positions: 2, date: '2024-10-10' },
        { nom: 'Trajet 2', positions: 3, date: '2024-10-09' },
      ];
    }
  }
  