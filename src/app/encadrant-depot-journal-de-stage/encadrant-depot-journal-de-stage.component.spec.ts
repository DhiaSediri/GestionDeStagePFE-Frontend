import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncadrantDepotJournalDeStageComponent } from './encadrant-depot-journal-de-stage.component';

describe('EncadrantDepotJournalDeStageComponent', () => {
  let component: EncadrantDepotJournalDeStageComponent;
  let fixture: ComponentFixture<EncadrantDepotJournalDeStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncadrantDepotJournalDeStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncadrantDepotJournalDeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
