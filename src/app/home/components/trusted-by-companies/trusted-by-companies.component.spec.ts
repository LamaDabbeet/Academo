import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustedByCompaniesComponent } from './trusted-by-companies.component';

describe('TrustedByCompaniesComponent', () => {
  let component: TrustedByCompaniesComponent;
  let fixture: ComponentFixture<TrustedByCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrustedByCompaniesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrustedByCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
