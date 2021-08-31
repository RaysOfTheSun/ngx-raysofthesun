import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  DocumentUploadDataService,
  DocumentUploadService,
  SupportingDocument,
} from '../core/document-upload';
import {
  FileUploadFileAdded,
  FileUploadItemModified,
} from '@raysofthesun/ui-elements';

@Component({
  selector: 'app-portal-file-upload',
  templateUrl: './portal-file-upload.component.html',
  styleUrls: ['./portal-file-upload.component.scss'],
})
export class PortalFileUploadComponent implements OnInit {
  @Input()
  requirement: any = null;

  @Input()
  header?: string;

  @Input()
  subheader?: string;

  public minimumUploads = 2;

  public maximumUploads = 3;

  protected errorShownSubj: BehaviorSubject<boolean> = new BehaviorSubject(
    false
  );
  protected isLackingDocumentsSubj: BehaviorSubject<boolean> =
    new BehaviorSubject(false);

  constructor(
    protected applyDocumentUploadService: DocumentUploadService,
    protected applyDocumentUploadDataProviderService: DocumentUploadDataService
  ) {}

  ngOnInit(): void {}

  get headerTextId(): string {
    return this.header ? this.header : this.requirement.documentCategory;
  }

  get errorShown$(): Observable<boolean> {
    return this.errorShownSubj.asObservable();
  }

  get isLackingDocuments$(): Observable<boolean> {
    return this.isLackingDocumentsSubj.asObservable();
  }

  get allFiles$(): Observable<SupportingDocument[]> {
    return this.applyDocumentUploadDataProviderService.getAllInvalidDocumentsByOwnerIdAndDocumentType(
      'some-id',
      this.requirement.documentType,
      this.requirement.documentCategory
    );
  }

  public handleItemClicked(item: any): void {}

  public handleFileAdded({ rawFile }: FileUploadFileAdded): void {
    this.applyDocumentUploadService
      .uploadDocument(rawFile, this.requirement)
      .subscribe();
  }

  public handleItemLimitReached(isItemLimitReached: boolean): void {
    this.errorShownSubj.next(isItemLimitReached);
  }

  public handleItemReplaced({
    modifiedItem,
    modifiedItemIndex,
    modifiedItemReplacement,
  }: FileUploadItemModified): void {
    this.applyDocumentUploadService
      .replaceDocument(
        modifiedItemReplacement,
        this.requirement,
        modifiedItemIndex
      )
      .subscribe();
  }

  public handleMinimumUploadsNotReached(
    isMinimumUploadsNotReached: boolean
  ): void {
    this.isLackingDocumentsSubj.next(isMinimumUploadsNotReached);
  }

  public handleItemRemoved({
    modifiedItem,
    modifiedItemIndex,
  }: FileUploadItemModified): void {
    this.applyDocumentUploadDataProviderService
      .deleteDocument(modifiedItem, modifiedItemIndex)
      .subscribe();
  }
}
