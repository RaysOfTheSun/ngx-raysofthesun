import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FileUploadEvent } from '../../constants/file-upload-events/file-upload-event';

@Injectable()
export class FileUploadEventService {
  protected eventSubj: Subject<any> = new Subject();

  constructor() {}

  get events$(): Observable<any> {
    return this.eventSubj.asObservable();
  }

  public publish(event: FileUploadEvent): void {
    this.eventSubj.next(event);
  }
}
