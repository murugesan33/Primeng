import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  cars: any[];
  cols: any[];
  sales: any[];
  items1: any[];
  brands: any[];
  colors: any[];
  yearFilter: number;
  yearTimeout: any;
  constructor() { 
    this.cars = [
      {
        vin:'7q2w3e45',
        year:2012,
        brand:"Volvo",
        color:"orange",
      },
      {
        vin:'8q2w3e45',
        year:2011,
        color:"Black",
        brand:"Audi",
      },
      {
        vin:'8q24tr45',
        year:2005,
        color:"Gray",
        brand:"Renault",
      },
      {
        vin:'ewy4tr45',
        year:2003,
        color:"Blue",
        brand:"BMW"
      },
      {
        vin:'ewy4tr45',
        year:1995,
        color:"Orange",
        brand:"Mercedes",
      },
      {
        vin:'ewy6we45',
        year:2005,
        color:"Black",
        brand:"Volvo"
      },
      {
        vin:'swe6we45',
        year:2012,
        color:"Yellow",
        brand:"Honda",
      },
      {
        vin:'swe6se33',
        year:2012,
        color:"Yellow",
        brand:"Honda"
      },
      {
        vin:'tye78912',
        year:2013,
        color:"Orange",
        brand:"Jaguar"
      },
      {
        vin:'tye31265',
        year:2000,
        color:"Black",
        brand:"Ford"
      },
      {
        vin:'tye12365',
        year:2013,
        color:"Red",
        brand:"Fiat"
      },
      {
        vin:'ewy4tr45',
        year:2003,
        color:"Blue",
        brand:"BMW"
      },
      {
        vin:'ewy4tr45',
        year:1995,
        color:"Orange",
        brand:"Mercedes",
      },
      {
        vin:'ewy6we45',
        year:2005,
        color:"Black",
        brand:"Volvo"
      },
      {
        vin:'swe6we45',
        year:2012,
        color:"Yellow",
        brand:"Honda",
      },
      {
        vin:'ewy4tr45',
        year:2003,
        color:"Blue",
        brand:"BMW"
      },
      {
        vin:'ewy4tr45',
        year:1995,
        color:"Orange",
        brand:"Mercedes",
      },
      {
        vin:'ewy6we45',
        year:2005,
        color:"Black",
        brand:"Volvo"
      },
      {
        vin:'swe6we45',
        year:2012,
        color:"Yellow",
        brand:"Honda",
      }
  ];
  this.brands = [
    { label: 'All Brands', value: null },
    { label: 'Audi', value: 'Audi' },
    { label: 'BMW', value: 'BMW' },
    { label: 'Fiat', value: 'Fiat' },
    { label: 'Honda', value: 'Honda' },
    { label: 'Jaguar', value: 'Jaguar' },
    { label: 'Mercedes', value: 'Mercedes' },
    { label: 'Renault', value: 'Renault' },
    { label: 'VW', value: 'VW' },
    { label: 'Volvo', value: 'Volvo' }
];

this.colors = [
  { label: 'White', value: 'White' },
  { label: 'Green', value: 'Green' },
  { label: 'Silver', value: 'Silver' },
  { label: 'Black', value: 'Black' },
  { label: 'Red', value: 'Red' },
  { label: 'Maroon', value: 'Maroon' },
  { label: 'Brown', value: 'Brown' },
  { label: 'Orange', value: 'Orange' },
  { label: 'Blue', value: 'Blue' }
];

  this.cols = [
    { field: 'vin', header: 'Vin' },
    { field: 'year', header: 'Year' },
    { field: 'brand', header: 'Brand' },
    { field: 'color', header: 'Color' }
    
  ];
//   this.sales = [
//     { brand: 'Apple', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342' },
//     { brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122' },
//     { brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' },
//     { brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,' },
//     { brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332' },
//     { brand: 'LG', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005' },
//     { brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214' },
//     { brand: 'Panasonic', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322' },
//     { brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232' },
//     { brand: 'Toshiba', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533' }
// ];
  }

  ngOnInit() {
    this.items1 = [
      {label: 'Table'},
      {label: 'Calendar'},
      {label: 'Edit'},
      {label: 'Documentation'},
      {label: 'Settings'}
    ];
 }

//  onYearChange(event, dt) {
//     if (this.yearTimeout) {
//         clearTimeout(this.yearTimeout);
//     }

//     this.yearTimeout = setTimeout(() => {
//         tt.filter(event.value, 'year', 'gt');
//     }, 250);
//   }

getOnClickEvent(el){
    console.log(el);
}

}
