
import { Component } from '@angular/core';

@Component({
  selector: 'app-calcular-media',
  templateUrl: './calcular-media.component.html',
  styleUrls: ['./calcular-media.component.css']
})
export class CalcularMediaComponent {
  notas = {
    ac1: 0,
    ac2: 0,
    ag: 0,
    af: 0
  };
  resultado: { mediaFinal: number, aprovado: boolean } | null = null;

  calcularMedia() {
    const { ac1, ac2, ag, af } = this.notas;
    const mediaFinal = (ac1 * 0.15) + (ac2 * 0.30) + (ag * 0.10) + (af * 0.45);
    const aprovado = mediaFinal >= 5;
    this.resultado = { mediaFinal, aprovado };
  }
}
