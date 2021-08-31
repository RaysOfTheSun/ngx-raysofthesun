import { TestBed } from '@angular/core/testing';

import { FileUploadConfigService } from './file-upload-config.service';

describe('FileUploadConfigService', () => {
  let service: FileUploadConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileUploadConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
