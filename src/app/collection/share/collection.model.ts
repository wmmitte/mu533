export class Collection {
    _id: string;
    nom: String;
    presentation: String;
  }
export interface ServerDatas {
  collections: Collection[];
  }
export interface ServerData {
  collection: Collection;
  }
