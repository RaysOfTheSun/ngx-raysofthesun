import { Injectable } from '@angular/core';
import { BehaviorSubject, concat, Observable, of } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';
import { RawFile } from '../../models';

@Injectable()
export class FileUploadService {
  protected readonly totalFileCountSubj: BehaviorSubject<number> = new BehaviorSubject(0);
  protected readonly fileToBeReplacedSubj: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() {}

  get fileToBeReplaced(): Observable<any> {
    return this.fileToBeReplacedSubj.asObservable();
  }

  get totalFileCount$(): Observable<number> {
    return this.totalFileCountSubj.asObservable();
  }

  public setTotalFileCount(totalFileCount: number): void {
    this.totalFileCountSubj.next(totalFileCount);
  }

  public setFileToBeReplaced(fileToBeReplaced: any): void {
    this.fileToBeReplacedSubj.next(fileToBeReplaced);
  }

  public isFileUploadLimitReached(allFiles: any[], maximumUploads: number): boolean {
    return allFiles.length >= maximumUploads;
  }

  public convertHtmlFilesToRawFiles(
    files: FileList,
    acceptedFileTypes: string[],
    maximumUploads: number
  ): Observable<RawFile> {
    const htmlFilesToConvert = Array.from(files);
    const rawFileConversions$ = htmlFilesToConvert.map((file) => {
      const fileType = this.getFileType(file);
      const isFileValid = this.isFileTypeAccepted(fileType, acceptedFileTypes);
      return this.convertHtmlFileToBase64String(file, !isFileValid).pipe(
        withLatestFrom(this.totalFileCount$),
        map<[string, number], RawFile>(([fileBase64String, currTotalFileCount]) => ({
          name: file.name,
          type: fileType,
          size: file.size,
          base64: fileBase64String,
          invalid: !isFileValid,
          rejected: currTotalFileCount + 1 > maximumUploads
        }))
      );
    });

    return concat(...rawFileConversions$);
  }

  protected convertHtmlFileToBase64String(file: File, cancelConversion: boolean): Observable<string> {
    if (cancelConversion) {
      return of(null);
    }

    return new Observable<string>((subscriber) => {
      const fileReader = new window.FileReader();
      fileReader.addEventListener('load', (_: any) => {
        subscriber.next(fileReader.result as string);
        subscriber.complete();
      });

      fileReader.readAsDataURL(file);
    });
  }

  protected isFileTypeAccepted(fileType: string, acceptedTypes: string[]): boolean {
    return acceptedTypes.length === 0 || acceptedTypes.includes(fileType);
  }

  protected getFileType(file: File): string {
    return file.type.split('/')[1];
  }
}
