import { Component, OnInit } from '@angular/core';
import { StartComponent } from '../modal/start/start.component';
import { ModalComponent } from '../modal/modal.component';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-info-cat',
  templateUrl: './info-cat.component.html',
  styleUrls: ['./info-cat.component.scss'],
})
export class InfoCatComponent implements OnInit {
  mostrarquees = true;
  mostrarimportancia = false;
  comofunciona = false;

  constructor(private dialog: MatDialog, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  showQue() {
    this.mostrarquees = true;
    this.mostrarimportancia = false;
    this.comofunciona = false;
  }

  showImpor() {
    this.mostrarquees = false;
    this.mostrarimportancia = true;
    this.comofunciona = false;
  }

  showFun() {
    this.mostrarquees = false;
    this.mostrarimportancia = false;
    this.comofunciona = true;
  }

  showModal() {
    this.dialog.open(ModalComponent);
  }

  
}
