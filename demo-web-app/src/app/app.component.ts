import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo-web-app';

  public requirement = {
    documentType: 'some type',
    documentCategory: 'some category',
  };
}
