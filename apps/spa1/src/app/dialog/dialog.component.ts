import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'org-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  @Input() titulo = '';
  @Output() ok = new EventEmitter();
  @Output() cancel = new EventEmitter();

  handleOk(): void {
    this.ok.emit();
  }
  handleCancel(): void {
    this.cancel.emit();
  }
}
