import { Component, OnInit } from '@angular/core';
import { FotoComponent } from 'app/Foto/foto.component';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  foto: FotoComponent;

  constructor() {
    this.foto = new FotoComponent();
  }

  ngOnInit() { }

  cadastrar(event: Event) {
    event.preventDefault();
    console.log(this.foto);
  }

}
