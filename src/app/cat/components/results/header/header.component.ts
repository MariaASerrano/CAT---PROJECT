import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatMenuTrigger} from '@angular/material/menu';
import { LogoutComponent } from 'src/app/cat/pages/modal/logout/logout.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('menuTrigger')
  menuTrigger!: MatMenuTrigger;

  constructor(private dialog: MatDialog) {
    
   }

  ngOnInit(): void {

  }
  showLogout() {
    this.dialog.open(LogoutComponent);
  }

}

