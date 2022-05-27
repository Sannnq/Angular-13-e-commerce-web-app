import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  toggleNav() {
    var design = <HTMLDivElement>document.getElementById('myTopnav');
    if (design.className === 'topnav') {
      design.className += ' responsive';
    } else {
      design.className = 'topnav';
    }
  }
}
