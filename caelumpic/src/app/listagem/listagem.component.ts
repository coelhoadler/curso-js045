import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  titulo: string = 'Caelumpic';
  fotos: Object[] = [];

  constructor(
    private _http: Http
  ) { }

  ngOnInit() {
    const stream = this._http.get("http://localhost:3000/v1/fotos");
    
    stream
    .map(fotos => fotos.json())
    .subscribe(fotos => {
      this.fotos = fotos;
      console.log(this.fotos);
    });    
  }

}
