import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceTrayComponent } from './reference-tray.component';

describe('TotalMoistureTestSecondComponent', () => {
  let component: ReferenceTrayComponent;
  let fixture: ComponentFixture<ReferenceTrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenceTrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
