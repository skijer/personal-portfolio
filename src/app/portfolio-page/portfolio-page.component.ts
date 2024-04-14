import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as bootstrap from 'bootstrap';
import projects from './portfolio.json';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css']
})
export class PortfolioPageComponent implements OnInit{
  showText1=false;
  showText2=false;
  mobile=false;
  search: string='';
  project: any[];
  
  constructor() {
    this.project=projects.projects;
     }

  ngOnInit() {
    this.mobile=this.mobile=window.innerWidth < 768;
    var carouselNo = []; 
    var carouselId = []
    for (let i = 0; i < this.project.length; i++){
      carouselId[i] = $('#'+this.project[i].target)[0];
      carouselNo[i] = new bootstrap.Carousel(carouselId[i], {
        interval: 2000,
        touch: false,
        wrap: true
      });
    }
  }
  getRange(count: number): number[] {
    return Array(count).fill(0).map((x, i) => i + 1);
  }
  QuickSearch(tag: string){
    $('.pill-selected').removeClass('pill-selected').addClass('pill-tags');
    if(tag===this.search)
      this.search="";
    else{
      $('#' + tag + '.pill-tags').removeClass('pill-tags').addClass('pill-selected');
      this.search=tag;
    }
  }
}
