import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { FotoModule } from 'app/Foto/foto.module';
import { PainelModule } from 'app/Painel/painel.module';

import { AppComponent } from './app.component';

import 'rxjs/add/operator/map';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { FooComponent } from './foo/foo.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ListagemComponent,
    FooComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FotoModule,
    PainelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
