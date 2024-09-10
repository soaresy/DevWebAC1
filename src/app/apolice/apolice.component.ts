import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice',
  templateUrl: './apolice.component.html',
  styleUrls: ['./apolice.component.css']
})
export class ApoliceSeguroComponent {
  nome: string = '';
  sexo: string = 'masculino';
  idade: number | null = null;
  valorAutomovel: number | null = null;
  valorApolice: number | null = null;

  calcularApolice() {
    if (this.sexo === 'masculino') {
      if (this.idade !== null && this.valorAutomovel !== null) {
        this.valorApolice = this.idade <= 25
          ? this.valorAutomovel * 0.15
          : this.valorAutomovel * 0.10;
      }
    } else if (this.sexo === 'feminino' && this.valorAutomovel !== null) {
      this.valorApolice = this.valorAutomovel * 0.08;
    } else {
      this.valorApolice = null;
    }
  }
}