import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './items';
@Injectable({
  providedIn: 'root',
})
export class PanierService {
  elements: Item[] = [];

  constructor(private http: HttpClient) {}

  AjouterPanier(item: Item) {
    this.elements.push(item);
  }

  ElementX() {
    return this.elements;
  }

  ViderPanier() {
    this.elements = [];
    return this.elements;
  }
}
