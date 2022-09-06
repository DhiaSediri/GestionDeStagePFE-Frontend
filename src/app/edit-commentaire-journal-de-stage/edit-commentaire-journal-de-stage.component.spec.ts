import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCommentaireJournalDeStageComponent } from './edit-commentaire-journal-de-stage.component';

describe('EditCommentaireJournalDeStageComponent', () => {
  let component: EditCommentaireJournalDeStageComponent;
  let fixture: ComponentFixture<EditCommentaireJournalDeStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCommentaireJournalDeStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCommentaireJournalDeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
