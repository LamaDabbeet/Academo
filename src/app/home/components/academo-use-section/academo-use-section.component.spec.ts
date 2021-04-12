import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademoUseSectionComponent } from './academo-use-section.component';

describe('AcademoUseSectionComponent', () => {
  let component: AcademoUseSectionComponent;
  let fixture: ComponentFixture<AcademoUseSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademoUseSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademoUseSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
