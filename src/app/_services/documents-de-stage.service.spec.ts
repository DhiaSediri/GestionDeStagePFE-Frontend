import { TestBed } from '@angular/core/testing';

import { DocumentsDeStageService } from './documents-de-stage.service';

describe('DocumentsDeStageService', () => {
  let service: DocumentsDeStageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentsDeStageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
