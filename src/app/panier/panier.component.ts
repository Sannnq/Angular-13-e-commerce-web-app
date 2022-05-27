import { Component } from '@angular/core';
import { PanierService } from '../panier.service';
import { FormBuilder } from '@angular/forms';
import { items, Item } from '../items';
@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
})
export class PanierComponent {
  items = items;
  elements = this.panierService.ElementX();

  constructor(public panierService: PanierService) {}

  ViderPanier() {
    this.elements = this.panierService.ViderPanier();
    window.alert('Achat effectué');
  }
}
