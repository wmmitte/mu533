import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ObjetComponent } from './objet/objet.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { CategorieListComponent } from './categorie/categorie-list/categorie-list.component';
import { CollecteurComponent } from './collecteur/collecteur.component';
import { CategorieComponent } from './categorie/categorie.component';



const routes: Route[] = [
  {path: '', redirectTo: '/accueil', pathMatch: 'full'},
  {path: 'test', component: CategorieListComponent},
  {path: 'cat', component: CategorieComponent},
  {path: 'accueil', component: AccueilComponent},
  {path: 'collecteur', component: CollecteurComponent},
  {path: 'authentification', component: AuthentificationComponent},
  {path: '**', component: AccueilComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
