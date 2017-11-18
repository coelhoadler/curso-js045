import { ListagemComponent } from './listagem/listagem.component'
import { CadastroComponent } from './cadastro/cadastro.component'

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: ListagemComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: '**', redirectTo: '' }
];

export const appRoutes = RouterModule.forRoot(routes);
