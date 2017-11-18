import { Component, Input } from "@angular/core";

@Component({
    selector: 'Painel',
    templateUrl: 'painel.component.html'
})
export class PainelComponent {

    @Input() titulo;

    constructor() {

    }

}