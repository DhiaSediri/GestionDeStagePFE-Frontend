import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCommentaireFicheDeStageComponent } from './edit-commentaire-fiche-de-stage.component';

describe('EditCommentaireFicheDeStageComponent', () => {
  let component: EditCommentaireFicheDeStageComponent;
  let fixture: ComponentFixture<EditCommentaireFicheDeStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCommentaireFicheDeStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCommentaireFicheDeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
