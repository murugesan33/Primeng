import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  
encapsulation: ViewEncapsulation.None
})
export class CarouselComponent implements OnInit {
  cars: any[];
  responsiveOptions;
  constructor() { 
    this.responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    this.cars = [
        {
          brand:"VW",
          year:2012,
          color:"orange"
        },
        {
          brand:"Audi",
          year:2011,
          color:"Black"
        },
        {
          brand:"Renault",
          year:2005,
          color:"Gray"
        },
        {
          brand:"BMW",
          year:2003,
          color:"Blue"
        },
        {
          brand:"Mercedes",
          year:1995,
          color:"Orange"
        },
        {
          brand:"Volvo",
          year:2005,
          color:"Black"
        },
        {
          brand:"Honda",
          year:2012,
          color:"Yellow"
        },
        {
          brand:"Honda",
          year:2012,
          color:"Yellow"
        },
        {
          brand:"Jaguar",
          year:2013,
          color:"Orange"
        },
        {
          brand:"Ford",
          year:2000,
          color:"Black"
        },
        {
          brand:"Fiat",
          year:2013,
          color:"Red"
        }
    ];
    //console.log(this.cars);
  }

  ngOnInit() {
  }

  onClickEvent(obj){
    console.log(obj);
  }
}
