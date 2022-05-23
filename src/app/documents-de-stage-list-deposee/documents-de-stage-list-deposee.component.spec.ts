import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsDeStageListDEPOSEEComponent } from './documents-de-stage-list-deposee.component';

describe('DocumentsDeStageListDEPOSEEComponent', () => {
  let component: DocumentsDeStageListDEPOSEEComponent;
  let fixture: ComponentFixture<DocumentsDeStageListDEPOSEEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentsDeStageListDEPOSEEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsDeStageListDEPOSEEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
