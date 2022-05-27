import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { ListItemsComponent } from './list-items/list-items.component';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { PanierService } from './panier.service';
import { PanierComponent } from './panier/panier.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ListItemsComponent,
    ItemDetailsComponent,
    PanierComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: ListItemsComponent },
      { path: 'items/:ItemID', component: ItemDetailsComponent },
      { path: 'panier', component: PanierComponent },
    ]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
