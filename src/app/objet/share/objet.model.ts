export class Objet {
    _id: string;
    lieuAcquisition: String;
    emplacement: String;
    collecteur: String;
    categorie: String;
    lieuFabrication: string;
    fabricant: String;
    etatConservation: String;
    modeAcquisition: String;
    collectionn: String;
    utilisateur: string;
    numeroInventaire: String;
    ancienNumeroInventaire: String;
    nom: String;
    description: String;
    infosComplementaire: String;
    appelationLocale: String;
    dateAcquisition: Date;
    hauteur: Number;
    profondeur: Number;
    longueur: Number;
    circonference: Number;
    largeur: Number;
    diametre: Number;
    epaisseur: Number;
    poids: Number;
    datation: Date;
    photoref: String;
    photooriginalname: String;
    photodescription: String;
    dateCreation: Date;
    datMaj: Date;
  }
export interface ServerDatas {
  objets: Objet[];
  }
export interface ServerData {
  objet: Objet;
  }
