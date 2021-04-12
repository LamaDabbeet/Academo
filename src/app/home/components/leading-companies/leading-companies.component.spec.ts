import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadingCompaniesComponent } from './leading-companies.component';

describe('LeadingCompaniesComponent', () => {
  let component: LeadingCompaniesComponent;
  let fixture: ComponentFixture<LeadingCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadingCompaniesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadingCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
