export class EtatConservation {
  _id: string;
  libelle: String;
}

export interface ServerDatas {
  etatConservations: EtatConservation[];
}

export interface ServerData {
  etatConservation: EtatConservation;
}
