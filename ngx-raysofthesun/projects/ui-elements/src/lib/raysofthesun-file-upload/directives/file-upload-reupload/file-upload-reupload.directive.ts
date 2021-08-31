import { Directive, Input } from '@angular/core';
import { FileUploadEvent, FileUploadReplaceFileEvent } from '../../constants';
import { FileUploadEventDirective } from '../file-upload-event/file-upload-event.directive';

@Directive({
  selector: '[raysofthesunFileUploadReupload]'
})
export class FileUploadReuploadDirective extends FileUploadEventDirective {
  @Input('raysofthesunFileUploadReupload')
  protected fileToReupload: any;

  getEventToPublish(): FileUploadEvent {
    if (!this.fileToReupload) {
      throw new Error(
        'The raysofthesunFileUploadPreview directive requires that you bind a value to it. But, none was found'
      );
    }
    return new FileUploadReplaceFileEvent(this.fileToReupload);
  }
}
