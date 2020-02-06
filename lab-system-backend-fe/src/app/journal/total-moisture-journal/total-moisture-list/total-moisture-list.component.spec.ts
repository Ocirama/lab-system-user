import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalMoistureListComponent } from './total-moisture-list.component';

describe('TotalMoistureListComponent', () => {
  let component: TotalMoistureListComponent;
  let fixture: ComponentFixture<TotalMoistureListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalMoistureListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalMoistureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
