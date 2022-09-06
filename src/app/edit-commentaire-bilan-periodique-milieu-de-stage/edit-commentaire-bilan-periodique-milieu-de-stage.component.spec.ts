import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCommentaireBilanPeriodiqueMilieuDeStageComponent } from './edit-commentaire-bilan-periodique-milieu-de-stage.component';

describe('EditCommentaireBilanPeriodiqueMilieuDeStageComponent', () => {
  let component: EditCommentaireBilanPeriodiqueMilieuDeStageComponent;
  let fixture: ComponentFixture<EditCommentaireBilanPeriodiqueMilieuDeStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCommentaireBilanPeriodiqueMilieuDeStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCommentaireBilanPeriodiqueMilieuDeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
