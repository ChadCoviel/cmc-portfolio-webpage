import { Component, OnInit } from '@angular/core';
import { tech } from '../tech';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  tech=tech;
  constructor() { }

  ngOnInit(): void {
  }

}
