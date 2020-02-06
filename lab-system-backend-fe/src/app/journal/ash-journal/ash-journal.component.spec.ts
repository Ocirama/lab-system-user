import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AshJournalComponent } from './ash-journal.component';

describe('AshJournalComponent', () => {
  let component: AshJournalComponent;
  let fixture: ComponentFixture<AshJournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AshJournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AshJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
