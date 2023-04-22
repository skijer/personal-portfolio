import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit{
  showText1=false;
  showText2=false;
  mobile=false;
  ngOnInit(): void {
    this.mobile=window.innerWidth<768;
  }
}
