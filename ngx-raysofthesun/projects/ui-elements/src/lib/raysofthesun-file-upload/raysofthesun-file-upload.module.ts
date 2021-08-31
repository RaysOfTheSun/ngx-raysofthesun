import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload.component';
import {
  FileUploadInputDirective,
  FileUploadReuploadDirective,
  FileUploadDeleteDirective,
  FileUploadItemDirective,
  FileUploadInvalidItemDirective,
  FileUploadPreviewDirective
} from './directives';
import {
  defaultFileUploadPreviewModalConfig,
  FILE_UPLOAD_PREVIEW_MODAL_CONFIG
} from './constants';
import { FileUploadConfigService } from './services';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    FileUploadComponent,
    FileUploadInputDirective,
    FileUploadReuploadDirective,
    FileUploadDeleteDirective,
    FileUploadItemDirective,
    FileUploadInvalidItemDirective,
    FileUploadPreviewDirective
  ],
  imports: [CommonModule],
  exports: [
    MatDialogModule,
    FileUploadComponent,
    FileUploadItemDirective,
    FileUploadInputDirective,
    FileUploadDeleteDirective,
    FileUploadPreviewDirective,
    FileUploadReuploadDirective,
    FileUploadInvalidItemDirective
  ],
  providers: [
    {
      provide: FILE_UPLOAD_PREVIEW_MODAL_CONFIG,
      useValue: defaultFileUploadPreviewModalConfig
    },
    FileUploadConfigService
  ]
})
export class RaysofthesunFileUploadModule {}
