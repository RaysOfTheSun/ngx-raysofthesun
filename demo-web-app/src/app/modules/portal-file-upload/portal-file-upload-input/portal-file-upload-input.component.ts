import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-portal-file-upload-input',
  templateUrl: './portal-file-upload-input.component.html',
  styleUrls: ['./portal-file-upload-input.component.scss'],
})
export class PortalFileUploadInputComponent implements OnInit {
  @Input()
  public showErrorBanner: boolean;

  constructor() {}

  ngOnInit(): void {}
}
