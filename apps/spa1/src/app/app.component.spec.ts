import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { AppComponent, fib } from './app.component';
import { DialogComponent } from './dialog/dialog.component';
import { Planet } from './domain/planet';
import { PlanetListComponent } from './planets/planet-list/planet-list.component';
import { PlanetService } from './services/planet.service';

describe('fib', () => {
  it('fib(0) = 0', () => {
    expect(fib(0)).toBe(0);
  });
  it('fib(1) = 1', () => {
    expect(fib(1)).toBe(1);
  });
  it('fib(2) = 1', () => {
    expect(fib(2)).toBe(1);
  });
  it('fib(3) = 2', () => {
    expect(fib(3)).toBe(2);
  });
  it('fib(4) = 3', () => {
    expect(fib(4)).toBe(3);
  });
});

class PlanetServiceMock {
  getPlanets(): Observable<Planet[]> {
    return of([]);
  }
}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [AppComponent, DialogComponent, PlanetListComponent],
      providers: [{ provide: PlanetService, useClass: PlanetServiceMock }],
    }).compileComponents();
  });

  it('should render title = Applicacion', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Applicacion');
  });

  it(`should have as title 'spa1'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('spa1');
  });
  it(`sum 1 2 should be 3`, () => {
    const res = 1 + 2;
    expect(res).toEqual(3);
  });
});
