import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-import-volume',
  templateUrl: './import-volume.component.html',
  styleUrls: ['./import-volume.component.scss']
})
export class ImportVolumeComponent implements OnInit {

volumes: Array<string> = [
  'Volume 1',
  'Volume 2',
  'Volume 3',
  'Volume 4',
  'Volume 5',
  'Volume 6',
  'Volume 7',
  'Volume 8',
  'Volume 9',
  'Volume 10'
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

  constructor() { }

  private isImportHidden = true;
  private isExportHidden = false;

  ngOnInit() {

  }

  showExport() {
    this.isImportHidden = false;
    this.isExportHidden = true;
  }

  showImport() {
    this.isImportHidden = true;
    this.isExportHidden = false;
  }
}
