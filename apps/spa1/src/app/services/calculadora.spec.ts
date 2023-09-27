import { CalculadoraService } from './calculadora';

describe('CalculadoraService', () => {
  it('sumar(1, 2) debe dar 3', () => {
    const sut = new CalculadoraService();
    expect(sut.sumar(1, 2)).toBe(3);
  });
  it('restar(1, 2) debe dar -1', () => {
    const sut = new CalculadoraService();
    expect(sut.restar(1, 2)).toBe(-1);
  });
});
