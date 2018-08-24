export class TypeUtilisateur {
  _id: string;
  libelle: String;
}

export interface ServerDatas {
  typeUtilisateurs: TypeUtilisateur[];
}

export interface ServerData {
  typeUtilisateur: TypeUtilisateur;
}
