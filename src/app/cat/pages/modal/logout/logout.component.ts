import { Component, OnInit } from '@angular/core';
import { StartComponent } from '../start/start.component';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private startComponent: StartComponent) { }

  ngOnInit(): void {
  }
  Logout(){
    this.startComponent.onLogout();
  }

}
