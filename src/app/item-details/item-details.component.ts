//
import { Component, OnInit } from '@angular/core';

//
import { Item, items } from '../items';

//
import { ActivatedRoute } from '@angular/router';

//
import { PanierService } from '../panier.service';
@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
})
export class ItemDetailsComponent implements OnInit {
  item: Item | undefined;

  constructor(
    public route: ActivatedRoute,
    public PanierService: PanierService
  ) {}

  ngOnInit() {
    // Recuperer l'identifiant du produit en fonction du root
    const routeParams = this.route.snapshot.paramMap;
    const getItemId = Number(routeParams.get('ItemID'));

    // Trouver le produit correspondant à l'ID
    this.item = items.find((item) => item.id === getItemId);
  }

  ajouterPanier(item: Item) {
    this.PanierService.AjouterPanier(item);
    alert('ajouté au panier');
  }
}
