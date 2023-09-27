import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Page } from '../domain/paginated-response';
import { PlanetResponse } from '../domain/planet';
import { PlanetService } from './planet.service';

class MockHttp {
  get(): Observable<Page<PlanetResponse>> {
    return of({
      count: 2,
      results: [
        {
          name: 'A',
          rotation_period: 'string',
          orbital_period: '1',
          diameter: '1',
          climate: '11',
          gravity: '1',
          terrain: '1',
          surface_water: '1',
          population: '42',
          residents: ['aa', 'aa'],
          films: ['aa', 'aa'],
          created: '2023-06-07T12:23',
          edited: '2023-06-07T12:23',
          url: 'aaa',
        },
        {
          name: 'B',
          rotation_period: 'string',
          orbital_period: '1',
          diameter: '1',
          climate: '11',
          gravity: '1',
          terrain: '1',
          surface_water: '1',
          population: '1',
          residents: ['aa', 'aa'],
          films: ['aa', 'aa'],
          created: '2023-06-07T12:23',
          edited: '2023-06-07T12:23',
          url: 'aaa',
        },
      ],
    });
  }
}

describe('PlanetService', () => {
  it('debe comvertir respuesta de servidor a respuestas tipadas', (done) => {
    const mockHttp = new MockHttp();
    const sut = new PlanetService(mockHttp as unknown as HttpClient);

    sut.getPlanets().subscribe({
      next: (data) => {
        expect(data.length).toBe(2);
        expect(data[0].name).toBe('A');
        expect(data[1].name).toBe('B');
        expect(data[0].population).toBe(42);
        done();
      },
    });
  });
});
