import { Component, OnInit } from '@angular/core';
import { FotoComponent } from 'app/Foto/foto.component';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  foto: FotoComponent;

  constructor(
    private _http: Http
  ) {
    this.foto = new FotoComponent();
  }

  ngOnInit() { }

  cadastrar(event: Event) {
    event.preventDefault();
    console.log('caindo aqui')
    const cabecalho = new Headers();
    cabecalho.append('Content-Type', 'application/json');

    this._http.post(
      'http://localhost:3000/v1/fotos',
      JSON.stringify(this.foto),
      { 
        headers: cabecalho
      }
    ).subscribe(
      res => console.log(res),
      error => console.log(error)
    )
  }

}
