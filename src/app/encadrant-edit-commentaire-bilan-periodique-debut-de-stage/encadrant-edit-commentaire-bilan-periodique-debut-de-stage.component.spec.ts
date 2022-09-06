import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncadrantEditCommentaireBilanPeriodiqueDebutDeStageComponent } from './encadrant-edit-commentaire-bilan-periodique-debut-de-stage.component';

describe('EncadrantEditCommentaireBilanPeriodiqueDebutDeStageComponent', () => {
  let component: EncadrantEditCommentaireBilanPeriodiqueDebutDeStageComponent;
  let fixture: ComponentFixture<EncadrantEditCommentaireBilanPeriodiqueDebutDeStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncadrantEditCommentaireBilanPeriodiqueDebutDeStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncadrantEditCommentaireBilanPeriodiqueDebutDeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
