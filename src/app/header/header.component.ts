import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username = '';
  logKey = false;
  userId = 0;
  item = 0;
  constructor() {
  
  }

 

  ngOnInit() {
  }

 

}
