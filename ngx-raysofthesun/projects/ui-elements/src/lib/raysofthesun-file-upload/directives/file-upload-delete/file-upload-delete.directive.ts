import { Directive, Input } from '@angular/core';
import { FileUploadDeleteFileEvent, FileUploadEvent } from '../../constants';
import { FileUploadEventDirective } from '../file-upload-event/file-upload-event.directive';

@Directive({
  selector: '[raysofthesunFileUploadDelete]'
})
export class FileUploadDeleteDirective extends FileUploadEventDirective {
  @Input('raysofthesunFileUploadDelete')
  public fileToDelete: any;

  public getEventToPublish(): FileUploadEvent {
    if (!this.fileToDelete) {
      throw new Error(
        'The raysofthesunFileUploadDelete directive requires that you bind a value to it. But, none was found'
      );
    }
    return new FileUploadDeleteFileEvent(this.fileToDelete);
  }
}
