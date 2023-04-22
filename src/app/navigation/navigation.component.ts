import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  isPaginationOpen = false;

  togglePagination() {
    this.isPaginationOpen = !this.isPaginationOpen;
  }

constructor(private router: Router) {
}

onRouteChange() {
  console.log('Route changed');
}

}
