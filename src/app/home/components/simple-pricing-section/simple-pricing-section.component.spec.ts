import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePricingSectionComponent } from './simple-pricing-section.component';

describe('SimplePricingSectionComponent', () => {
  let component: SimplePricingSectionComponent;
  let fixture: ComponentFixture<SimplePricingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplePricingSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplePricingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
