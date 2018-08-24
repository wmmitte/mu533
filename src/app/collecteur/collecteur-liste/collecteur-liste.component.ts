import { Component, OnInit } from '@angular/core';
import { CollecteurService } from '../share/collecteur.service';
import { Collecteur } from '../share/collecteur.model';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-collecteur-liste',
  templateUrl: './collecteur-liste.component.html',
  styleUrls: ['./collecteur-liste.component.css']
})
export class CollecteurListeComponent implements OnInit {

  public collecteurs: Collecteur[];
  subscription: Subscription;

  constructor(private collecteurService: CollecteurService) {}

  ngOnInit(): void {

    this.loadAll();


    this.collecteurService.collecteursSource.asObservable()
    .subscribe(collecteurs => {
      this.collecteurs = collecteurs;
    });

  }

  loadAll() {
    this.collecteurService.findAll();
  }

}
