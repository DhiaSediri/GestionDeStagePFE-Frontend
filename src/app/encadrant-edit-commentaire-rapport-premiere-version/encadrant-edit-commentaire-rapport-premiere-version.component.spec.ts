import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncadrantEditCommentaireRapportPremiereVersionComponent } from './encadrant-edit-commentaire-rapport-premiere-version.component';

describe('EncadrantEditCommentaireRapportPremiereVersionComponent', () => {
  let component: EncadrantEditCommentaireRapportPremiereVersionComponent;
  let fixture: ComponentFixture<EncadrantEditCommentaireRapportPremiereVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncadrantEditCommentaireRapportPremiereVersionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncadrantEditCommentaireRapportPremiereVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
