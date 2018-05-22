import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ExportVolumeComponent } from './export-volume/export-volume.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { ButtonGroupModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { CalendarModule } from '@progress/kendo-angular-dateinputs';
import { ImportVolumeComponent } from './import-volume/import-volume.component';
import { MainExportComponent } from './main-export/main-export.component';
import { HistoricalTrendComponent } from './historical-trend/historical-trend.component';
import { MarketAndProductCodeComponent } from './market-and-product-code/market-and-product-code.component';
import { MarketandproductgroupingComponent } from './market-and-product-grouping/marketandproductgrouping.component';
import { MarketsComponent } from './markets/markets.component';

@NgModule({
  declarations: [
    AppComponent,
    ExportVolumeComponent,
    ImportVolumeComponent,
    MainExportComponent,
    HistoricalTrendComponent,
    MarketAndProductCodeComponent,
    MarketandproductgroupingComponent,
    MarketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    ButtonGroupModule,
    DropDownsModule,
    LayoutModule,
    DateInputsModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
