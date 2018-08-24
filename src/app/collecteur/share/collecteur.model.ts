export class Collecteur {
    _id: string;
    nom: String;
    prenom: String;
    telephone: String;
  }
export interface ServerDatas {
    collecteurs: Collecteur[];
  }
export interface ServerData {
    collecteur: Collecteur;
  }
