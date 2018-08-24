export class Utilisateur {
    _id: string;
    typeUtilisateur: String;
    nom: String;
    prenom: String;
    login: String;
    password: String;
    telephone: String;
    adresse: String;
    email: String;
  }
export interface ServerDatas {
  utilisateurs: Utilisateur[];
  }
export interface ServerData {
  utilisateur: Utilisateur;
  }
