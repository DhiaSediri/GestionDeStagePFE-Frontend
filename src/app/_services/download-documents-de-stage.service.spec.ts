import { TestBed } from '@angular/core/testing';

import { DownloadDocumentsDeStageService } from './download-documents-de-stage.service';

describe('DownloadDocumentsDeStageService', () => {
  let service: DownloadDocumentsDeStageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DownloadDocumentsDeStageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
