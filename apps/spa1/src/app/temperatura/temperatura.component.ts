import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'org-temperatura',
  templateUrl: './temperatura.component.html',
  styleUrls: ['./temperatura.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class TemperaturaComponent {
  @Input() ciudad = '';
  @Input() temperatura = 0;

  velodicadDelViento = 12;

  numberOfTicks = 0;

  constructor(private cd: ChangeDetectorRef) {
    setInterval(() => {
      this.cd.detach();
      this.numberOfTicks++;
      // require view to be updated
      this.temperatura += this.numberOfTicks;

      this.cd.reattach();
      //this.cd.markForCheck();
    }, 1000);
  }

  cambio(): void {
    this.cd.detach();

    this.ciudad = 'A';
    this.temperatura = 20;
    //... 1000 cambios mas

    this.cd.reattach();
    this.cd.markForCheck();

    // modelo=estado    <-->       HTML
  }
}
