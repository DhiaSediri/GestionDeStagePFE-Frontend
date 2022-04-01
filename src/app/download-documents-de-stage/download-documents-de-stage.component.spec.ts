import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadDocumentsDeStageComponent } from './download-documents-de-stage.component';

describe('DownloadDocumentsDeStageComponent', () => {
  let component: DownloadDocumentsDeStageComponent;
  let fixture: ComponentFixture<DownloadDocumentsDeStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadDocumentsDeStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadDocumentsDeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
