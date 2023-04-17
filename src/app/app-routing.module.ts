import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { LandingComponent } from './landing/landing.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  { path: 'portfolio', component:PortfolioPageComponent},
  { path: '', component:LandingComponent},
  { path: 'about', component:AboutMeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
