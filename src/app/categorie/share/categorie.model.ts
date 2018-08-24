export class Categorie {
  _id: string;
  libelle: String;
  description: String;
}

export interface ServerDatas {
  categories: Categorie[];
}

export interface ServerData {
  categorie: Categorie;
}
