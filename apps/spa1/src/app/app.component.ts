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
}
