import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-export-volume',
  templateUrl: './export-volume.component.html',
  styleUrls: ['./export-volume.component.scss']
})
export class ExportVolumeComponent implements OnInit {

  reportItems: Array<string> = [
'Report 1',
'Report 2',
'Report 3',
'Report 4',
'Report 5',
'Report 6',
'Report 7',
'Report 8',
'Report 9',
'Report 10'
];

months: Array<string> = [
'January',
'February',
'March',
'April',
'May',
'June',
'July',
'August',
'September',
'October',
'November',
'December'
];

quarters: Array<string> = [
'1st Quarter',
'2nd Quarter',
'3rd Quarter',
'4th Quarter',
'5th Quarter',
'6th Quarter',
'7th Quarter',
'8th Quarter',
'9th Quarter',
'10th Quarter'
];

productCodes: Array<string> = [
'Product Code 1',
'Product Code 2',
'Product Code 3',
'Product Code 4',
'Product Code 5',
'Product Code 6',
'Product Code 7',
'Product Code 8',
'Product Code 9',
'Product Code 10'
];

countries: Array<string> = [
'Argentina',
'Belgium',
'Canada',
'Denmark',
'Egypt',
'France',
'Guam',
'Haiti',
'India',
'Japan',
'Kuwait',
'Libya',
'Malaysia',
'New Zealand',
'Oman',
'Philippines',
'Qatar',
'Russia',
'Spain',
'Turkey',
'United Stated of America',
'Vietnam',
'Yemen',
'Zimbabwe'
];

exports: Array<string> = [
  'Export 1',
  'Export 2',
  'Export 3',
  'Export 4',
  'Export 5',
  'Export 6',
  'Export 7',
  'Export 8',
  'Export 9',
  'Export 10'
];

 imports: Array<string> = [
  'Import 1',
  'Import 2',
  'Import 3',
  'Import 4',
  'Import 5',
  'Import 6',
  'Import 7',
  'Import 8',
  'Import 9',
  'Import 10'
];

totalTrades: Array<string> = [
  'Total Trade 1',
  'Total Trade 2',
  'Total Trade 3',
  'Total Trade 4',
  'Total Trade 5',
  'Total Trade 6',
  'Total Trade 7',
  'Total Trade 8',
  'Total Trade 9',
  'Total Trade 10'
];

productDescs: Array<string> = [
  'Description 1',
  'Description 2',
  'Description 3',
  'Description 4',
  'Description 5',
  'Description 6',
  'Description 7',
  'Description 8',
  'Description 9',
  'Description 10',
];

charts: Array<string> = [
  'Bar',
  'Bubble',
  'Doughnut',
  'Horizontal Bar',
  'Pie',
  'Polar',
  'Radar',
  'Real Bar',
];

  constructor() { }

  isExportHidden: boolean;

  ngOnInit() {
    this.isExportHidden = true;
  }

  showImport() {
    this.isExportHidden = false;
  }

}
