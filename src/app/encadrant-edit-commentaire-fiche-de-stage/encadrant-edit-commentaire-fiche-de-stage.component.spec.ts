import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncadrantEditCommentaireFicheDeStageComponent } from './encadrant-edit-commentaire-fiche-de-stage.component';

describe('EncadrantEditCommentaireFicheDeStageComponent', () => {
  let component: EncadrantEditCommentaireFicheDeStageComponent;
  let fixture: ComponentFixture<EncadrantEditCommentaireFicheDeStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncadrantEditCommentaireFicheDeStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncadrantEditCommentaireFicheDeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
