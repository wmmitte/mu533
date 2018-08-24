export class Mouvement {
  _id: string;
  typeMouvement: String;
  objet: String;
  description: String;
  date: Date;
}

export interface ServerDatas {
  mouvements: Mouvement[];
}

export interface ServerData {
  mouvement: Mouvement;
}
