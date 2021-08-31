import { Injectable } from '@angular/core';
import { SupportingDocument } from '../../models';
import { DocumentUploadDataMapperService } from '../document-upload-data-mapper/document-upload-data-mapper.service';
import { DocumentUploadDataService } from '../document-upload-data/document-upload-data.service';
import { RawFile } from '@raysofthesun/ui-elements';
import { Observable } from 'rxjs';

@Injectable()
export class DocumentUploadService {
  constructor(
    protected documentUploadDataMapperService: DocumentUploadDataMapperService,
    protected documentUploadDataProviderService: DocumentUploadDataService
  ) {}

  public uploadDocument(
    rawFile: RawFile,
    requirement: any
  ): Observable<SupportingDocument[]> {
    const supportingDocumentToUpload =
      this.documentUploadDataMapperService.convertRawFileToSupportingDocument(
        rawFile,
        requirement
      );
    return this.documentUploadDataProviderService.addNewDocument(
      supportingDocumentToUpload
    );
  }

  public replaceDocument(
    rawFile: RawFile,
    requirement: any,
    replaceDocumentAtIndex: number
  ): Observable<SupportingDocument[]> {
    const supportingDocumentToUpload =
      this.documentUploadDataMapperService.convertRawFileToSupportingDocument(
        rawFile,
        requirement
      );

    return this.documentUploadDataProviderService.replaceDocument(
      null,
      supportingDocumentToUpload,
      replaceDocumentAtIndex
    );
  }
}
