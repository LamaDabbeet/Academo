import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseAcademoSectionComponent } from './use-academo-section.component';

describe('UseAcademoSectionComponent', () => {
  let component: UseAcademoSectionComponent;
  let fixture: ComponentFixture<UseAcademoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseAcademoSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseAcademoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
