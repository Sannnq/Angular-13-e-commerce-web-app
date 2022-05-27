import { Component } from '@angular/core';
import { items } from '../items';
@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css'],
})
export class ListItemsComponent {
  items = items;
}
