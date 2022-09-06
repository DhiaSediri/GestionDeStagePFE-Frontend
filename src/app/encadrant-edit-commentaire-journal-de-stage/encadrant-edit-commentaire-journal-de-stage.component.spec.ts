import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncadrantEditCommentaireJournalDeStageComponent } from './encadrant-edit-commentaire-journal-de-stage.component';

describe('EncadrantEditCommentaireJournalDeStageComponent', () => {
  let component: EncadrantEditCommentaireJournalDeStageComponent;
  let fixture: ComponentFixture<EncadrantEditCommentaireJournalDeStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncadrantEditCommentaireJournalDeStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncadrantEditCommentaireJournalDeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
