import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalFileUploadInputComponent } from './portal-file-upload-input.component';

describe('PortalFileUploadInputComponent', () => {
  let component: PortalFileUploadInputComponent;
  let fixture: ComponentFixture<PortalFileUploadInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalFileUploadInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalFileUploadInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
