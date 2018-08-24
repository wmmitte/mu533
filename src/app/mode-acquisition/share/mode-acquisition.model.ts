export class ModeAcquisition {
  _id: string;
  libelle: String;
}

export interface ServerDatas {
  modeAcquisitions: ModeAcquisition[];
}

export interface ServerData {
  modeAcquisition: ModeAcquisition;
}
