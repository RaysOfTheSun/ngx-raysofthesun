import { Inject, Injectable, Optional } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { FILE_UPLOAD_PREVIEW_MODAL_CONFIG, FILE_UPLOAD_PREVIEW_MODAL } from '../../constants';

@Injectable()
export class FileUploadConfigService {
  constructor(
    @Optional() @Inject(FILE_UPLOAD_PREVIEW_MODAL) protected fileUploadPreviewModal: any,
    @Optional() @Inject(FILE_UPLOAD_PREVIEW_MODAL_CONFIG) protected fileUploadpreviewModalConfig: MatDialogConfig
  ) {}

  public getFleUploadPreviewModal(): any {
    return this.fileUploadPreviewModal;
  }

  public getFileUploadPreviewModalConfig(): MatDialogConfig {
    return this.fileUploadpreviewModalConfig;
  }
}
