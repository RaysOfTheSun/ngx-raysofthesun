import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalFileUploadPreviewModalComponent } from './portal-file-upload-preview-modal.component';

describe('PortalFileUploadPreviewModalComponent', () => {
  let component: PortalFileUploadPreviewModalComponent;
  let fixture: ComponentFixture<PortalFileUploadPreviewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalFileUploadPreviewModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalFileUploadPreviewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
