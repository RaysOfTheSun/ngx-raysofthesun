import { TestBed } from '@angular/core/testing';

import { DocumentUploadDataService } from './document-upload-data.service';

describe('DocumentUploadDataService', () => {
  let service: DocumentUploadDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentUploadDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
