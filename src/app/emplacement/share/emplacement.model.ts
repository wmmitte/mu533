export class Emplacement {
  _id: string;
  libelle: String;
}

export interface ServerDatas {
  emplacements: Emplacement[];
}

export interface ServerData {
  emplacement: Emplacement;
}
