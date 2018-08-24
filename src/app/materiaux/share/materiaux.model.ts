export class Materiaux {
  _id: string;
  libelle: String;
}

export interface ServerDatas {
  materiauxs: Materiaux[];
}

export interface ServerData {
  materiaux: Materiaux;
}
