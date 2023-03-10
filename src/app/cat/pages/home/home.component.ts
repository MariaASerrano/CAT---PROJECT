import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { StartComponent } from '../modal/start/start.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'CAT-Project';
  mostrarHome = true;
  mostrarquees = false;
  mostrarimportancia = false;
  mostrarformulario = false;
  comofunciona = false;

  constructor(private dialog: MatDialog, private route: ActivatedRoute) {}

  showHome() {
    this.mostrarHome = true;
    this.mostrarquees = false;
    this.mostrarimportancia = false;
    this.comofunciona = false;
  }

  showQue() {
    this.mostrarHome = false;
    this.mostrarquees = true;
    this.mostrarimportancia = false;
    this.comofunciona = false;
  }

  showImpor() {
    this.mostrarHome = false;
    this.mostrarquees = false;
    this.mostrarimportancia = true;
    this.comofunciona = false;
  }

  showFun() {
    this.mostrarHome = false;
    this.mostrarquees = false;
    this.mostrarimportancia = false;
    this.comofunciona = true;
  }

  ngOnInit(): void {}

  showModal() {
    this.dialog.open(ModalComponent);
  }

  showFirst() {
    this.dialog
      .open(StartComponent)
      .afterClosed()
      .subscribe((data) => {
        if (data) {
          this.showQue();
        }
      });
  }
}
