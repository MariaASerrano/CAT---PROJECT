import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cis',
  templateUrl: './cis.component.html',
  styleUrls: ['./cis.component.scss']
})
export class CisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myDataArray = [
    { column1: '1: Inventory and Control of Enterprise Assets', column2: 80 },
  ];
}
