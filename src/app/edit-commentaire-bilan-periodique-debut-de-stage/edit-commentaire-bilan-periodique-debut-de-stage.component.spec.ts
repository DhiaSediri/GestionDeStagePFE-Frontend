import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCommentaireBilanPeriodiqueDebutDeStageComponent } from './edit-commentaire-bilan-periodique-debut-de-stage.component';

describe('EditCommentaireBilanPeriodiqueDebutDeStageComponent', () => {
  let component: EditCommentaireBilanPeriodiqueDebutDeStageComponent;
  let fixture: ComponentFixture<EditCommentaireBilanPeriodiqueDebutDeStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCommentaireBilanPeriodiqueDebutDeStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCommentaireBilanPeriodiqueDebutDeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
