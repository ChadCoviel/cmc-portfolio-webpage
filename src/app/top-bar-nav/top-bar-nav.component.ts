import { Component, OnInit } from '@angular/core';
import { sections } from '../sections';

@Component({
  selector: 'app-top-bar-nav',
  templateUrl: './top-bar-nav.component.html',
  styleUrls: ['./top-bar-nav.component.css']
})
export class TopBarNavComponent implements OnInit {
  sections=sections;

  constructor() { }

  ngOnInit(): void {
  }

}
