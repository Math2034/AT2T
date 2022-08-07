import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObjetivoDetalhePage } from './objetivo-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: ObjetivoDetalhePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObjetivoDetalhePageRoutingModule {}
