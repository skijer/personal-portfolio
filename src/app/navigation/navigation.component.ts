import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event as RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isPaginationOpen = false;
  animateLeft = false;
  animateRight = false;
  mobile=false;
  
  ngOnInit(): void {
    this.mobile=window.innerWidth < 768;
  }

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: RouterEvent) => {
        const navigationEndEvent = event as NavigationEnd;
        console.log('Route changed:', navigationEndEvent.url);
        if(navigationEndEvent.url!='/')
        this.onRouteChange();
      });
  }

  onRouteChange() {
    this.isPaginationOpen=false;
    this.animateLeft = true;
    this.animateRight = true;
    setTimeout(() => {
      this.animateLeft = false;
      this.animateRight = false;}, 3000);
  }

  togglePagination(){
    this.isPaginationOpen=!this.isPaginationOpen;
  }
}
