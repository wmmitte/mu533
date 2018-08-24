export class Musee {
    _id: string;
    nom: String;
    description: String;
    adresse: String;
    telephone: String;
  }
export interface ServerDatas {
  musees: Musee[];
  }
export interface ServerData {
  musee: Musee;
  }
