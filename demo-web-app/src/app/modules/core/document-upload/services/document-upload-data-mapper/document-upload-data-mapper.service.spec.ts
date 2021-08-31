import { TestBed } from '@angular/core/testing';

import { DocumentUploadDataMapperService } from './document-upload-data-mapper.service';

describe('DocumentUploadDataMapperService', () => {
  let service: DocumentUploadDataMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentUploadDataMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
