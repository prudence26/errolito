import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketAndProductCodeComponent } from './market-and-product-code.component';

describe('MarketAndProductCodeComponent', () => {
  let component: MarketAndProductCodeComponent;
  let fixture: ComponentFixture<MarketAndProductCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketAndProductCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketAndProductCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
