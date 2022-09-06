import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncadrantEditCommentaireBilanPeriodiqueMilieuDeStageComponent } from './encadrant-edit-commentaire-bilan-periodique-milieu-de-stage.component';

describe('EncadrantEditCommentaireBilanPeriodiqueMilieuDeStageComponent', () => {
  let component: EncadrantEditCommentaireBilanPeriodiqueMilieuDeStageComponent;
  let fixture: ComponentFixture<EncadrantEditCommentaireBilanPeriodiqueMilieuDeStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncadrantEditCommentaireBilanPeriodiqueMilieuDeStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncadrantEditCommentaireBilanPeriodiqueMilieuDeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
