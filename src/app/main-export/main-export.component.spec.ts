import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainExportComponent } from './main-export.component';

describe('MainExportComponent', () => {
  let component: MainExportComponent;
  let fixture: ComponentFixture<MainExportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainExportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
