import { Component, OnInit } from '@angular/core';
import { CollecteurService } from './share/collecteur.service';
import { Collecteur } from './share/collecteur.model';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-collecteur',
  templateUrl: './collecteur.component.html',
  styleUrls: ['./collecteur.component.css']
})
export class CollecteurComponent implements OnInit {

  public collecteurs: Collecteur[];
  subscription: Subscription;
  constructor() {}

  ngOnInit() {
  }

}
