export class LieuFabrication {
  _id: string;
  libelle: String;
}

export interface ServerDatas {
  lieuFabrications: LieuFabrication[];
}

export interface ServerData {
  lieuFabrication: LieuFabrication;
}
