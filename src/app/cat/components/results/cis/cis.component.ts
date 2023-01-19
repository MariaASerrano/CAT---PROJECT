import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  weight: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Control 1. Inventory and Control of Enterprise Assets', weight: 60}
];

@Component({
  selector: 'app-cis',
  templateUrl: './cis.component.html',
  styleUrls: ['./cis.component.scss']
})
export class CisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = [ 'Control', 'Exposicion'];
  dataSource = ELEMENT_DATA;
}
