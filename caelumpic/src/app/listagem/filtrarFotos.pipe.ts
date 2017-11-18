import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filtrarFotos'
})
export class FiltrarFotos implements PipeTransform {
    
    transform(elementos, digitado) {
        if (digitado.length >= 3) {
            const digitadoAlterado = digitado.toLowerCase();
            return elementos.filter((curr) => {
                return curr.titulo.toLowerCase().includes(digitadoAlterado);
            })
        }
        return elementos;
    }
    
}