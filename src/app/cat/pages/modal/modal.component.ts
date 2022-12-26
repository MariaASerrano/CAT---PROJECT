import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['../home/home.component.scss']
})
export class ModalComponent implements OnInit {
  constructor(public dialog:MatDialogRef<ModalComponent>) { }
  ngOnInit(): void {
  }

  onClickNo(){
    this.dialog.close();
  }

}
