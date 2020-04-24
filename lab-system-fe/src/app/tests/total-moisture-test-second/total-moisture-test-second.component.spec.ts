import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalMoistureTestSecondComponent } from './total-moisture-test-second.component';

describe('TotalMoistureTestSecondComponent', () => {
  let component: TotalMoistureTestSecondComponent;
  let fixture: ComponentFixture<TotalMoistureTestSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalMoistureTestSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalMoistureTestSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
