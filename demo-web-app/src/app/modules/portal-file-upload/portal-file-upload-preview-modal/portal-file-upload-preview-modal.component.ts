import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SupportingDocument } from '../../core/document-upload';

@Component({
  selector: 'app-portal-file-upload-preview-modal',
  templateUrl: './portal-file-upload-preview-modal.component.html',
  styleUrls: ['./portal-file-upload-preview-modal.component.scss'],
})
export class PortalFileUploadPreviewModalComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data) {}

  ngOnInit(): void {}
}
