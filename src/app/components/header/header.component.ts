import { Component, OnInit } from '@angular/core';
import {MatBadgeModule, MatButtonModule, MatIconModule} from '@angular/material'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  opened = false;
  constructor() { }

  ngOnInit() {
  }

  openTab() {
    this.opened = true;
  }

}
