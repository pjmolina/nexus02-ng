import { Component, Input } from '@angular/core';

@Component({
  selector: 'org-temperatura',
  templateUrl: './temperatura.component.html',
  styleUrls: ['./temperatura.component.scss'],
})
export class TemperaturaComponent {
  @Input() ciudad = '';
  @Input() temperatura = 0;
}
