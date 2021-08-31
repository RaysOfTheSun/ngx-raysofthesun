import { Injectable } from '@angular/core';
import { RawFile } from '@raysofthesun/ui-elements';
import { SupportingDocument } from '../../models';

@Injectable()
export class DocumentUploadDataMapperService {
  constructor() {}

  public convertRawFileToSupportingDocument(
    rawFile: RawFile,
    requirement: any
  ): SupportingDocument {
    return {
      id: '',
      name: rawFile.name,
      size: rawFile.size,
      file: rawFile.base64,
      ownerId: 'some-id',
      fileType: rawFile.type,
      documentType: requirement.documentType,
      documentCategory: requirement.documentCategory,
    };
  }
}
