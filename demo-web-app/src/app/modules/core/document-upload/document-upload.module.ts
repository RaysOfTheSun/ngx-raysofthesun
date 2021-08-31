import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DocumentUploadDataMapperService,
  DocumentUploadDataService,
  DocumentUploadService,
} from './services';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class DocumentUploadModule {
  public static forRoot(): ModuleWithProviders<DocumentUploadModule> {
    return {
      ngModule: DocumentUploadModule,
      providers: [
        DocumentUploadService,
        DocumentUploadDataService,
        DocumentUploadDataMapperService,
      ],
    };
  }
}
