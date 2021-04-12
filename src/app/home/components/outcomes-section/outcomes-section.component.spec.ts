import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutcomesSectionComponent } from './outcomes-section.component';

describe('OutcomesSectionComponent', () => {
  let component: OutcomesSectionComponent;
  let fixture: ComponentFixture<OutcomesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutcomesSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutcomesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
