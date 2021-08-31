import { FileUploadEvent } from './file-upload-event';

export class FileUploadReplaceFileEvent extends FileUploadEvent {
  constructor(fileToReplace: any) {
    super(fileToReplace);
  }
}
