import { Component, OnInit } from '@angular/core';
import { Categorie } from '../share/categorie.model';
import { CategorieService } from '../share/categorie.service';
import {NgForm, Form, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-categorie-form',
  templateUrl: './categorie-form.component.html',
  styleUrls: ['./categorie-form.component.css']
})
export class CategorieFormComponent implements OnInit {

  public categorie: Categorie;
  public formTitle: string;
  public formEditButtonTitle: string;
  public editMode: boolean;
  public isWorking: boolean;

  constructor(private categorieService: CategorieService) {}

  ngOnInit() {
    this.resetForm();
    this.categorieService.selectedCategorieSource.asObservable()
      .subscribe(categorie => {
        this.isWorking = false;
        this.categorie = categorie ;
        this.editMode = true;
        this.formEditButtonTitle = 'Editer';
        this.formTitle = 'Editer (' + this.categorie.libelle + ')';
      });
  }

  save(categorieForm: NgForm) {
  this.categorie = new Categorie();
  this.categorie.libelle = categorieForm.value['libelle'] ;
  this.categorie.description = categorieForm.value['description'] ;
  this.categorieService.create(this.categorie)
  .subscribe(categorie => {
    this.categorieService.addCategorie(categorie);
      this.categorie = new Categorie();
  });
  }


  resetForm() {
    this.formEditButtonTitle = 'Ajouter';
    this.formTitle = 'Ajouter une categorie';
    this.editMode = false;
    this.categorie = new Categorie();
    this.isWorking = false;
  }

  update(cat: Categorie) {
    this.isWorking = true;
    this.categorieService.update(cat).subscribe(categorie => {
        if (categorie) {
          this.resetForm();
          this.categorieService.updateCategorie(categorie);
        }
      }

    );
  }

}
