import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'Caelumpic';
  fotos: any[];

  constructor(
    private _http: Http
  ) { }

  ngOnInit() {
    const stream = this._http.get("http://localhost:3000/v1/fotos");
    
    stream.subscribe(dados => {
      this.fotos = dados.json();
      console.log(this.fotos);
    });
  }

}
