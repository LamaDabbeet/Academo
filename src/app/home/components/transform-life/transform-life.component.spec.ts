import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformLifeComponent } from './transform-life.component';

describe('TransformLifeComponent', () => {
  let component: TransformLifeComponent;
  let fixture: ComponentFixture<TransformLifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransformLifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
