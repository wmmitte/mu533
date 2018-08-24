export class Technique {
  _id: string;
  libelle: String;
}

export interface ServerDatas {
  techniques: Technique[];
}

export interface ServerData {
  technique: Technique;
}
