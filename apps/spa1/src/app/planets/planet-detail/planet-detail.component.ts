import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Planet } from '../../domain/planet';
import { PlanetService } from '../../services/planet.service';
@Component({
  selector: 'org-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss'],
})
export class PlanetDetailComponent implements OnInit, OnDestroy {
  @Input() id?: number;
  planet?: Planet;
  error = '';
  sub?: Subscription;

  constructor(
    private planetService: PlanetService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const sub = this.route.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id');
      this.id = id ? +id : 0;
      this.load();
    });

    this.load();
  }

  load(): void {
    if (this.id) {
      this.sub = this.planetService.getPlanetById(this.id).subscribe({
        next: (planet) => {
          this.planet = planet;
          this.error = '';
        },
        error: (err) => {
          this.error = err.message;
          this.planet = undefined;
        },
      });
    }
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
      this.sub = undefined;
    }
  }
}
