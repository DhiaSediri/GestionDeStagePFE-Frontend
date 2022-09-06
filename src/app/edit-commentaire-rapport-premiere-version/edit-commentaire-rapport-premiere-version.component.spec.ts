import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCommentaireRapportPremiereVersionComponent } from './edit-commentaire-rapport-premiere-version.component';

describe('EditCommentaireRapportPremiereVersionComponent', () => {
  let component: EditCommentaireRapportPremiereVersionComponent;
  let fixture: ComponentFixture<EditCommentaireRapportPremiereVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCommentaireRapportPremiereVersionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCommentaireRapportPremiereVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
