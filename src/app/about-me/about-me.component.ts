import { Component, OnInit, Input } from '@angular/core';
import { tech } from '../tech';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  tech=tech;
  currentSection = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
    console.log('Section ID is: ');
    console.log(sectionId);
  }

  scrollTo(section) {
    document.querySelector('#' + section)
    .scrollIntoView();
  }
}
