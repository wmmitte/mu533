export class Photo {
    _id: string;
    objet: String;
    filename: String;
    originalname: String;
    uploadDate: Date;
    contentType: string;
    description: String;
  }
export interface ServerDatas {
  photos: Photo[];
  }
export interface ServerData {
  photo: Photo;
  }
