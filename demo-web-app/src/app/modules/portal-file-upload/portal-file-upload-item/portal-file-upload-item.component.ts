import { Component, Input, OnInit } from '@angular/core';
import { SupportingDocument } from '../../core/document-upload';

@Component({
  selector: 'app-portal-file-upload-item',
  templateUrl: './portal-file-upload-item.component.html',
  styleUrls: ['./portal-file-upload-item.component.scss'],
})
export class PortalFileUploadItemComponent implements OnInit {
  @Input()
  public src: SupportingDocument;

  public uploadDate = new Date();

  constructor() {}

  ngOnInit(): void {}
}
