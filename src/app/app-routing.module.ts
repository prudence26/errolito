import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExportVolumeComponent } from './export-volume/export-volume.component';
import { ImportVolumeComponent } from './import-volume/import-volume.component';
import { MainExportComponent } from './main-export/main-export.component';
import { HistoricalTrendComponent } from './historical-trend/historical-trend.component';
import { MarketAndProductCodeComponent } from './market-and-product-code/market-and-product-code.component';
import { MarketandproductgroupingComponent } from './market-and-product-grouping/marketandproductgrouping.component';
import { MarketsComponent } from './markets/markets.component';



const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: 'export-volume', component: ExportVolumeComponent },
  { path: 'import-volume', component: ImportVolumeComponent },
  { path: 'main', component: MainExportComponent },
  { path: 'historical-trend', component: HistoricalTrendComponent },
  { path: 'market-and-product-code', component: MarketAndProductCodeComponent },
  { path: 'market-and-product-grouping', component: MarketandproductgroupingComponent },
  { path: 'markets', component: MarketsComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
