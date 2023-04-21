import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css']
})
export class PortfolioPageComponent implements OnInit {
  showText1=false;
  showText2=false;
  
  constructor() { }

  ngOnInit() {
    const carouselWeb = $('#webPage01')[0];
    const carousel1 = new bootstrap.Carousel(carouselWeb, {
      interval: 2000,
      touch: false,
      wrap: true
    });
    const carouselAudio = $('#carAudio')[0];
    const carousel3 = new bootstrap.Carousel(carouselAudio, {
      interval: 2000,
      touch: false,
      wrap: true
    });
    const carouselRPS = $('#carRPS')[0];
    const carousel4 = new bootstrap.Carousel(carouselRPS, {
      interval: 2000,
      touch: false,
      wrap: true
    });
    
    const carouselKahiit = $('#carKahiit')[0];
    const carousel2 = new bootstrap.Carousel(carouselKahiit, {
      interval: 2000,
      touch: false,
      wrap: true
    });
  }

}
