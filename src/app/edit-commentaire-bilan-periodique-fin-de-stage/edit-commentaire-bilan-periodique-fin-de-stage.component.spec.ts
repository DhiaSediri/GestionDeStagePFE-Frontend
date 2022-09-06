import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCommentaireBilanPeriodiqueFinDeStageComponent } from './edit-commentaire-bilan-periodique-fin-de-stage.component';

describe('EditCommentaireBilanPeriodiqueFinDeStageComponent', () => {
  let component: EditCommentaireBilanPeriodiqueFinDeStageComponent;
  let fixture: ComponentFixture<EditCommentaireBilanPeriodiqueFinDeStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCommentaireBilanPeriodiqueFinDeStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCommentaireBilanPeriodiqueFinDeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
