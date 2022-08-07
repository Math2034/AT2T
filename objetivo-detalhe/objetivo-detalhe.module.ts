import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObjetivoDetalhePageRoutingModule } from './objetivo-detalhe-routing.module';

import { ObjetivoDetalhePage } from './objetivo-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObjetivoDetalhePageRoutingModule
  ],
  declarations: [ObjetivoDetalhePage]
})
export class ObjetivoDetalhePageModule {}
