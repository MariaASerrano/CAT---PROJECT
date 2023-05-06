import { Component, Input, EventEmitter, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-forms-option',
  templateUrl: './forms-option.component.html',
  styleUrls: ['./forms-option.component.scss'],
})
export class FormsOptionComponent {
  @Input() options = [
    { value: 0, label: 'No, inexistente' },
    { value: 25, label: 'Si, en forma reactiva' },
    { value: 50, label: 'Si, algunas veces' },
    { value: 75, label: 'Si, en forma proactiva' },
    { value: 100, label: 'Si, en forma anticipada' },
  ];
  @Input()
  value!: number;
  @Output() optionSelected = new EventEmitter<string>();
  onOptionSelected(option: MatSelectChange) {
    this.optionSelected.emit(option.value);
  }

  constructor (){
    console.log(this.value);
  }
}
