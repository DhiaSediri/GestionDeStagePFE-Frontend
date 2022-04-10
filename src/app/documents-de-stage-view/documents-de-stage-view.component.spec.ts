import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsDeStageViewComponent } from './documents-de-stage-view.component';

describe('DocumentsDeStageViewComponent', () => {
  let component: DocumentsDeStageViewComponent;
  let fixture: ComponentFixture<DocumentsDeStageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentsDeStageViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsDeStageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
