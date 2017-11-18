import { Component, Input } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Component({
    selector: "Foto",
    templateUrl: "./foto.component.html"
})
export class FotoComponent {
    @Input("url") url;
    @Input("titulo") titulo = "Sem título";

    constructor() { }

}