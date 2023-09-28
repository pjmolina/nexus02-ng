import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Observable, of } from 'rxjs';
import { Planet } from '../../domain/planet';
import { PlanetService } from '../../services/planet.service';
import { PlanetListComponent } from './planet-list.component';

class PlanetServiceMock {
  numberOfCalls = 0;

  getPlanets(): Observable<Planet[]> {
    this.numberOfCalls++;
    return of([
      {
        name: 'A',
        rotation_period: 1,
        orbital_period: 1,
        diameter: 1,
        climate: 'arido',
        gravity: 1,
        terrain: 'arid',
        surface_water: 1,
        population: 42000,
        residents: ['aa', 'aa'],
        films: ['aa', 'aa'],
        created: new Date('2023-06-07T12:23'),
        edited: new Date('2023-06-07T12:23'),
        url: 'aaa',
      },
    ]);
  }
}

describe('PlanetListComponent', () => {
  let component: PlanetListComponent;
  let fixture: ComponentFixture<PlanetListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanetListComponent],
      providers: [{ provide: PlanetService, useClass: PlanetServiceMock }],
    });
    fixture = TestBed.createComponent(PlanetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('deberia pintar la poblacion con separadores decimales', () => {
    const pop = fixture.nativeElement.querySelector('.poblacion');
    expect(pop?.textContent).toContain('42,000.00');
  });
});
