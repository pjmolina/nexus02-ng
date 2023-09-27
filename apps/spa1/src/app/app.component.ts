import { Component } from '@angular/core';

interface Pais {
  name: string;
  id: number;
}
@Component({
  selector: 'org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'spa1';
  ordinal = 0;
  resultado = '';
  tiempoTranscurrido = 0;

  cache: { [key: number]: number } = {};

  paises: Pais[] = [
    { id: 10, name: 'España' },
    { id: 20, name: 'Francia' },
    { id: 30, name: 'Italia' },
    { id: 40, name: 'Portugal' },
    { id: 50, name: 'Grecia' },
    { id: 60, name: 'Alemania' },
  ];

  trackById(index: number, item: Pais): number {
    return item.id;
  }
  calcularFibonacci(n: number): void {
    const t0 = new Date();
    this.resultado = '...';
    const res = this.fibConCache(n);
    const t1 = new Date();
    this.tiempoTranscurrido = t1.getTime() - t0.getTime();

    this.resultado = res.toString() + ' ' + this.tiempoTranscurrido + ' ms';
  }

  fibConCache(n: number) {
    const v = this.cache[n];
    if (v) {
      return v; // acierto en cache
    }
    const v1 = fib(n);
    this.cache[n] = v1; // guardar en cache
    return v1;
  }

  onOk1() {
    // todo.
  }
}

// es -> [es: Espal]

export const fib = (n: number): number => {
  // console.log(n);
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
};
