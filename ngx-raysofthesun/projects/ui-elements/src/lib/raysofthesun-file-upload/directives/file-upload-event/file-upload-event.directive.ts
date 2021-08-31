import { Directive, HostListener } from '@angular/core';
import { FileUploadEvent } from '../../constants';
import { FileUploadEventService } from '../../services';

@Directive()
export abstract class FileUploadEventDirective {
  constructor(protected fileUploadEventService: FileUploadEventService) {}

  protected abstract getEventToPublish(): FileUploadEvent;

  @HostListener('click', ['$event'])
  protected publishEvent(event: Event): void {
    event.stopPropagation();
    this.fileUploadEventService.publish(this.getEventToPublish());
  }
}
