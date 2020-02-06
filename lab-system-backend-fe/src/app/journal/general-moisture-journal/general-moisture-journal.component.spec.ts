import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralMoistureJournalComponent } from './general-moisture-journal.component';

describe('GeneralMoistureJournalComponent', () => {
  let component: GeneralMoistureJournalComponent;
  let fixture: ComponentFixture<GeneralMoistureJournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralMoistureJournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralMoistureJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
