export class Fabricant {
    _id: string;
    nom: String;
    prenom: String;
    telephone: String;
  }
export interface ServerDatas {
  fabricants: Fabricant[];
  }
export interface ServerData {
  fabricant: Fabricant;
  }
