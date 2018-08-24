export class TypeMouvement {
  _id: string;
  libelle: String;
}

export interface ServerDatas {
  typeMouvements: TypeMouvement[];
}

export interface ServerData {
  typeMouvement: TypeMouvement;
}
