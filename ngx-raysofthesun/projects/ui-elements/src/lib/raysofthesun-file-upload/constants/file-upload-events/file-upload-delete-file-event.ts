import { FileUploadEvent } from './file-upload-event';

export class FileUploadDeleteFileEvent extends FileUploadEvent {
  constructor(fileToDelete: any) {
    super(fileToDelete);
  }
}
