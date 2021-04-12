import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademoNavbarComponent } from './academo-navbar.component';

describe('AcademoNavbarComponent', () => {
  let component: AcademoNavbarComponent;
  let fixture: ComponentFixture<AcademoNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademoNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademoNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
