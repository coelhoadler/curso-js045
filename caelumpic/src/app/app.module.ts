import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FotoModule } from 'app/Foto/foto.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FotoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
