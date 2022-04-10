import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsDeStageListComponent } from './documents-de-stage-list.component';

describe('DocumentsDeStageListComponent', () => {
  let component: DocumentsDeStageListComponent;
  let fixture: ComponentFixture<DocumentsDeStageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentsDeStageListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsDeStageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
