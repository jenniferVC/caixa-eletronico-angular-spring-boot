import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // quando o caminho for vazio, redirecionar para courses que
  // é um módulo filho que é detalhado no código abaixo
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    // loadChildren quer dizer "carregue de forma automática esse módulo, pois ele é módulo filho desta aplicação"
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'dashboard/:id',
    loadChildren:() => import('./conta/conta.module').then(m => m.ContaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
