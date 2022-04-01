import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePDFDocumentsDeStageComponent } from './create-pdfdocuments-de-stage.component';

describe('CreatePDFDocumentsDeStageComponent', () => {
  let component: CreatePDFDocumentsDeStageComponent;
  let fixture: ComponentFixture<CreatePDFDocumentsDeStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePDFDocumentsDeStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePDFDocumentsDeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
