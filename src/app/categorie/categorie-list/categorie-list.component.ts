import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../share/categorie.service';
import { Categorie, ServerData, ServerDatas } from '../share/categorie.model';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-categorie-list',
  templateUrl: './categorie-list.component.html',
  styleUrls: ['./categorie-list.component.css']
})
export class CategorieListComponent implements OnInit {

  categories: any[];
  subscription: Subscription;
  public searchKeyword: string;
  public formTitle: string;
  public formEditButtonTitle: string;
  public editMode: boolean;
  public isWorking: boolean;
  public selectedCategorie: Categorie;
  private _delay = 2000;

  constructor (private categorieService: CategorieService) { }

  ngOnInit() {

/*
   this.categorieService.categoriesSource.subscribe(
      (categories: any []) => {this.categories = categories; }
    );
    this.categorieService.findAll(); */

    this.loadAll();
   this.categorieService.newCategorieSource.asObservable()
     .subscribe(categorie => {
       this.categorieService.isWorking$.next(false);
       this.categories = [ categorie, ...this.categories];
     });

    this.categorieService.updatedCategorieSource.asObservable()
      .subscribe(categorie => {
        this.categorieService.isWorking$.next(false);
        this.categories.forEach((ca, index) => {
         if (ca._id === categorie._id) {
           this.categories[index] = categorie;
         }
        });
      });

    this.categorieService.categoriesSource.asObservable()
      .subscribe(categories => {
        this.categorieService.isWorking$.next(false);
        this.categories = categories;
      });

    this.categorieService.isWorking$.asObservable()
      .subscribe(isWirkingValue => {
        this.isWorking = isWirkingValue;
      });
  }


  loadAll() {
    this.isWorking = true;
    this.categorieService.findAll();
  }

  resetForm() {
    this.formEditButtonTitle = 'Ajouter';
    this.formTitle = 'Ajouter une categorie';
    this.editMode = false;
    this.selectedCategorie = new Categorie();
  }

  remove(cat: Categorie) {
    this.categorieService.delete(cat._id).subscribe(categorie => {
      if (categorie) {
        this.categories = this.categories.filter(ca => ca._id !== cat._id);
        this.resetForm();
      }
    });
  }

  sendToSubject(categorie: Categorie) {
    this.categorieService.selectCategorie(categorie);
  }

}
