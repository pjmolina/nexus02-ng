import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CalculadoraService {
  sumar(a: number, b: number): number {
    return a + b;
  }
  restar(a: number, b: number): number {
    return a - b;
  }
}
