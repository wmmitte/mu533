import {Injectable} from '@angular/core';
import { map } from 'rxjs/internal/operators';
import { Subject, Subscription } from 'rxjs';
import { Collecteur, ServerDatas } from './collecteur.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CollecteurService {

  public collecteursSource = new Subject<Collecteur[]>();


  private API_URL = 'http://localhost:3001/colMus/api/v1/collecteurs';

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<ServerDatas>(`${this.API_URL}`)
    .pipe(
      // tap(ob => console.log(ob)),
      map(obj => <Collecteur[]> obj.collecteurs)
    )
    .subscribe(collecteurs => {
      this.getCollecteursListe(collecteurs);
    });
  }

  getCollecteursListe(collecteurs: Collecteur[]) {
    this.collecteursSource.next();
    this.collecteursSource.next(collecteurs);
  }

}
