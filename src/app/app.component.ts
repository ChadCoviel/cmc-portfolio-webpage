import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'My Personal Webpage!';
  // currentSection = 'edu-content';
  constructor(private titleService:Title) {
  	this.titleService.setTitle("My Personal Webpage!");
  }
}
