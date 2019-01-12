import { Component, OnInit } from '@angular/core';

import * as M from 'materialize-css';
//import { query } from '@angular/core/src/render3';
@Component({
  selector: 'app-auth-tabs',
  templateUrl: './auth-tabs.component.html',
  styleUrls: ['./auth-tabs.component.css']
})
export class AuthTabsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const tabs = document.querySelector('.tabs');
    M.Tabs.init(tabs, {});
  }
}
