import { FileUploadEvent } from './file-upload-event';

export class FileUploadPreviewFileEvent extends FileUploadEvent {
  constructor(fileToPreview: any) {
    super(fileToPreview);
  }
}
