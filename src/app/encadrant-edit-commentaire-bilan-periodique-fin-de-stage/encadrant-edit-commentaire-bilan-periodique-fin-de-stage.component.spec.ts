import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncadrantEditCommentaireBilanPeriodiqueFinDeStageComponent } from './encadrant-edit-commentaire-bilan-periodique-fin-de-stage.component';

describe('EncadrantEditCommentaireBilanPeriodiqueFinDeStageComponent', () => {
  let component: EncadrantEditCommentaireBilanPeriodiqueFinDeStageComponent;
  let fixture: ComponentFixture<EncadrantEditCommentaireBilanPeriodiqueFinDeStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncadrantEditCommentaireBilanPeriodiqueFinDeStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncadrantEditCommentaireBilanPeriodiqueFinDeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
