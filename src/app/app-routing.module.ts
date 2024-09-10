import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ConversorTemperaturaComponent } from './conversor-temperatura/conversor-temperatura.component';
import { ApoliceSeguroComponent } from './apolice/apolice.component';
import { IMCComponent } from './imc/imc.component';

const routes: Routes = [
  { path: 'calcular-media', component: CalcularMediaComponent },
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'conversao-temperatura', component: ConversorTemperaturaComponent },
  { path: 'apolice-seguro', component: ApoliceSeguroComponent },
  { path: 'imc-calculator', component: IMCComponent },
  { path: '', redirectTo: '/calcular-media', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/calcular-media' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
