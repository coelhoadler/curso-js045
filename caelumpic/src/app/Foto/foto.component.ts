import { Component, Input } from "@angular/core";

@Component({
    selector: "Foto",
    templateUrl: "./foto.component.html"
})
export class FotoComponent {
 @Input("url") url;
 @Input("titulo") titulo = "Sem título";
}