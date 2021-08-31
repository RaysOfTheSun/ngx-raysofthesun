import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalFileUploadItemComponent } from './portal-file-upload-item.component';

describe('PortalFileUploadItemComponent', () => {
  let component: PortalFileUploadItemComponent;
  let fixture: ComponentFixture<PortalFileUploadItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalFileUploadItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalFileUploadItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
