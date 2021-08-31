import { Directive, Input } from '@angular/core';
import { FileUploadEvent, FileUploadPreviewFileEvent } from '../../constants';
import { FileUploadEventDirective } from '../file-upload-event/file-upload-event.directive';

@Directive({
  selector: '[raysofthesunFileUploadPreview]'
})
export class FileUploadPreviewDirective extends FileUploadEventDirective {
  @Input('raysofthesunFileUploadPreview')
  public fileToPreview: any;

  getEventToPublish(): FileUploadEvent {
    if (!this.fileToPreview) {
      throw new Error(
        'The raysofthesunFileUploadPreview directive requires that you bind a value to it. But, none was found'
      );
    }
    return new FileUploadPreviewFileEvent(this.fileToPreview);
  }
}
