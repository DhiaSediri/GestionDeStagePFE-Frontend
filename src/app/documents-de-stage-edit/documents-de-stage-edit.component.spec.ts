import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsDeStageEditComponent } from './documents-de-stage-edit.component';

describe('DocumentsDeStageEditComponent', () => {
  let component: DocumentsDeStageEditComponent;
  let fixture: ComponentFixture<DocumentsDeStageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentsDeStageEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsDeStageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
