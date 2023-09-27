import { CalculadoraService } from './calculadora';
import { CalculadoraV2Service } from './calculadora-v2';

class MockCalculadora {
  aValue = 0;
  bValue = 0;

  sumar(a: number, b: number): number {
    this.aValue = a;
    this.bValue = b;
    return 42; // SQL
  }
}

class Mock2Calculadora {
  sumar(a: number, b: number): number {
    return a + b;
  }
}

describe('CalculadoraService', () => {
  it('probar la delegacion de la suma', () => {
    /// AAA

    // Arrange
    const mock = new MockCalculadora();
    const sut = new CalculadoraV2Service(mock as unknown as CalculadoraService);

    // Act
    sut.sumar(34, 2);

    // Assert
    expect(mock.aValue).toBe(34);
    expect(mock.bValue).toBe(2);
  });
  it('probar que 2 x 4 = 8', () => {
    const mock = new Mock2Calculadora();
    const sut = new CalculadoraV2Service(mock as unknown as CalculadoraService);

    // Act
    const res = sut.multiplicar(2, 4);

    expect(res).toBe(8);
  });
});
