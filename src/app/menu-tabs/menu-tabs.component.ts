import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-tabs',
  templateUrl: './menu-tabs.component.html',
  styleUrls: ['./menu-tabs.component.css']
})
export class MenuTabsComponent implements OnInit {
  item3:any[];
  constructor() { 
      this.item3 = [
          {label: 'table', icon: 'pi pi-fw pi-chart-bar', routerLink:'../table'},
          {label: 'chart', icon: 'pi pi-fw pi-calendar', routerLink:'../chart'}
      ];
  }

  ngOnInit() {
   
  }

}
