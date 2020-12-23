import { Component, OnInit, Input } from '@angular/core';
import { about_me_content } from '../about-me-content';

@Component({
  selector: 'app-side-bar-nav',
  templateUrl: './side-bar-nav.component.html',
  styleUrls: ['./side-bar-nav.component.css']
})
export class SideBarNavComponent implements OnInit {
  about_me_content=about_me_content;
  @Input() currentSection: string;

  constructor() { }

  ngOnInit(): void {
  }
}
