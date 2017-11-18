import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FotoComponent } from 'app/Foto/foto.component';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  titulo: string = 'Caelumpic';
  fotos: FotoComponent[] = [];

  constructor(
    private _http: Http
  ) { }

  ngOnInit() {
    const stream = this._http.get("http://localhost:3000/v1/fotos");
    
    stream
    .map(fotos => fotos.json())
    .subscribe(fotos => {
      this.fotos = fotos;
    });    
  }

}
