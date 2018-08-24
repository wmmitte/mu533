export class LieuAcquisition {
  _id: string;
  libelle: String;
}

export interface ServerDatas {
  lieuAcquisitions: LieuAcquisition[];
}

export interface ServerData {
  lieuAcquisition: LieuAcquisition;
}
