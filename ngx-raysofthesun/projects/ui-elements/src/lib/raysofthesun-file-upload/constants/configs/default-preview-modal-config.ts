import { MatDialogConfig } from '@angular/material/dialog';

export const defaultFileUploadPreviewModalConfig: MatDialogConfig = {
  hasBackdrop: false,
  minHeight: '100vh',
  minWidth: '100vw',
  panelClass: ['legify-modal'],
  autoFocus: false,
  restoreFocus: false
};
