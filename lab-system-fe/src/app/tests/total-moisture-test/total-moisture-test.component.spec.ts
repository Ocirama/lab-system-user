import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalMoistureTestComponent } from './total-moisture-test.component';

describe('TotalMoistureTestComponent', () => {
  let component: TotalMoistureTestComponent;
  let fixture: ComponentFixture<TotalMoistureTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalMoistureTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalMoistureTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
