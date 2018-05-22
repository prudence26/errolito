import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-export',
  templateUrl: './main-export.component.html',
  styleUrls: ['./main-export.component.scss']
})
export class MainExportComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoExportVolume () {
    this.router.navigate(['export-volume']);
  }

  gotoHistoricalTrend() {
    this.router.navigate(['historical-trend']);
  }

  gotoMarketAndProductCode() {
    this.router.navigate(['market-and-product-code']);
  }

  gotoMarketAndProductGrouping() {
    this.router.navigate(['market-and-product-grouping']);
  }

  gotoMarkets() {
    this.router.navigate(['markets']);
  }
}
