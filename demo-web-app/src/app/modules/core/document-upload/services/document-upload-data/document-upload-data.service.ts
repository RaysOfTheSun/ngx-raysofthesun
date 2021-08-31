import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { SupportingDocument } from '../../models';
import { map, tap, first, concatMap } from 'rxjs/operators';

@Injectable()
export class DocumentUploadDataService {
  protected readonly allDocumentsSubj: BehaviorSubject<SupportingDocument[]> =
    new BehaviorSubject([]);

  get allDocuments$(): Observable<SupportingDocument[]> {
    return this.allDocumentsSubj.asObservable().pipe(first());
  }

  public getAllValidDocumentsByOwnerIdAndDocumentType(): Observable<
    SupportingDocument[]
  > {
    return this.allDocuments$;
  }

  public getAllInvalidDocumentsByOwnerIdAndDocumentType(
    ownerId: string,
    documentType: string,
    documentCategory: string
  ): Observable<SupportingDocument[]> {
    return this.allDocuments$.pipe(
      map((allDocuments) =>
        allDocuments.filter(
          (document) =>
            document.documentType === documentType &&
            document.documentCategory === documentCategory
        )
      )
    );
  }

  public setAllDocuments(updatedAllDocuments: SupportingDocument[]): void {
    this.allDocumentsSubj.next(updatedAllDocuments);
  }

  // TODO: integrate with backend to persist documents into the database
  public uploadDocument(
    documentToUpload: SupportingDocument
  ): Observable<SupportingDocument[]> {
    const uploadDocument$ = of(documentToUpload);

    return uploadDocument$.pipe(
      concatMap((uploadedDocument) => this.addNewDocument(uploadedDocument))
    );
  }

  public deleteDocument(
    documentToDelete: SupportingDocument,
    indexOfDocumentToRemove: number
  ): Observable<SupportingDocument[]> {
    const deleteDocument$ = of(documentToDelete);

    return deleteDocument$.pipe(
      concatMap(() => this.removeDocumentAtIndex(indexOfDocumentToRemove))
    );
  }

  public replaceDocument(
    documentToReplace: SupportingDocument,
    documentReplacement: SupportingDocument,
    indexOfDocumentToReplace: number
  ): Observable<SupportingDocument[]> {
    const replaceDocument$ = of(documentReplacement);

    return replaceDocument$.pipe(
      concatMap((uploadedDocumentReplacement) =>
        this.replaceDocumentAtIndex(
          indexOfDocumentToReplace,
          uploadedDocumentReplacement
        )
      )
    );
  }

  public addNewDocument(
    newDocument: SupportingDocument
  ): Observable<SupportingDocument[]> {
    return this.allDocuments$.pipe(
      map((allDocuments) => {
        const updatedDocuments = [...allDocuments];
        updatedDocuments.push(newDocument);

        return updatedDocuments;
      }),
      tap((updatedDocuments) => this.setAllDocuments(updatedDocuments))
    );
  }

  public removeDocumentAtIndex(
    indexOfDocumentToRemove: number
  ): Observable<SupportingDocument[]> {
    return this.allDocuments$.pipe(
      map((allDocuments) => {
        const updatedDocuments = [...allDocuments];
        updatedDocuments.splice(indexOfDocumentToRemove, 1);

        return updatedDocuments;
      }),
      tap((updatedDocuments) => this.setAllDocuments(updatedDocuments))
    );
  }

  public replaceDocumentAtIndex(
    indexOfDocumentToReplace: number,
    documentReplacement: SupportingDocument
  ): Observable<SupportingDocument[]> {
    return this.allDocuments$.pipe(
      map((allDocuments) => {
        const updatedDocuments = [...allDocuments];
        updatedDocuments.splice(
          indexOfDocumentToReplace,
          1,
          documentReplacement
        );

        return updatedDocuments;
      }),
      tap((updatedDocuments) => this.setAllDocuments(updatedDocuments))
    );
  }
}
