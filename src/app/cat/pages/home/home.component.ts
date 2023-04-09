import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { StartComponent } from '../modal/start/start.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'CAT-Project';
  mostrarHome = true;

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  showHome() {
    this.mostrarHome = true;
  }

  ngOnInit(): void {}
  showFirst() {
    this.dialog
      .open(StartComponent)
      .afterClosed()
      .subscribe((data) => {
        if (data) {
          this.router.navigate(['/info-cat']);
        }
      });
  }
}
