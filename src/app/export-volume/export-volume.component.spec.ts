import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportVolumeComponent } from './export-volume.component';

describe('ExportVolumeComponent', () => {
  let component: ExportVolumeComponent;
  let fixture: ComponentFixture<ExportVolumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportVolumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
