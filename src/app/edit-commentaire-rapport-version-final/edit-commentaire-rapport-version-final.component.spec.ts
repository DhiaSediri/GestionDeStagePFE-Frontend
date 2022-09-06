import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCommentaireRapportVersionFinalComponent } from './edit-commentaire-rapport-version-final.component';

describe('EditCommentaireRapportVersionFinalComponent', () => {
  let component: EditCommentaireRapportVersionFinalComponent;
  let fixture: ComponentFixture<EditCommentaireRapportVersionFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCommentaireRapportVersionFinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCommentaireRapportVersionFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
