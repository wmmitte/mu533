import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ObjetComponent } from './objet/objet.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CollectionComponent } from './collection/collection.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { TypeMouvementComponent } from './type-mouvement/type-mouvement.component';
import { MouvementComponent } from './mouvement/mouvement.component';
import { TechniqueComponent } from './technique/technique.component';
import { EtatConservationComponent } from './etat-conservation/etat-conservation.component';
import { FabricantComponent } from './fabricant/fabricant.component';
import { LieuFabricationComponent } from './lieu-fabrication/lieu-fabrication.component';
import { CollecteurComponent } from './collecteur/collecteur.component';
import { MateriauxComponent } from './materiaux/materiaux.component';
import { EmplacementComponent } from './emplacement/emplacement.component';
import { LieuAcquisitionComponent } from './lieu-acquisition/lieu-acquisition.component';
import { ModeAcquisitionComponent } from './mode-acquisition/mode-acquisition.component';
import { PhotoComponent } from './photo/photo.component';
import { CategorieComponent } from './categorie/categorie.component';
import { MuseeComponent } from './musee/musee.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { TypeUtilisateurComponent } from './type-utilisateur/type-utilisateur.component';
import { CategorieFormComponent } from './categorie/categorie-form/categorie-form.component';
import { AppRoutingModule } from './app-routing.module';
import { CategorieListComponent } from './categorie/categorie-list/categorie-list.component';
import { CollecteurListeComponent } from './collecteur/collecteur-liste/collecteur-liste.component';
import { CollectionListComponent } from './collection/collection-list/collection-list.component';
import { LoadingComponent } from './share/loading/loading.component';
import { CategorieItemComponent } from './categorie/categorie-item/categorie-item.component';
import { CategorieSearchFormComponent } from './categorie/categorie-search-form/categorie-search-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ObjetComponent,
    CollectionComponent,
    UtilisateurComponent,
    TypeMouvementComponent,
    MouvementComponent,
    TechniqueComponent,
    EtatConservationComponent,
    FabricantComponent,
    LieuFabricationComponent,
    CollecteurComponent,
    MateriauxComponent,
    EmplacementComponent,
    LieuAcquisitionComponent,
    ModeAcquisitionComponent,
    PhotoComponent,
    CategorieComponent,
    MuseeComponent,
    AuthentificationComponent,
    AccueilComponent,
    NavBarComponent,
    FooterComponent,
    TypeUtilisateurComponent,
    CategorieFormComponent,
    CategorieListComponent,
    CollecteurListeComponent,
    CollectionListComponent,
    LoadingComponent,
    CategorieItemComponent,
    CategorieSearchFormComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
