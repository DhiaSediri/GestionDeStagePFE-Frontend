import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsDeStageAddComponent } from './documents-de-stage-add.component';

describe('DocumentsDeStageAddComponent', () => {
  let component: DocumentsDeStageAddComponent;
  let fixture: ComponentFixture<DocumentsDeStageAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentsDeStageAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsDeStageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
