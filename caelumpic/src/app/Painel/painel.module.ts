import { NgModule } from "@angular/core";
import { PainelComponent } from "app/Painel/painel.component";

import { FiltrarFotos } from '../listagem/filtrarFotos.pipe';

@NgModule({
    declarations: [ PainelComponent, FiltrarFotos ],
    exports: [ PainelComponent, FiltrarFotos ] 
})
export class PainelModule { }