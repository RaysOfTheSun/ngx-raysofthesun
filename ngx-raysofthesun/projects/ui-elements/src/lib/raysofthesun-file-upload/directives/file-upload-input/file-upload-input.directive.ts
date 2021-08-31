import { Directive } from '@angular/core';
import { FileUploadCreateFileEvent, FileUploadEvent } from '../../constants';
import { FileUploadEventDirective } from '../file-upload-event/file-upload-event.directive';

@Directive({
  selector: '[raysofthesunFileUploadInput]'
})
export class FileUploadInputDirective extends FileUploadEventDirective {
  public getEventToPublish(): FileUploadEvent {
    return new FileUploadCreateFileEvent();
  }
}
