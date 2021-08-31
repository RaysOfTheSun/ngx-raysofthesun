import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalFileUploadComponent } from './portal-file-upload.component';
import { PortalFileUploadItemComponent } from './portal-file-upload-item/portal-file-upload-item.component';
import { PortalFileUploadInputComponent } from './portal-file-upload-input/portal-file-upload-input.component';
import {
  RaysofthesunFileUploadModule,
  FILE_UPLOAD_PREVIEW_MODAL,
} from '@raysofthesun/ui-elements';
import { MatIconModule } from '@angular/material/icon';
import { PortalFileUploadPreviewModalComponent } from './portal-file-upload-preview-modal/portal-file-upload-preview-modal.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    PortalFileUploadComponent,
    PortalFileUploadItemComponent,
    PortalFileUploadInputComponent,
    PortalFileUploadPreviewModalComponent,
  ],
  imports: [
    CommonModule,
    RaysofthesunFileUploadModule,
    MatIconModule,
    MatDialogModule,
  ],
  exports: [PortalFileUploadComponent],
  providers: [
    {
      provide: FILE_UPLOAD_PREVIEW_MODAL,
      useValue: PortalFileUploadPreviewModalComponent,
    },
  ],
})
export class PortalFileUploadModule {}
