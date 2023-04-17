import { Component, HostListener, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate } from '@angular/animations'
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations: [
    trigger('deadTrigger', [
      state('true', style({
        opacity: 1
      })),
      state('false', style({
        opacity: 0.3
      })),
      transition('false => true', [
        animate('1s ease-in-out')
      ])
    ])
  ],
})

export class LandingComponent implements OnInit{
  markedWords = ['I', 'am','a', 'software', 'developer', 'with', 'a', 'degree', 'in', 'biomedical', 'engineer.', 'I', 'love', 'creating', 'software', 'in', 'different', 'areas', 'and', 'innovate', 'with', 'ideas', 'to', 'implement', 'technology', 'in', 'a', 'daily','life'];
  mouseX: number = 0;
  activeWordIndex: number = 0;
  destroying=false;
  x=25.5;
  y=-20;
  scale=window.innerWidth*0.23;
  z=false;
  dead=false;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const x = event.clientX;
    if (x < window.innerWidth * 0.1 || x > window.innerWidth * 0.8) {
      return;
    }
    this.mouseX = event.clientX;
    this.x = event.clientX - this.scale;
  }
  ngOnInit(): void {
    const element = document.getElementById("animable");
    if(element)
    element.style.setProperty('--x', this.x + 'vw');
    this.x=0;
  }

  startAnimation() {
    for (let i = 0; i < this.markedWords.length; i++) {
      setTimeout(() => {
        const point = this.x;
      const element = document.getElementById(`animable-${i}`);
      element?.style.setProperty('--k','absolute');
        for (let j = 0; j < 20; j++) {
          setTimeout(() => {
            if (element) {
              element.style.setProperty('--z', this.z?'red':'white');
            }
            this.z=!this.z;
          }, j * 50);
        }
        for (let j = 0; j < 23; j++) {
        setTimeout(() => {
          if (element) {
            element.style.setProperty('--x', point + 'px');
            element.style.setProperty('--y', this.y*j + 'px');
          }
          const dist = Math.abs(Math.abs(point)-Math.abs(this.x))
          if(30 > dist && j>12 && j<15){
            this.dead=true;
          }
        }, j * 50);
      }
      
    } , i*1000);    
  }
  setTimeout(() => {
  let el = document.getElementById("name");
  if(el)
    el.id='animable-k';
    el?.style.setProperty('--k','absolute');
      for (let j = 0; j < 20; j++) {
        setTimeout(() => {
          if (el) {
            el.style.setProperty('--z', this.z?'red':'white');
          }
          this.z=!this.z;
        if (el) {
          
          el.style.setProperty('--x', window.innerWidth*0.3 + 'px');
          el.style.setProperty('--y', this.y*j + 'px');
        }
        if(j>12 && j<15 && this.x<590 && this.x>-19){
          return
          this.dead=true;
        }
      }, j * 50);
    }
  },this.markedWords.length*1000);
  }
  
}
