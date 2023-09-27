import { Injectable } from '@angular/core';
import { CalculadoraService } from './calculadora';

@Injectable({ providedIn: 'root' })
export class CalculadoraV2Service {
  constructor(private calc: CalculadoraService) {}

  sumar(a: number, b: number): number {
    return this.calc.sumar(a, b);
  }
  restar(a: number, b: number): number {
    return this.calc.restar(a, b);
  }

  multiplicar(a: number, b: number): number {
    let res = 0;
    for (let i = 1; i <= a; i++) {
      //res += b;
      res = this.calc.sumar(res, b);
    }
    return res;
  }
}
