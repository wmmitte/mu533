import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Categorie } from '../share/categorie.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-categorie-item',
  templateUrl: './categorie-item.component.html',
  styleUrls: ['./categorie-item.component.css']
})
export class CategorieItemComponent implements OnInit {

  @Input() categorieFromParentToItem: Categorie;
  @Output() removeCategorie = new EventEmitter<Categorie>();
  @Output() itemToParentData = new EventEmitter<Categorie>();

  constructor(private route: Router) { }

  ngOnInit() {
  }


  remove(categorie: Categorie) {
    this.removeCategorie.emit(categorie) ;

 }

selectCategorie(categorie: Categorie) {
 this.itemToParentData.emit({...categorie}) ;
}

getDetails(categorieId) {
   this.route.navigate(['/categories', categorieId]);
}

}
