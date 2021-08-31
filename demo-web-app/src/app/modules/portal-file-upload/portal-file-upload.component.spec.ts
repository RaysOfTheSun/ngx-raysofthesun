import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalFileUploadComponent } from './portal-file-upload.component';

describe('PortalFileUploadComponent', () => {
  let component: PortalFileUploadComponent;
  let fixture: ComponentFixture<PortalFileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalFileUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
