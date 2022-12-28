import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-forms-option',
  templateUrl: './forms-option.component.html',
  styleUrls: ['./forms-option.component.scss']
})
export class FormsOptionComponent  {
  @Input() options = [
    { label: 'No, inexistente' },
    { label: 'Si, en forma reactiva' },
    { label: 'Si, algunas veces' },
    { label: 'Si, en forma proactiva' },
    { label: 'Si, en forma anticipada' }
  ];
  @Output() optionSelected = new EventEmitter<void>();

  selectOption() {
    this.optionSelected.emit();
  }
}
