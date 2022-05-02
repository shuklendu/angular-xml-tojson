import { Component, VERSION } from '@angular/core';
import { NgxXml2jsonService } from 'ngx-xml2json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  constructor(private ngxXml2jsonService: NgxXml2jsonService) {}

  readFile = (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onload = (evt) => {
      const xmlData: string = (evt as any).target.result;
      console.log(xmlData);
      const parser = new DOMParser();
      const xml = parser.parseFromString(xmlData, 'text/xml');
      const obj = this.ngxXml2jsonService.xmlToJson(xml);
      console.log(obj);
    };
    reader.readAsText(file);
  };
}
