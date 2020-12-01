import { Component, OnInit } from '@angular/core';
import { links } from '../links';

@Component({
  selector: 'app-bottom-bar-nav',
  templateUrl: './bottom-bar-nav.component.html',
  styleUrls: ['./bottom-bar-nav.component.css']
})
export class BottomBarNavComponent implements OnInit {
  links=links;

  constructor() { }

  ngOnInit(): void {
  }

  goToLink(url: string){
    window.open(url, "_blank");
  }

}
