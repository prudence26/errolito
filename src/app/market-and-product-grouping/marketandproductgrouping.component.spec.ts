import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketandproductgroupingComponent } from './marketandproductgrouping.component';

describe('MarketandproductgroupingComponent', () => {
  let component: MarketandproductgroupingComponent;
  let fixture: ComponentFixture<MarketandproductgroupingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketandproductgroupingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketandproductgroupingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
