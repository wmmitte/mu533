import { Injectable } from '@angular/core';
import {delay, map, share, tap} from 'rxjs/internal/operators';
import { Subject, Observable, Subscription } from 'rxjs';
import { Categorie, ServerData, ServerDatas } from './categorie.model';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  public categoriesSource = new Subject<any[]>();
  public newCategorieSource = new Subject<any>();
  public updatedCategorieSource = new Subject<Categorie>();
  public selectedCategorieSource = new Subject<Categorie>();

  public isWorking: boolean;
  public isWorking$ = new Subject<boolean>();


  private API_URL = 'http://localhost:3001/colMus/api/v1/categories';

  constructor( private http: HttpClient) { }

  search(keyWord: string) {
    this.isWorking = true;
    return this.http.get<ServerDatas>(`${this.API_URL}/search/${keyWord}`)
      .pipe(
        //  tap(ob => console.log(ob)),
        map(obj => <Categorie[]> obj.categories)
      )
     // .pipe(delay(environment.requestDelay)).pipe(share())
      .subscribe(categories => {
        this.isWorking$.next(false);
        this.getCategoriesList(categories);
      });
  }

  create(categorie: Categorie): Observable<Categorie> {
    return this.http.post<ServerData>(`${this.API_URL}`, categorie)
      .pipe(
        //  tap(ob => console.log(ob)),
        map(obj => <Categorie> obj.categorie)
      );
  }

  update(categorie: Categorie): Observable<Categorie> {
    return this.http.put<ServerData>(`${this.API_URL}/${categorie._id}`, categorie)
      .pipe(
        //  tap(ob => console.log(ob)),
        map(obj => <Categorie> obj.categorie)
      );
  }

  findAll() {
    return this.http.get<ServerDatas>(`${this.API_URL}`)
    .pipe(
      map(obj => <Categorie[]> obj.categories)
    )
    .subscribe(categories => {
      this.categoriesSource.next(categories);
    });
  }

  delete(id: any): Observable<Categorie> {
    return this.http.delete<ServerData>(`${this.API_URL}/${id}`)
      .pipe(
        // tap(ob => console.log(ob)),
        map(obj => {
          return <Categorie> obj.categorie;
        })
      );
  }

  findOne(id: any): Observable<Categorie> {
    return this.http.get<ServerData>(`${this.API_URL}/${id}`)
      .pipe(
        // tap(ob => console.log(ob)),
        map(obj => {
          return <Categorie> obj.categorie;
        })
      );
  }



  addCategorie(categorie: Categorie) {
    this.newCategorieSource.next(categorie);
  }

  updateCategorie(categorie: Categorie) {
    this.updatedCategorieSource.next(categorie);
  }

  selectCategorie(categorie: Categorie) {
    this.selectedCategorieSource.next(categorie);
  }

  getCategoriesList(categories: Categorie[]) {
    this.categoriesSource.next();
    this.categoriesSource.next(categories);
  }

}
